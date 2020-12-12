import React, { useState } from "react";
import styled, { css } from "styled-components";
import ProjectCard from "./ProjectCard";

const MOBILE_SIZE = "500";
const TABLET_SIZE = "1100";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  background-color: ${(props) => props.theme.lightTheme.darkerBackground};

  ${(props) =>
    props.dark &&
    css`
      background-color: ${(props) => props.theme.darkTheme.background};
      color: white;
    `}
`;

const Title = styled.div`
  margin-top: 35px;
  font-weight: 500;
  font-size: 2.2rem;
  color: gray;

  :after {
    bottom: -8px;
    content: "";
    display: block;
    height: 4px;
    position: relative;
    width: 60%;
    left: calc(50% - 30%);
    background: gray;
 }

}
`;

const ProjectsMain = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsDisplay = styled.div`
  width: 30%;
  margin: 1.5% 1.5%;
  
  @media (max-width: ${TABLET_SIZE}${"px"}) {
    width: 80%;
  }

`;

const SwitchContainer = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 40px;
  color: ${(props) => (props.dark ? "gray" : "black")};

  .my-projects {
    width: 150px;
    background: transparent;
    padding: 20px 40px;
    cursor: pointer;
    border-bottom: 1px solid ${(props) => (props.dark ? "#111111" : "black")};
  }

  .uni-projects {
    width: 150px;
    background: transparent;
    padding: 20px 40px;
    cursor: pointer;
    border-bottom: 1px solid ${(props) => (props.dark ? "#111111" : "black")};
  }

  .active {
    background: ${(props) =>
      props.dark ? "rgb(17,17,17)" : "rgb(211, 211, 211)"};
    border-bottom: 1px solid
      ${(props) => (props.dark ? "rgb(17,17,17)" : "gray")};
  }
`;

const Projects = ({ theme, projects }) => {
  const [myProjects, setMyProjects] = useState(true);
  const [uniProjects, setUniProjects] = useState(false);

  let my_projects = projects.myProjects;
  let uni_projects = projects.uniProjects;

  function setPersonal() {
    setMyProjects(true);
    setUniProjects(false);
  }

  function setUni() {
    setUniProjects(true);
    setMyProjects(false);
  }

  return (
    <Container dark={theme === "dark"}>
      <Title>Projects</Title>
      <ProjectsMain>
        <SwitchContainer dark={theme === "dark"}>
          <div
            className={myProjects ? "my-projects active" : "my-projects"}
            onClick={() => {
              setPersonal();
            }}
          >
            Personal
          </div>
          <div
            className={uniProjects ? "uni-projects active" : "uni-projects"}
            onClick={() => {
              setUni();
            }}
          >
            Uni
          </div>
        </SwitchContainer>
        <ProjectsDisplay dark={theme === "dark"}>
          {myProjects &&
            my_projects.map((project) => (
              <ProjectCard
                theme={theme}
                name={project.name}
                label={project.label}
                description={project.description}
                stack={project.stack}
                img={project.img}
              ></ProjectCard>
            ))}
          {uniProjects &&
            uni_projects.map((project) => (
              <ProjectCard
                theme={theme}
                name={project.name}
                label={project.label}
                description={project.description}
                stack={project.stack}
                img={project.img}
              ></ProjectCard>
            ))}
        </ProjectsDisplay>
      </ProjectsMain>
    </Container>
  );
};

export default Projects;
