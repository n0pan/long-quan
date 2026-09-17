"use client";

import React from "react";

export default function PrintButton() {
  return (
    <button
      className="print:hidden text-xs text-fg-dim hover:text-fg border border-border-strong/40 hover:border-border-strong px-3 py-1.5 transition-colors cursor-pointer"
      onClick={() => window.print()}
    >
      Download PDF
    </button>
  );
}
