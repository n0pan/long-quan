import React from "react";

import ProfileHeader from "./components/profile-header";
import TerminalChat from "./components/terminal-chat";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen flex flex-col justify-center px-6 py-10">
      <ProfileHeader />
      <TerminalChat />
    </main>
  );
}
