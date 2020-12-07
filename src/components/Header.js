import React from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Content = styled.div`
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  display:flex;
  width: 50%;
`;

const SwitchContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  background-color: ${props => props.dark ? props.theme.darkTheme.header : props.theme.lightTheme.header};
  height: fit-content;
  width: fit-content;
  border-radius: 35%;
`;

const NavItems = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  color: #fff;
  font-size: 1.3rem;
  margin: 0px 5px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  cursor: pointer;

  display: inline-block;
  padding: 15px 20px;
  position: relative;

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
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

`;


const Header = ({theme, changeTheme, scroll}) => (
  <Container>
    <Content>
      <NavItems>
        <NavItem>
          Home
        </NavItem>
        <NavItem>
          Projects
        </NavItem>
        <NavItem>
          Skills
        </NavItem>
        <NavItem>
          Contact
        </NavItem>
      </NavItems>
      <SwitchContainer dark={theme === "dark"}>
        <DarkModeToggle
          onChange={() => {changeTheme()}}
          checked={theme === "dark"}
          size={60}
        />
      </SwitchContainer>
    </Content>
  </Container>
);

Header.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
  scroll: PropTypes.func
};

Header.defaultProps = {
  theme: "light",
  changeTheme: null,
  scroll: null
};

export default Header;
