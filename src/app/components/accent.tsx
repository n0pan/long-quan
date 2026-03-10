import React from "react";

/**
 * Accent — inline text highlight using Kanagawa golden yellow.
 * Used for company names, technology mentions, and key terms.
 */
function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-yellow font-medium">{children}</span>;
}

export default Accent;
