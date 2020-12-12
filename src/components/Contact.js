import React from 'react';
import styled, { css } from 'styled-components';
import poly from '../assets/images/poly1.svg';

const Outer = styled.div `
  width: 100%;
  height: 650px;
  position: relative;
  background-color: transparent;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: ${props => props.theme.lightTheme.main};

  ${props => props.dark && css`
  background-color: ${props => props.theme.darkTheme.main};
  color: white;
  `}
`;

const Title = styled.div`
  margin-top: 35px;
  font-weight: 500;
  font-size: 2.2rem;
  color: ${props => props.dark ? "#D3D3D3" : "black"};

  :after {
    bottom: -8px;
    content: "";
    display: block;
    height: 4px;
    position: relative;
    width: 60%;
    left: calc(50% - 30%);
    background: ${props => props.dark ? "#D3D3D3" : "black"};
 }

}
`;

const Polygon = styled.div `
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${props => props.theme.lightTheme.background};

  ${props => props.dark && css`
  background-color: ${props => props.theme.darkTheme.darkerBackground};
  color: white;
  `}

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    fill: ${props => props.theme.lightTheme.main};

    ${props => props.dark && css`
    fill: ${props => props.theme.darkTheme.main};
    `}
  }
  
  @media (max-width: 699px) {
    .svg--lg {
      display: none;
    }
  }
  
  @media (min-width: 700px) {
    .svg--sm {
      display: none;
    }
  }
`;

const Contact = ({theme}) => (

  <Outer>
    <Polygon dark={theme === "dark"}>
      <svg height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon class="svg--sm" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
      <polygon class="svg--lg" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
    </svg>
    </Polygon>
    <Container dark={theme === "dark"}>
      <Title dark={theme === "dark"}>Contact</Title>
    </Container>
  </Outer>
);


export default Contact;
