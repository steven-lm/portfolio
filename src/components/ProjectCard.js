import React, { useEffect, useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Socials from '../components/Socials';
import ScrollAnimation from 'react-animate-on-scroll';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 35px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.54);
  padding: 20px;
  font-size: 1.2rem;
  font-weight: normal;
  height: 300px;
  color: ${props => props.dark ? "#D3D3D3" : "black"};
  font-weight: 500;
  background-color: ${props => props.dark ? "black" : "white"};

  .project-heading {
    margin-top: 10px;
    display: flex;
    font-size: 1.3rem;
  }

  .project-title {
    margin-right: 10px;
  }

  .project-label {
    color: ${props => props.dark ? "#D3D3D3" : "#8B6E9D"};
  }

  .project-body {
    margin-top: 20px;

  }

  .project-description {
    font-weight: normal;
  }

  .project-stack {
    margin-top: 10px;
    font-weight: normal;
    color: ${props => props.dark ? "#D3D3D3" : "#8B6E9D"};
  }

  @media (max-width: 550px) {

    justify-content: center;

    #ProjectCard-socials {
      display: none;
    }
  }


`;

const ProjectCard = ({theme, name, label, description, stack, img}) => {

  return(
    <ScrollAnimation
		className="project-anim"
		initiallyVisible={true}
		animateIn="pulse"
		animateOnce={true}
		duration={.5}>
  <Container dark={theme === "dark"}>
    <div className="main">
    <div className="project-heading">
      <div className="project-title">
      {name}
      </div>
      <div className="project-label">
        {label}
      </div>
    </div>
    <div className="project-body">
      <div className="project-description">
        {description}
      </div>
      <div className="project-stack">

       {stack.map((tech, i) => `${tech} ${i < stack.length - 1 ? " - " : ""}`)}

      </div>
    </div>
    <div className="project-buttons">

    </div>
    </div>
    <div className="image">
      <img src={img} alt="project thumbnail"></img>
    </div>
  </Container>
  </ScrollAnimation>
  )
};


export default ProjectCard;