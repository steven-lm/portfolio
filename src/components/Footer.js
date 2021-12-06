import React from 'react';
import styled, { css } from 'styled-components';
import Socials from '../components/Socials';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10%;
  align-items: center;
  font-size: 1.2rem;
  font-weight: normal;
  height: 100px;
  color: ${props => props.dark ? "#D3D3D3" : "black"};
  font-weight: 500;
  background-color: ${props => props.theme.lightTheme.footer};

  ${props => props.dark && css`
  background-color: ${props => props.theme.darkTheme.footer};
  `}

  @media (max-width: 550px) {

    justify-content: center;
    flex-direction: column-reverse;
    height: 200px;

  }
`;

const Footer = ({theme}) => {
  return(
  <Container dark={theme === "dark"}>
      Steven Lam | 2020 
     <div id = "footer-socials">
      <Socials theme={theme} size="medium"></Socials>
     </div>
  </Container>
  )
};


export default Footer;