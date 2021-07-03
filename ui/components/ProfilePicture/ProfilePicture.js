import React from "react";

import Image from "next/image";

function ProfilePicture() {
  return (
    <div style={{ padding: "0px 15px" }}>
      <div
        style={{
          textAlign: "center",
          height: 200,
          width: 200,
          position: "relative",
          margin: "0 auto"
        }}
      >
        <Image
          className="rounded"
          src="/images/rounded-pro-pic.png"
          alt="Long-Quan"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75}
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
