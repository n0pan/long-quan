import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <p>Hi, I&apos;m Long-Quan.</p>
      <p>
        Hake a look at my{" "}
        <a href="https://github.com/n0pan" target="blank">
          GitHub
        </a>{" "}
        and{" "}
        <a href="https://www.linkedin.com/in/longquanhp/" target="blank">
          LinkedIn
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
