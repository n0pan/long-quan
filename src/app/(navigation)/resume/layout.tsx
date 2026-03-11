import React, { ReactNode } from "react";

import Panel from "../../components/panel";
import ProfileHeader from "../../components/profile-header";

function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <ProfileHeader />
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Sidebar — full width on mobile, fixed 280px on desktop */}
        <div className="w-full lg:w-72 xl:w-80 shrink-0 border-b lg:border-b-0 border-border">
          <Panel />
        </div>
        {/* Main content */}
        <main className="flex-1 min-w-0 bg-bg">{children}</main>
      </div>
    </div>
  );
}

export default ResumeLayout;
