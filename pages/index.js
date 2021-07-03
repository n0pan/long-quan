import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <p>Hi, I'm Long-Quan.</p>
      <p>
        Take a look at my resume in{" "}
        <a href="/cv/hoang-pham_long-quan_fr.pdf" target="blank">
          French
        </a>{" "}
        and{" "}
        <a href="/cv/hoang-pham_long-quan_en.pdf" target="blank">
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
