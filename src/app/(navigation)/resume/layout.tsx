import React, { ReactNode } from "react";
import ProfileHeader from "../../components/profile-header";
import Panel from "../../components/panel";

function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateAreas: `
          "header header header header"
          "panel main main main"
          "panel main main main"
          "panel main main main"
          "panel main main main"
          "panel main main main"
        `,
      }}
    >
      <ProfileHeader />
      <Panel />
      <main className="[grid-area:main]">{children}</main>
    </div>
  );
}

export default ResumeLayout;
