import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

import {
  EDUCATION,
  EXPERIENCES,
  LANGUAGES,
  PROFILE,
  SOFT_SKILLS,
  STACK,
} from "@/lib/resume";

const SYSTEM_PROMPT = `You are a personal assistant on Long-Quan Hoang-Pham's portfolio website. Your job is to answer questions about Long-Quan's professional background, experience, and skills — and nothing else.

If someone asks something unrelated to Long-Quan (e.g. general coding questions, politics, recipes, etc.), politely redirect them: explain you can only answer questions about Long-Quan's background.

Be concise, direct, and friendly. Answer in plain text — no markdown, no bullet symbols, no asterisks. Keep responses short unless the question genuinely requires detail.

--- ABOUT LONG-QUAN ---

Full name: ${PROFILE.name}
Role: ${PROFILE.role}
Location: ${PROFILE.location}
Email: ${PROFILE.email}
GitHub: github.com/${PROFILE.github}
LinkedIn: linkedin.com/in/${PROFILE.linkedin}

--- WORK EXPERIENCE ---

${EXPERIENCES.map(({ company, description, location, period, stack, title }) =>
  [
    `${title} @ ${company}, ${location}`,
    period,
    description,
    stack && `Stack: ${stack.join(", ")}`,
  ]
    .filter(Boolean)
    .join("\n"),
).join("\n\n")}

--- SKILLS ---

${STACK.map(({ group, items }) => `${group}: ${items.join(", ")}`).join("\n")}
Soft skills: ${SOFT_SKILLS.join(", ")}

--- EDUCATION ---

${EDUCATION.degree} @ ${EDUCATION.school}, ${EDUCATION.location} — ${EDUCATION.period}

--- LANGUAGES ---

${LANGUAGES.map(({ lang, level }) => `${lang}: ${level}`).join("\n")}`;

export interface ChatMessage {
  content: string;
  role: "assistant" | "user";
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey || apiKey === "your_api_key_here") {
    return NextResponse.json(
      { error: "OPENROUTER_API_KEY is not configured." },
      { status: 500 },
    );
  }

  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Invalid messages");
    }
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const client = new OpenAI({
    apiKey,
    baseURL: "https://openrouter.ai/api/v1",
  });

  try {
    const stream = await client.chat.completions.create({
      messages: [{ content: SYSTEM_PROMPT, role: "system" }, ...messages],
      model: "openrouter/free",
      stream: true,
    });

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? "";
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err: unknown) {
    console.error("OpenRouter API error:", err);
    const status = (err as { status?: number }).status;
    if (status === 429) {
      return NextResponse.json(
        { error: "All free models are busy right now. Try again in a moment." },
        { status: 429 },
      );
    }
    return NextResponse.json(
      { error: "Failed to get response from OpenRouter." },
      { status: 502 },
    );
  }
}
