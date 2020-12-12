import React from 'react';
import styled, { css } from 'styled-components';


const MOBILE_SIZE = "500";
const TABLET_SIZE = "1100";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  padding-bottom: 150px;
  background-color: ${props => props.theme.lightTheme.background};

  ${props => props.dark && css`
  background-color: ${props => props.theme.darkTheme.darkerBackground};
  color: white;
  `}


`;

const Title = styled.div `
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

const SkillsMain = styled.div `
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Tech = styled.div `
  background: red;
  height: 500px;
  width: 30%;
  margin: 1.5% 1.5%;

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    margin: 3% 0%;
    width: 80%;
  }
`;

const Languages = styled.div `
  background: blue;
  height: 500px;
  width: 30%;
  margin: 1.5% 1.5%;

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    margin: 3% 0%;
    width: 80%;
  }

`;

const Skills = ({theme, isVisible}) => (
  <Container dark={theme === "dark"}>
     <Title className={isVisible ? 'slide-in' : null}>Skills</Title>
     <SkillsMain>
       <Tech>
          asf
       </Tech>
       <Languages>
          asf
       </Languages>
     </SkillsMain>
  </Container>
);


export default Skills;
