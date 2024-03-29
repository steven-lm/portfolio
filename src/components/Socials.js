import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/MailOutline';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.align ? props.align : ""};
  height: 100px;
  color: ${props => props.dark ? "#D3D3D3" : "black"};
  font-weight: 500;
  background-color: ${props => props.theme.lightTheme.Socials};

  a {
    color: inherit;
  }

  svg {
    cursor: pointer;
    margin: 12px;
    transform: scale(1.2);
  }

  svg:hover {
    color: ${props => props.dark ? "white" : "#8B6E9D"}
  }
`;

const Socials = ({theme, size, align}) => {
  return(
  <Container align={align} dark={theme === "dark"}>
    <a rel="noreferrer" target="_blank" href="https://github.com/steven-lm">
     <GitHubIcon fontSize={size}></GitHubIcon>
     </a>
     <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/stevenlam1/">
      <LinkedInIcon fontSize={size} ></LinkedInIcon>
     </a>
     <a rel="noreferrer"target="_blank" href="mailto:stevenlamfn@gmail.com">
      <MailIcon fontSize={size}></MailIcon>
     </a>
  </Container>
  )
};


Socials.defaultProps = {
  size: "large",
};

export default Socials;