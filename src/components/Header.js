import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import "../menu.css";
const MOBILE_SIZE = "950";

const MainContainer = styled.header`
  height: fit-content;
  width: fit-content;

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    color: ${(props) => (props.dark ? "white" : "black")};
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    display: none;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: ${(props) =>
      props.dark
        ? props.theme.darkTheme.header
        : props.theme.lightTheme.header};
  }
`;

const MenuContainer = styled.div`
  margin-top: 40px;
  padding: 30px;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  button {
    border: none;
    background-color: transparent;
  }

  .hamburger--squeeze {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-text {
    margin-left: 12px;
    font-weight: 700;
    font-size: 1.4rem;
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    button {
      border: none;
      color: ${(props) => (props.dark ? "white" : "gray")};
      background-color: transparent;
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background: ${(props) => (props.dark ? "white" : "gray")};
    }
  }
`;

const Content = styled.div`
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 50%;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    flex-direction: column;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 5px;
  background-color: ${(props) =>
    props.dark ? props.theme.darkTheme.header : props.theme.lightTheme.header};
  height: fit-content;
  width: fit-content;
  border-radius: 33%;
`;

const NavItems = styled.nav`
  display: flex;
  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    flex-direction: column;
    margin-bottom: 30px;
  }

  .nav-item {
    font-size: 1.2rem;
    margin: 0px 5px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    cursor: pointer;
    font-weight: 500;
  
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    color: ${(props) => (props.dark ? "white" : "gray")};
  
    &:hover {
      border-bottom
    }
  
    &:hover:after { 
      width: 100%; 
      left: 0; 
    }
  
    &:after {    
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: ${(props) => (props.dark ? "white" : "gray")};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
  
    }
  }
`;

const NavItem = styled.div``;

const SwitchText = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => (props.dark ? "lightgrey" : "#61B8EE")};
  margin: 0px 8px;
`;

const Header = ({ theme, changeTheme }) => {
  const [mobile, setMobile] = useState(false);

  var Scroll = require("react-scroll");
  var scroller = Scroll.scroller;

  function handleScroll(name) {
    console.log(`scrolling to ${name}`);
    scroller.scrollTo(name, {
      duration: 1100,
      smooth: true,
      offset: 0,
    });
  }

  function toggleMenu() {
    let menu = document.getElementsByClassName("hamburger--squeeze")[0];
    let menuItems = document.getElementById("menu-items");

    if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
      menuItems.style.display = "none";
    } else {
      menu.classList.add("is-active");
      menuItems.style.display = "flex";
    }
  }

  useEffect(() => {
    console.log("loading header");
    let width = window.screen.width;
    if (width < MOBILE_SIZE) {
      setMobile(true);
    }
  }, []);
  return (
    <MainContainer dark={theme === "dark"}>
      {mobile && (
        <MenuContainer dark={theme === "dark"}>
          <button class="hamburger--squeeze" type="button" onClick={toggleMenu}>
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
            <span class="menu-text">MENU</span>
          </button>
        </MenuContainer>
      )}

      <Container id="menu-items" dark={theme === "dark"}>
        <Content>
            <NavItems dark={theme === "dark"}>
              <NavItem
                className="nav-item"
                onClick={() => {
                  handleScroll("About");
                }}
              >
                About
              </NavItem>
              <NavItem
                className="nav-item"
                onClick={() => {
                  handleScroll("Projects");
                }}
              >
                Projects
              </NavItem>
              <NavItem
                className="nav-item"
                onClick={() => {
                  handleScroll("Skills");
                }}
              >
                Skills
              </NavItem>
              <NavItem
                className="nav-item"
                onClick={() => {
                  handleScroll("Contact");
                }}
              >
                Contact
              </NavItem>
            </NavItems>
            <SwitchContainer dark={theme === "dark"}>
              <DarkModeToggle
                onChange={() => {
                  changeTheme();
                }}
                checked={theme === "dark"}
                size={60}
              />
              <SwitchText dark={theme === "dark"}>{theme}</SwitchText>
            </SwitchContainer>
        </Content>
      </Container>
    </MainContainer>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};

Header.defaultProps = {
  theme: "light",
  changeTheme: null,
};

export default Header;
