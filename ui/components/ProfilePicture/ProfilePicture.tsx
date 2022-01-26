import * as React from "react";
import Image from "next/image";

import { getRandomInt } from "../../utils/";

function getProfilePicture() {
  return `/images/header_pictures/lq_${getRandomInt(1, 8)}.jpg`;
}

function ProfilePicture() {
  const [currentPicturePath, setCurrentPicturePath] = React.useState<string>(getProfilePicture());

  function randomizeProfilePicture() {
    setCurrentPicturePath(getProfilePicture());
  }

  return (
    <div style={{ padding: "0px 15px" }}>
      <div
        role="button"
        onClick={() => randomizeProfilePicture()}
        style={{
          textAlign: "center",
          height: 200,
          width: 200,
          position: "relative",
          margin: "0 auto",
          cursor: "pointer"
        }}>
        <Image
          className="rounded"
          src={currentPicturePath}
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
