import React from 'react';
import './Projects.css';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: ${props => props.theme.lightTheme.background};

  ${props => props.dark && css`
  background-color: ${props => props.theme.darkTheme.darkerBackground};
  color: white;
  `}
`;

const Projects = ({theme}) => (
  <Container dark={theme === "dark"}>
     Projects
  </Container>
);


export default Projects;
