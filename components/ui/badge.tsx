import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-champagne/40 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-champagne",
        className
      )}
      {...props}
    />
  );
}
