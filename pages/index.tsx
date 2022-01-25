import React from "react";
import styled from "styled-components";
import { Theme } from "../ui/theme";

interface IHomeProps {
  currentTheme: Theme
}

function Home({ currentTheme }: IHomeProps) {
  return (
    <Container>
      <p>Hi, I&apos;m Long-Quan.</p>
      <p>
        Take a look at my resume in{" "}
        <a href={`/cv/hoang-pham_long-quan_fr_${currentTheme}.pdf`} target="blank">
          French
        </a>{" "}
        and{" "}
        <a href={`/cv/hoang-pham_long-quan_en_${currentTheme}.pdf`} target="blank">
          English
        </a>
        .
      </p>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  text-align: center;
`;
