# AGENTS.md

Guidelines for agentic coding agents working in this repository.

## Project Overview

A Next.js 15 (App Router) personal portfolio site with a terminal-style AI chat interface. Built with React 19, Tailwind CSS v4, shadcn/ui, and an OpenAI-compatible streaming API via OpenRouter. Uses Bun as the package manager and runtime.

## Build, Lint & Test Commands

```bash
# Install dependencies
bun install

# Development server (http://localhost:3000)
bun dev

# Production build
bun build

# Production server (after build)
bun start

# Lint and auto-fix entire project
bun lint

# Type-check without emitting (no tsc script exists; use bun exec)
bunx tsc --noEmit
```

**Tests:** No test framework is configured. There are no test files in this repository.

**Git hooks:** Lefthook runs lint-staged on pre-commit, which auto-formats and lints staged `.ts`/`.tsx` files via Prettier and ESLint. Do not skip hooks (`--no-verify`) unless instructed.

## Repository Structure

```
src/
├── app/
│   ├── (navigation)/resume/   # Resume route (layout + page)
│   ├── api/chat/route.ts      # POST /api/chat – OpenRouter streaming
│   ├── components/            # Route-scoped components (not globally shared)
│   ├── globals.css            # Tailwind v4 theme tokens (Kanagawa palette)
│   ├── layout.tsx             # Root layout (font, metadata)
│   └── page.tsx               # Home page
├── components/ui/             # shadcn/ui primitives (globally shared)
└── lib/utils.ts               # cn() helper (clsx + tailwind-merge)
```

## TypeScript

- **Strict mode is on** (`"strict": true` in tsconfig.json). All code must type-check cleanly.
- Path alias `@/` maps to `src/` — use it for all cross-directory imports.
- Prefer `interface` over `type` for object shapes.
- Use `import type` for type-only imports (e.g., `import type { Metadata } from "next"`).
- Use `React.ReactNode`, `React.KeyboardEvent<T>`, `React.ComponentProps<"div">` for React-specific types.
- Use CVA's `VariantProps<typeof variantFn>` to type component variant props.
- When catching errors where the value is needed, annotate as `catch (err: unknown)` and narrow manually. Use `catch { }` (no variable) when the error value is irrelevant.

## Imports

- **Absolute imports** (`@/...`) for anything across directories; **relative imports** (`./...`) only within the same directory.
- Imports are sorted in natural order enforced by `eslint-plugin-perfectionist` (`recommended-natural` preset). Do not manually reorder — ESLint will auto-fix on save/commit.
- Observed ordering convention (handled automatically by ESLint):
  1. External packages (`next/...`, `react`, third-party)
  2. Internal absolute (`@/lib/...`, `@/components/...`)
  3. Relative local (`./...`)
- Always explicitly import `React` even though the `react-jsx` transform doesn't require it — this is a consistent project convention.

## Components & File Conventions

- **File names:** kebab-case (`terminal-chat.tsx`, `profile-header.tsx`).
- **Component names:** PascalCase function declarations (`export default function ProfileHeader()`).
- Never use anonymous arrow functions as default exports.
- Destructure props directly in the function signature — never use a `props.` prefix.
- **Two-tier component hierarchy:**
  - `src/app/components/` — components scoped to a specific route or feature
  - `src/components/ui/` — globally reusable shadcn/ui primitives
- Sub-components used only within one file are defined in that file and left unexported (e.g., `PanelSection` inside `panel.tsx`).
- Use `"use client"` only when browser APIs or React hooks are required. Layouts and static pages are Server Components by default (no directive needed).

## Naming Conventions

| Entity                     | Convention                     | Example                    |
| -------------------------- | ------------------------------ | -------------------------- |
| Files                      | kebab-case                     | `main-layout.tsx`          |
| Components                 | PascalCase                     | `TerminalChat`             |
| Interfaces / Types         | PascalCase                     | `interface Message`        |
| Constants (true constants) | SCREAMING_SNAKE_CASE           | `SYSTEM_PROMPT`            |
| Variables / functions      | camelCase                      | `navLinks`, `handleSubmit` |
| CSS custom utilities       | kebab-case with feature prefix | `.term-section-label`      |

## Styling

- **Tailwind CSS v4** — all configuration lives in `src/app/globals.css` inside the `@theme {}` block. There is no `tailwind.config.js`.
- The design system uses the **Kanagawa color palette** defined as CSS custom properties (`--color-green`, `--color-pink`, `--color-bg-dim`, etc.). Reference them as Tailwind utilities: `text-green`, `bg-bg-dim`.
- All conditional className logic must use the `cn()` utility from `@/lib/utils` (clsx + tailwind-merge). Never concatenate class strings manually.
- Multi-line `cn(...)` calls should group related utilities for readability.
- shadcn/ui components use `data-slot="..."` attributes (v2 convention) for CSS targeting — preserve these on any modified components.

## Error Handling

- **API routes** (`src/app/api/`): use `try/catch` and return structured JSON errors:
  ```ts
  return NextResponse.json({ error: "Description" }, { status: 4xx | 5xx });
  ```
  Use semantically correct HTTP status codes (400 bad input, 429 rate limit, 500 config error, 502 upstream failure).
- Use optional chaining (`?.`) and nullish coalescing (`??`) defensively throughout.
- Streaming errors in the chat API are surfaced as `"error: ..."` strings appended inline to the message stream.

## API / Data Fetching

- The AI chat endpoint (`src/app/api/chat/route.ts`) uses the OpenAI SDK pointed at OpenRouter and streams raw text (not SSE/JSON) back to the client.
- The client (`terminal-chat.tsx`) reads the stream chunk-by-chunk with `reader.read()` and appends to the last message in state — follow this pattern for any new streaming consumers.
- Environment variable `OPENROUTER_API_KEY` is required at runtime; the route returns a 500 if it is absent.

## General Coding Practices

- Keep components small and focused. Extract into a sub-component (same file) when JSX grows unwieldy, but only export it if it is reused elsewhere.
- Avoid `any`. Use `unknown` and narrow with type guards.
- Do not introduce new dependencies without good reason. Prefer what is already installed.
- Do not add a `tailwind.config.js`; all Tailwind config belongs in `globals.css`.
- Do not add a test runner or test files unless explicitly asked.
- Run `bun lint` and `bunx tsc --noEmit` and ensure both pass before considering any task complete.
