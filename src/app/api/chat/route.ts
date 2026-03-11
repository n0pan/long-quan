import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are a personal assistant on Long-Quan Hoang-Pham's portfolio website. Your job is to answer questions about Long-Quan's professional background, experience, and skills — and nothing else.

If someone asks something unrelated to Long-Quan (e.g. general coding questions, politics, recipes, etc.), politely redirect them: explain you can only answer questions about Long-Quan's background.

Be concise, direct, and friendly. Answer in plain text — no markdown, no bullet symbols, no asterisks. Keep responses short unless the question genuinely requires detail.

--- ABOUT LONG-QUAN ---

Full name: Long-Quan Hoang-Pham
Role: Software Developer
Location: Montréal, Canada
Email: lq@long-quan.com
GitHub: github.com/n0pan
LinkedIn: linkedin.com/in/longquanhp

--- WORK EXPERIENCE ---

Software Engineer @ AI Venture Studio (Stealth), Palo Alto
Jul 2024 – Mar 2026
Collaborated within a stealth AI venture studio to identify and engineer high-impact AI applications for different sectors. Focused on moving from 0-to-1 by building reusable foundational technology that accelerated the development of mission-critical, AI-native products.
Stack: React, NextJS, TypeScript, MCP, LiveKit, Supabase, PostgreSQL, OpenAI API

Front-end Developer @ Taiga Motors, Montréal
Jan 2022 – Jul 2024
Led the design and integration of the front-end architecture across various applications, including the official Taiga mobile application.
Stack: React Native, TypeScript, Svelte, Rollup, NextJS, Docker, AWS

Tech Lead – Customer Experience @ Cook it, Montréal
Feb 2021 – Jan 2022
Led the customer experience team, acting as interim Scrum Master and Product Owner while improving hiring and onboarding processes.

Front-end Developer @ Cook it, Montréal
Dec 2017 – Feb 2021
Joined when the tech department was just the CTO; helped build the platform from scratch and created reusable React components used throughout the platform.
Stack: React, Meteor, Node, TypeScript, GraphQL, Docker

Freelance Web Developer @ Spotlyne, Montréal
Jan 2019 – Sep 2020
Designed and integrated new pages based on client needs, created reusable React components, and spearheaded the migration of the application's design system to Ant Design.
Stack: React, Meteor, Node, GraphQL

Front-end Developer Intern @ DFuse, Montréal
May 2017 – Aug 2017
Designed and built UIs communicating with the database via Meteor DDP and WebSockets, and helped design mockups for the main platform.
Stack: Meteor, HTML, SASS, Handlebars

--- SKILLS ---

Frontend: React, React Native, NextJS, TypeScript, Svelte, SASS
Backend: Node, Meteor, GraphQL, Python, PostgreSQL, Supabase
DevOps: Docker, AWS
AI: OpenAI API, MCP, LiveKit
Soft skills: Leadership, Organization, Communication, Teamwork, Adaptability, Problem solving, Active listening

--- EDUCATION ---

Arts, Lettres & Communications (DEC) @ Collège Jean-de-Brébeuf, Montréal — 2011–2013

--- LANGUAGES ---

French: native
English: native
Vietnamese: fluent`;

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
