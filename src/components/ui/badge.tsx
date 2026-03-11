import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-none border text-xs font-medium transition-colors duration-150",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        // Date — yellow, uppercase
        date: "border-transparent bg-transparent text-yellow-dim text-[0.7rem] font-normal tracking-wider uppercase px-0 py-0",
        // Default — pink brand
        default: "border-transparent bg-pink/15 text-pink",
        // Success / status
        success:
          "border-transparent bg-transparent text-green font-normal px-0 py-0",
        // Tech stack tag — subtle, muted
        tech: "border-border-strong/40 bg-transparent text-fg-muted px-1.5 py-0 hover:text-pink hover:border-pink/40 transition-colors duration-150",
      },
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
