import React from "react";
import styled, { css } from "styled-components";
import SkillCard from "../components/SkillCard";
import { FaReact, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {DiPhotoshop, DiPostgresql, DiNodejs, DiProlog} from "react-icons/di";
import {SiKeras, SiFlask, SiMicrosoftsqlserver,SiJavascript, SiC, SiPerl, SiTypescript, SiNextDotJs, SiGraphql, SiRuby, SiRails, SiRedux} from "react-icons/si"

const MOBILE_SIZE = "410";
const TABLET_SIZE = "1100";
const LARGE_TABLET_SIZE = "1600";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  padding-bottom: 150px;
  background-color: ${(props) => props.theme.lightTheme.background};

  ${(props) =>
    props.dark &&
    css`
      background-color: ${(props) => props.theme.darkTheme.darkerBackground};
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

const SkillsMain = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    flex-direction: column;
    align-items: center;
  }

  .tech-container {
    height: 500px;
    width: 35%;
    margin: 1.5% 1.5%;

    @media (max-width: ${TABLET_SIZE}${"px"}) {
      margin: 3% 0%;
      width: 80%;
    }

  }

  .language-container {
    height: 500px;
    width: 35%;
    margin: 1.5% 1.5%;
    

    @media (max-width: ${TABLET_SIZE}${"px"}) {
      margin: 3% 0%;
      width: 80%;
    }

  }

  .main-title {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 35px;
    width: 100%;
    color: ${(props) => (props.dark ? "#d3d3d3" : "black")};
  }

  .tech {
    display: flex;
    flex-direction: column;
  }


  .languages {
    display: flex;
    flex-direction: column;
  }

  .row1 {
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${LARGE_TABLET_SIZE}${"px"}) {
    .tech-container {
      width: 45%;
    }
  
    .language-container {
      width: 45%;
    }
  }

  @media (max-width: ${TABLET_SIZE}${"px"}) {

    .tech-container {
      height: 390px;
    }

    .language-container {
      height: 390px;
    }
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {

    .tech-container {
      height: 400px;
      width: 100%;
    }

    .language-container {
      height: 400px;
      width: 100%;
    }
  }


`;

const Skills = ({ theme, isVisible }) => {
  return (
    <Container dark={theme === "dark"}>
      <Title className={isVisible ? "slide-in" : null}>Skills</Title>
      <SkillsMain dark={theme === "dark"}>
        <div className="tech-container">
          <div className="main-title">Technologies I use</div>
          <div className="tech">
            <div className="row1">
              <SkillCard theme={theme} name="React" color="#61DBFB">
                <FaReact></FaReact>
              </SkillCard>
              <SkillCard theme={theme} name="HTML" color="#F06529">
                <AiFillHtml5></AiFillHtml5>
              </SkillCard>
              <SkillCard theme={theme} name="CSS" color="#1572B7">
                <FaCss3Alt></FaCss3Alt>
              </SkillCard>
              <SkillCard theme={theme} name="Nodejs" color="#3C873A">
                <DiNodejs></DiNodejs>
              </SkillCard>
            </div>
            <div className="row1">
            <SkillCard theme={theme} name="PSQL" color="#336791" >
                <DiPostgresql></DiPostgresql>
              </SkillCard>
              <SkillCard theme={theme} name="NextJS" color="black">
                <SiNextDotJs></SiNextDotJs>
              </SkillCard>
              <SkillCard theme={theme} name="GraphQL" color="#DE33A6">
                <SiGraphql></SiGraphql>
              </SkillCard>
              <SkillCard theme={theme} name="Rails" color="#AF1401">
                <SiRails />
              </SkillCard>
            </div>
            <div className="row1">
            <SkillCard theme={theme} name="Redux" color="#7248B6">
                <SiRedux />
              </SkillCard>
            </div>
          </div>
        </div>
        <div className="language-container">
          <div className="main-title"> Languages I work with</div>
          <div className="languages">
          <div className="row1">
              <SkillCard theme={theme} name="Javascript" color="#FFC732">
                <SiJavascript></SiJavascript>
              </SkillCard>
              <SkillCard theme={theme} name="Typescript" color="#2F74C0">
                <SiTypescript />
              </SkillCard>
              <SkillCard theme={theme} name="Python" color="#3470A2">
                <FaPython></FaPython>
              </SkillCard>
              <SkillCard theme={theme} name="Java" color="#E51F24" >
                <FaJava></FaJava>
              </SkillCard>
            </div>
            <div className="row1">
            <SkillCard theme={theme} name="Ruby" color="#AF1401">
                <SiRuby />
              </SkillCard>
            </div>
          </div>
          
        </div>
      </SkillsMain>
    </Container>
  );
};

export default Skills;
