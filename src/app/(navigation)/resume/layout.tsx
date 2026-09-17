import type { Metadata } from "next";

import React, { ReactNode } from "react";

import Panel, { ContactLinks } from "../../components/panel";
import ProfileHeader from "../../components/profile-header";

// Also the default filename when saving the printed PDF
export const metadata: Metadata = {
  title: "Long-Quan Hoang-Pham - Resume",
};

function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen print:min-h-0 flex flex-col bg-bg">
      <ProfileHeader />
      {/* Print-only contact line; single column puts the sidebar last */}
      <div className="hidden print:block pb-2 border-b border-border">
        <ContactLinks />
      </div>
      <div className="flex flex-col lg:flex-row print:flex-col flex-1">
        {/* Sidebar — full width on mobile, fixed 280px on desktop */}
        <div className="w-full lg:w-72 xl:w-80 print:w-full print:order-last shrink-0 border-b lg:border-b-0 print:border-b-0 print:border-t border-border">
          <Panel />
        </div>
        {/* Main content */}
        <main className="flex-1 min-w-0 bg-bg">{children}</main>
      </div>
    </div>
  );
}

export default ResumeLayout;
