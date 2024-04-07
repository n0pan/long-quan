import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "./Logo";

function ProfileHeader() {
  return (
    <Header>
      <ImageContainer>
        <StyledImage
          src={"/images/header_pictures/lq.jpg"}
          alt="portrait"
          width={200}
          height={200}
        />
      </ImageContainer>
      <Container>
        <Logo />
        <Subtitle>Web Developer ● Montreal</Subtitle>
      </Container>
    </Header>
  );
}

export default ProfileHeader;

const Header = styled.header`
  grid-area: header;
  padding: 15px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  text-align: left;
  display: grid;
  grid-template-areas: "photo name";
  gap: 48px;
  height: 280px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const ImageContainer = styled(Container)`
  align-items: end;
`;

const StyledImage = styled(Image)`
  border-radius: 100%;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  margin: 0;
`;
