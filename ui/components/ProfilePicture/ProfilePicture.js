import React, { useState } from "react";

import Image from "next/image";
import { getRandomInt } from "../../utils/profilePictures";

function getProfilePicture() {
  return `/images/header_pictures/lq_${getRandomInt(1, 8)}.jpg`;
}

function ProfilePicture() {
  const [currentPicturePath, setCurrentPicturePath] = useState(
    getProfilePicture()
  );

  function randomizeProfilePicture() {
    setCurrentPicturePath(getProfilePicture());
  }

  return (
    <div
      role="button"
      onClick={() => randomizeProfilePicture()}
      style={{ padding: "0px 15px", cursor: "pointer" }}
    >
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
          src={getProfilePicture()}
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
