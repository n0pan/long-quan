import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-surface text-fg flex flex-col gap-0 rounded-none border border-border",
        className,
      )}
      data-slot="card"
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("ml-auto shrink-0", className)}
      data-slot="card-action"
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-6 pb-5", className)}
      data-slot="card-content"
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-fg-dim text-sm", className)}
      data-slot="card-description"
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 px-6 pb-5 pt-0",
        className,
      )}
      data-slot="card-footer"
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-1 px-6 pt-5 pb-4", className)}
      data-slot="card-header"
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("font-semibold leading-snug text-fg", className)}
      data-slot="card-title"
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
