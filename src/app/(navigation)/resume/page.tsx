"use client";

import React from "react";
import styled from "styled-components";

export default function Page() {
  return (
    <>
      <Container>
        <h2>Experience</h2>
        <div>
          <h3>Front-end Developer @ Taiga Motors, Montreal</h3>
          <p>JANUARY 2022 - PRESENT</p>
          <ul>
            <li>
              Led the design and integration of the front-end architecture
              across various applications;
            </li>
            <li>Led the launch of the official Taiga mobile application;</li>
            <li>
              Integrated reactive and dynamic user interfaces using HTML, CSS,
              JavaScript, Svelte and Rollup aimed for an embedded system;
            </li>
            <li>
              Helped design, scope, develop and release a Mobile application
              using React Native;
            </li>
            <li>Created and maintained documentation;</li>
            <li>Assisted in defining priorities for various projects.</li>
          </ul>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 24px;
`;
