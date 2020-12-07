import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: ${props => props.theme.lightTheme.darkerBackground};

  ${props => props.dark && css`
  background-color: ${props => props.theme.darkTheme.background};
  color: white;
  `}
`;

const About = ({theme}) => {
  console.log(theme)
  return (
    <Container dark={theme === "dark"}>
      About
    </Container>
  )
};


export default About;
