import React from "react";

import Image from "next/image";

import { PictureContainer } from "./styles";

function ProfilePicture() {
  return (
    <PictureContainer>
      <div>
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
    </PictureContainer>
  );
}

export default ProfilePicture;
