import React from "react";
import styled, { css } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const MOBILE_SIZE = "500";
const TABLET_SIZE = "1100";

const Container = styled.div`
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.54);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 13px;
  height: 110px;
  width: 110px;
  margin: 15px;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.fontColor};
  background-color: ${props => props.dark ? "#1F1F1F" : "white"};

  .icon {
    svg {
      height: 35px;
      width: 35px;
    }
  }

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    padding: 13px;
    height: 80px;
    width: 80px;

    svg {
      height: 28px;
      width: 28px;
    }
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    margin: 7px 4px;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;

    @media (max-width: ${TABLET_SIZE}${"px"}) {
      font-size: 0.9rem;
    }
  }
`;

const SkillCard = ({ children, theme, name, color }) => {
  return(
    <ScrollAnimation
    className="project-anim"
    initiallyVisible={true}
    animateIn="tada"
    animateOnce={true}
    duration={1}
  >
  <Container fontColor={color} dark={theme === "dark"}>
    <div className="icon">
      {children}
    </div>
    <div className="name">
      {name}
    </div>
  </Container>
  </ScrollAnimation>
  )
};

export default SkillCard;
