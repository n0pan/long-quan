import React, { ReactNode } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import Panel from "../../components/Panel";

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
