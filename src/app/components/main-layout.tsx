import React, { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 print:px-0">{children}</div>
  );
}

export default MainLayout;
