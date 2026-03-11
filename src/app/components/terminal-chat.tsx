"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface Message {
  content: string;
  role: "assistant" | "user";
}

const SUGGESTIONS = [
  "what did you work on at Taiga Motors?",
  "what's your tech stack?",
  "tell me about your AI experience",
  "how can I contact you?",
];

export default function TerminalChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [caretLeft, setCaretLeft] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Track caret position by measuring rendered text width
  useLayoutEffect(() => {
    if (measureRef.current) {
      setCaretLeft(measureRef.current.getBoundingClientRect().width);
    }
  }, [input]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;

      const userMessage: Message = { content: trimmed, role: "user" };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      setInput("");
      setIsStreaming(true);

      // Placeholder for the streaming response
      setMessages((prev) => [...prev, { content: "", role: "assistant" }]);

      try {
        const res = await fetch("/api/chat", {
          body: JSON.stringify({ messages: newMessages }),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        });

        if (!res.ok) {
          const err = await res
            .json()
            .catch(() => ({ error: "Unknown error" }));
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              content: `error: ${err.error ?? "something went wrong"}`,
              role: "assistant",
            };
            return updated;
          });
          return;
        }

        const reader = res.body?.getReader();
        const decoder = new TextDecoder();
        if (!reader) return;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              content: updated[updated.length - 1].content + chunk,
              role: "assistant",
            };
            return updated;
          });
        }
      } catch {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            content: "error: could not reach the server",
            role: "assistant",
          };
          return updated;
        });
      } finally {
        setIsStreaming(false);
        inputRef.current?.focus();
      }
    },
    [messages, isStreaming]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage(input);
    }
  };

  return (
    <div
      className="w-full max-w-lg mx-auto mt-6 flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal window */}
      <div className="bg-bg-dim border border-border-strong rounded-lg overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border-strong">
          <span className="text-xs text-fg-dim select-none">
            ~/
          </span>
        </div>

        {/* Message history */}
        <div
          className="px-4 py-3 flex flex-col gap-2 overflow-y-auto"
          ref={scrollRef}
          style={{ maxHeight: "14rem", minHeight: "8rem" }}
        >
          {messages.length === 0 && (
            <div className="flex flex-col gap-3">
              <p className="text-xs text-fg-dim m-0 select-none">
                ask me anything about my background, experience, or skills.
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    className={cn(
                      "text-xs text-fg-dim border border-border-strong rounded px-2 py-1",
                      "hover:text-fg hover:border-fg-dim transition-colors duration-150 cursor-pointer bg-transparent"
                    )}
                    key={s}
                    onClick={(e) => {
                      e.stopPropagation();
                      sendMessage(s);
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div className="flex flex-col gap-0.5" key={i}>
              {msg.role === "user" ? (
                <div className="flex gap-2 text-sm">
                  <span className="text-green shrink-0 select-none">›</span>
                  <span className="text-fg">{msg.content}</span>
                </div>
              ) : (
                <div className="flex gap-2 text-sm">
                  <span className="text-fg-dim shrink-0 select-none pl-4" />
                  <span className="text-fg-muted whitespace-pre-wrap">
                    {msg.content}
                    {isStreaming && i === messages.length - 1 && (
                      <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-fg-muted align-middle animate-pulse" />
                    )}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input line */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-border-strong">
          <span className="text-green text-sm select-none shrink-0">›</span>
          {/* Wrapper positions the block caret relative to the input text */}
          <div className="relative flex-1 flex items-center">
            {/* Hidden span used to measure rendered text width */}
            <span
              aria-hidden
              className="absolute invisible whitespace-pre text-sm pointer-events-none"
              ref={measureRef}
            >
              {input}
            </span>
            <input
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className={cn(
                "w-full bg-transparent border-none outline-none text-sm text-fg",
                "placeholder:text-fg-dim caret-transparent",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              disabled={isStreaming}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onKeyDown={handleKeyDown}
              placeholder={isStreaming ? "" : "type your question..."}
              ref={inputRef}
              spellCheck={false}
              type="text"
              value={input}
            />
            {/* Block caret — only shown when focused and not streaming */}
            {isFocused && !isStreaming && (
              <span
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 w-[0.55em] h-[1.1em] bg-fg opacity-80 animate-pulse pointer-events-none"
                style={{ left: caretLeft }}
              />
            )}
          </div>
          {isStreaming && (
            <span className="text-xs text-fg-dim select-none animate-pulse">
              thinking...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
