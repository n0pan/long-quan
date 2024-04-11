import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import Logo from "./Logo";

function ProfileHeader() {
  const pathname = usePathname();
  return (
    <Header>
      <LogoContainer>
        <ImageContainer>
          <StyledImage
            src={"/images/header_pictures/lq.jpg"}
            alt="portrait"
            width={200}
            height={200}
            quality={80}
            priority={true}
          />
        </ImageContainer>
        <Container>
          <Logo />
          <Subtitle>Web Developer ● Montreal</Subtitle>
        </Container>
      </LogoContainer>
      <Navigation>
        <ul>
          <li>
            <StyledLink href="/" $active={pathname === "/"}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/resume" $active={pathname === "/resume"}>
              Resume
            </StyledLink>
          </li>
        </ul>
      </Navigation>
    </Header>
  );
}

export default ProfileHeader;

const Header = styled.header`
  grid-area: header;
  background-color: ${(props) => props.theme.primary};
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoContainer = styled.div`
  color: ${(props) => props.theme.white};
  text-align: left;
  display: grid;
  grid-template-areas: "photo name";
  gap: 48px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ul {
    list-style-type: none;
    color: ${(props) => props.theme.white};
    margin: 0;
    li {
      display: inline;
      margin-right: 50px;
    }
  }
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

const StyledLink = styled(Link)<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? props.theme.pink : props.theme.white)};
  &:hover {
    color: ${(props) => props.theme.pink};
  }
`;
