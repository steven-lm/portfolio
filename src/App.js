import React, { useEffect, useState } from "react";
import "./App.css";
import Day from "./Day";
import Night from "./Night";
import Button from '@material-ui/core/Button';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Tech from './components/Tech';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {

  var Scroll   = require('react-scroll');
  var scroller = Scroll.scroller;

  const [theme, setTheme] = useState("light");

  function changeTheme() {
    console.log("changing mode")
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  // Scroll to top of page on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, []);

  useEffect(() => {
    theme === "light" ? Day() : Night();
  }, [theme]);

  function handleScroll(name) {
    scroller.scrollTo(name, {
      duration: 1100,
      smooth: true,
      offset: 0, 
    })
  }

  return (
    <div className="App">

      <div id="background">
        <canvas id="bgCanvas"></canvas>
      </div>

      <Header 
        theme={theme}
        changeTheme={changeTheme}
      ></Header>

      <div className="info-container">
        <div className="info-name">Hello</div>

          <div className="expand-down" onClick={() => {handleScroll("Projects")}}>
            <ExpandMoreOutlinedIcon fontSize="large"></ExpandMoreOutlinedIcon>
          </div>
      </div>

      <Element name="About">
        <About theme={theme}></About>
      </Element>

      <Element name="Projects">
        <Projects theme={theme}></Projects>
      </Element>

      <Element name="Tech">
        <Tech theme={theme}></Tech>
      </Element>
    </div>
  );
}

export default App;
