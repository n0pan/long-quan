import * as React from "react";

import Logo from "../Logo";
import ProfilePicture from "../ProfilePicture";

function ProfileHeader() {
  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
      <ProfilePicture />
      <Logo />
    </div>
  );
}

export default ProfileHeader;
