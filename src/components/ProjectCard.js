import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Socials from "../components/Socials";
import ScrollAnimation from "react-animate-on-scroll";
import test from "../components/data/images/personal.JPG";
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 35px;
  border-radius: 10px;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: normal;
  color: ${(props) => (props.dark ? "#808080" : "black")};
  font-weight: 500;

  a {
    color: ${(props) => (props.dark ? "black" : "black")};
    text-decoration: none; /* no underline */
  }

  a: hover {
    color: ${props => props.dark ? "#808080" : "#8B6E9D"}
  }

  .image {
    position: relative;
    z-index: 1;

    img {
      height: 200px;
      width: 400px;
      border-radius: 5px;
    }

  }

  .project-heading {
    margin-top: 10px;
    display: flex;
    font-size: 1.3rem;
  }

  .project-title {
    margin-right: 15px;
  }

  .project-label {
    color: ${(props) => (props.dark ? "#D3D3D3" : "#8B6E9D")};
  }

  .project-description {
    text-align: left;
    padding: 15px;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 2;
    box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.54);
    background-color: ${(props) => (props.dark ? "#050505" : "white")};
    color: ${(props) => (props.dark ? "#808080" : "black")};
    height: 80px;
    margin: 20px 0px;;
    width: 115%;
    font-weight: normal;
    border-radius: 8px;
  }

  .project-stack {
    text-align: left;
    margin-top: 10px;
    font-weight: bold;
    color: ${(props) => (props.dark ? "#808080" : "black")};
  }

  .main {
    width: 100%;
    position: relative:
    z-index: 2;
  }

  .project-buttons {
    padding: 15px 0px;
    align-items: center;
    display: flex;
  }

  .github-button {
    cursor: pointer;
    margin-right: 15px;
  }

  .open-button {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    .project-description {
      height: 120px;
    }

    justify-content: center;

    #ProjectCard-socials {
      display: none;
    }
  }

  @media (max-width: 490px) {
    font-size: 0.9rem;
    margin-bottom: 70px;
    margin: 35px 15px;

    .project-description {
      height: 100px;
    }

    .project-heading {
      margin-top: 10px;
      display: flex;
      font-size: 1rem;
    }

    justify-content: center;

    #ProjectCard-socials {
      display: none;
    }
  }



  @media (max-width: 933px) {
    height: 240px;

    .project-title {
      font-size: 1.1rem;
    }

    .project-stack {
      font-size: 1.1rem;
    }

    .project-label {
      font-size: 1.1rem;
    }

    .image {
      display: none;
    }

    .project-description {
      width: 100%;
    }
    
  }

  :hover {
    .project-description {
      -webkit-transition-duration: 300ms;
      -webkit-transform: translateX(15px);
    }
  }


`;

const ProjectCard = ({ theme, name, label, description, stack, img, github, link}) => {
  return (
    <ScrollAnimation
      className="project-anim"
      initiallyVisible={true}
      animateIn="pulse"
      animateOnce={true}
      duration={0.5}
    >
      <Container dark={theme === "dark"}>
        <div className="main">
          <div className="project-heading">
            <div className="project-title">{name}</div>
            <div className="project-label">{label}</div>
          </div>
            <div className="project-description">{description}</div>
            <div className="project-stack">
              {stack.map(
                (tech, i) => `${tech} ${i < stack.length - 1 ? " - " : ""}`
              )}
          </div>
          <div className="project-buttons">
            {github &&
              <a href={github} className="github-button" rel="noreferrer" target="_blank">
              <GitHubIcon fontSize="medium"></GitHubIcon>
              </a>
            }
            {
              link &&
              <a href={github} className="open-button" rel="noreferrer" target="_blank">
                <LaunchIcon fontSize="medium"></LaunchIcon>
              </a>
            }
          </div>
        </div>

        <div className="image">
          <img
            src={require(`../components/data/images/${img}`).default}
            alt="project thumbnail"
          ></img>
        </div>
      </Container>
    </ScrollAnimation>
  );
};

export default ProjectCard;
