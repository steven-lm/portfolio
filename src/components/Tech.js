import React from 'react';
import './Tech.css';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  background-color: ${props => props.theme.lightTheme.darkerBackground};

  ${props => props.dark && css`
  background-color: ${props => props.theme.darkTheme.background};
  color: white;
  `}
`;

const Tech = ({theme}) => (
  <Container dark={theme === "dark"}>
     Tech
  </Container>
);


export default Tech;
