"use client";

import React from "react";
import styled from "styled-components";

export default function Page() {
  return (
    <>
      <Container>
        <h2>Experience</h2>
        <ExperienceContainer>
          <ExperienceTitle>
            Front-end Developer @ <Accent>Taiga Motors, Montréal</Accent>
          </ExperienceTitle>
          <ExperienceYear>JANUARY 2022 - PRESENT</ExperienceYear>
          <ul>
            <li>
              Led the design and integration of the front-end architecture
              across various applications;
            </li>
            <li>Led the launch of the official Taiga mobile application;</li>
            <li>
              Integrated reactive and dynamic user interfaces using{" "}
              <Accent>HTML</Accent>, <Accent>CSS</Accent>,{" "}
              <Accent>JavaScript</Accent>, <Accent>Svelte</Accent> and{" "}
              <Accent>Rollup</Accent> aimed for an embedded system;
            </li>
            <li>
              Led the design and integration for a modern web app using{" "}
              <Accent>React</Accent>, <Accent>NextJS</Accent> and{" "}
              <Accent>Docker</Accent>;
            </li>
            <li>
              Helped design, scope, develop and release 2{" "}
              <Accent>Mobile apps</Accent> using <Accent>React Native</Accent>;
            </li>
            <li>Created and maintained documentation;</li>
            <li>Assisted in defining priorities for various projects.</li>
          </ul>
          <p>
            <b>Stack used:</b> React Native, JavaScript, TypeScript, Svelte,
            Rollup, Git, NextJS, Docker, AWS.
          </p>
        </ExperienceContainer>
        <ExperienceContainer>
          <ExperienceTitle>
            Tech Lead - Customer Experience @ <Accent>Cook it, Montréal</Accent>
          </ExperienceTitle>
          <ExperienceYear>FEBRUARY 2021 - JANUARY 2022</ExperienceYear>
          <ul>
            <li>
              Acted as interim <Accent>Scrum Master</Accent> and interim{" "}
              <Accent>Product Owner</Accent>;
            </li>
            <li>Held interviews, hired and trained new employees;</li>
            <li>Improved hiring process and onboarding process;</li>
            <li>
              Created various internal tools and automated various processes to
              improve the <Accent>deployment pipeline</Accent>
            </li>
            <li>
              Contributed in the migration of our front-end legacy towards a new
              architecture in <Accent>React</Accent>,{" "}
              <Accent>TypeScript</Accent> and <Accent>Material UI</Accent>;
            </li>
            <li>
              Contributed in the migration of our back-end legacy towards a new
              architecture in <Accent>TypeScript</Accent> and{" "}
              <Accent>Node</Accent>
            </li>
            <li>
              Implemented a Learning Day during our sprints to boost team morale
              and motivation.
            </li>
          </ul>
        </ExperienceContainer>
        <ExperienceContainer>
          <ExperienceTitle>
            Front-end Developer @ <Accent>Cook it, Montréal</Accent>
          </ExperienceTitle>
          <ExperienceYear>DECEMBER 2017 - FEBRUARY 2021</ExperienceYear>
          <ul>
            <li>
              Joined the team when the tech department consisted of just the CTO
              and assisted him in building the platform from scratch;
            </li>
            <li>
              Designed and integrated new tools depending on internal and
              external needs;
            </li>
            <li>
              Created reusable <Accent>React</Accent> components that are widely
              used throughout the platform;
            </li>
            <li>Helped design various components the Product Designer;</li>
            <li>
              Assisted with the implementation <Accent>GraphQL</Accent> and{" "}
              <Accent>REST API</Accent> using Node;
            </li>
            <li>
              Assisted with the maintenance of a <Accent>Mongo</Accent>{" "}
              database;
            </li>
            <li>
              Helped plan the migration of our legacy code towards an{" "}
              <Accent>Onion Architecture</Accent> API in <Accent>Node</Accent>
            </li>
          </ul>
          <p>
            <b>
              Stack used: React, Meteor, Node, TypeScript, GraphQL, Git, Docker.
            </b>
          </p>
        </ExperienceContainer>
        <ExperienceContainer>
          <ExperienceTitle>
            Freelance Web Developer @ <Accent>Spotlyne, Montréal</Accent>
          </ExperienceTitle>
          <ExperienceYear>JANUARY 2019 - SEPTEMBER 2020</ExperienceYear>
          <ul>
            <li>
              Designed and integrated new pages depending on client needs;
            </li>
            <li>
              Created reusable <Accent>React</Accent> components that are widely
              used throughout the platform;
            </li>
            <li>
              Integrated web pages and components based on mockups provided by
              an external Web Designer;
            </li>
            <li>
              Assisted with the maintenance of a <Accent>Mongo</Accent>{" "}
              database;
            </li>
            <li>
              Spearheaded the project of migrating the application’s design
              system to Ant Design.
            </li>
          </ul>
          <p>
            <b>Stack used:</b> React, Meteor, Node, GraphQL, Git.
          </p>
        </ExperienceContainer>
        <ExperienceContainer>
          <ExperienceTitle>
            Front-end Developer Intern @ <Accent>DFuse, Montréal</Accent>
          </ExperienceTitle>
          <ExperienceYear>MAY 2017 - AUGUST 2017</ExperienceYear>
          <ul>
            <li>
              Design and built user interfaces that communicated to the database
              using <Accent>Meteor DDP</Accent> and <Accent>Web Sockets</Accent>
              ;
            </li>
            <li>Helped design and had creative input on mockups;</li>
            <li>
              Added, modified and maintained functionality on the main platform.
            </li>
          </ul>
          <p>
            <b>Stack used:</b> Meteor, HTML, SASS, Handlebars, Git.
          </p>
        </ExperienceContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 24px 48px;
`;

const ExperienceContainer = styled.div`
  margin-bottom: 45px;
`;

const ExperienceTitle = styled.h3`
  margin-bottom: 0px;
`;

const Accent = styled.span`
  color: ${(props) => props.theme.pink};
`;

const ExperienceYear = styled.p`
  margin-top: 4px;
`;
