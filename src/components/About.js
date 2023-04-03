import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Socials from "../components/Socials";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";
import ComputerIcon from "@material-ui/icons/Computer";
import ScrollAnimation from "react-animate-on-scroll";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import TimelineComponent from "./Timeline";
import CoderSvg from "../assets/Coder.svg"
import ParticlesBackground from './ParticlesBackground'
import Particles from 'react-particles-js';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    background: "white",
  },

  darkPaper: {
    padding: "6px 16px",
    background: "#1F1F1F",
    color: "#808080",
  },

  darkTypography: {
    color: "#808080",
  },

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const MOBILE_SIZE = "500";
const TABLET_SIZE = "1100";

const Container = styled.div`
  display: flex;
  padding: 5% 2%;
  align-items: center;
  height: fit-content;
  flex-direction: column;
  background-color: ${(props) => props.theme.lightTheme.background};

  ${(props) =>
    props.dark &&
    css`
      background-color: ${(props) => props.theme.darkTheme.darkerBackground};
      color: #d3d3d3;
    `}

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    height: fit-content;
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    height: fit-content;
  }
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

const AboutMain = styled.div`
  margin-top: 70px;
  width: 75%;
  height: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    height: 50%;
    flex-direction: column;
    align-items: center;
    width: 95%;
  }

`;

const Summary = styled.div`
  width: 47%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  .connect-text {
    margin-top: 30px;
  }

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    margin-bottom: 40px;
    width: 85%;
    text-align: left;
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    width: 85%;
  }

`;

const TimelineContainer = styled.div`
  text-align: center;
  width: 49%;
  margin-bottom: 50px;

  svg {
    color: grey;
  }

  .timeline-title {
    margin-bottom: 15px;
    font-size: 2rem;
    color: ${(props) => (props.dark ? "gray" : "#808080")};
  }

  h1 {
    color: ${(props) => (props.dark ? "#BEBEBE" : "black")};
  }

  .timeline-content {
    text-align: left;
    position: relative;
    right: 200px;
    width: 130%;
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    width: 100%;
    
  
    .timeline-content {
      position: relative;
      left: -60px;
      width: 400px;
    }
  }

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    width: 85%;
  }
`;

const About = ({ theme }) => {
  const classes = useStyles();

  return (
    <Container dark={theme === "dark"}>
      <Title>About</Title>
      <AboutMain dark={theme === "dark"}>
          <Summary>
          <ScrollAnimation
          className="project-anim"
          initiallyVisible={true}
          animateIn="fadeInLeft"
          animateOnce={true}
          duration={1}
        >
            <div>
              Hello! I'm a Software Engineer based in Sydney with experience across B2B and B2C tech companies. I'm currently interested in developing Web Applications and Cybersecurity but I'm always looking for new tech to work with :)
            </div>
            <div className="connect-text">Connect with me!</div>
            <Socials align="center" theme={theme}></Socials>
            </ScrollAnimation>
          </Summary>

          <img style={{maxWidth: '450px', width: '70vw'}} alt="me" src={CoderSvg}></img>
      </AboutMain>

      <TimelineComponent theme={theme}></TimelineComponent>
    </Container>
  );
};

export default About;
