import React, { useEffect, useState } from "react";
import "./App.css";
import Day from "./Day";
import Night from "./Night";
import Button from "@material-ui/core/Button";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Fade from "react-reveal/Fade";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function App() {
  let data = require("./components/data/projects.json");

  var Scroll = require("react-scroll");
  var scroller = Scroll.scroller;

  const [theme, setTheme] = useState("light");
  const [showBack, setShowBack] = useState(false);

  function changeTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("stevensprofile", newTheme);
  }

  const checkScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      let back = document.getElementsByClassName("showBack")[0];
      back.style.display = "flex";
    } else {
      let back = document.getElementsByClassName("showBack")[0];

      if (back) {
        back.style.display = "none";
      }
    }
  };

  useEffect(() => {
    const userPref = localStorage.getItem("stevensprofile");

    console.log("cherry is cute :)")
    if (userPref) {
      setTheme(userPref);
    }

    window.addEventListener("resize", () => {
      window.location.reload();
    });

    window.addEventListener("scroll", checkScroll, { passive: true });
  }, []);

  useEffect(() => {
    theme === "light" ? Day() : Night();
  }, [theme]);

  function handleScroll(name) {
    scroller.scrollTo(name, {
      duration: 900,
      smooth: "easeOutQuad",
      offset: 0,
    });
  }

  return (
    <div className="App">
      <div className="showBack">
        <div
          className={theme === "dark" ? "back-up-dark" : "back-up"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <ExpandLessIcon fontSize="large"></ExpandLessIcon>
        </div>
      </div>
      <div id="background">
        <canvas id="bgCanvas"></canvas>
      </div>

      <Header theme={theme} changeTheme={changeTheme}></Header>

      <div className="info-container">
          <div className="info-name">Steven Lam</div>

          <div
            className="expand-down"
            onClick={() => {
              handleScroll("About");
            }}
          >
            <ExpandMoreOutlinedIcon fontSize="large"></ExpandMoreOutlinedIcon>
          </div>
      </div>

      <Element name="About">
        <About theme={theme}></About>
      </Element>

      <Element name="Projects">
        <Projects projects={data} theme={theme}></Projects>
      </Element>

      <Element name="Skills">
        <Skills theme={theme}></Skills>
      </Element>

      <Element name="Contact">
        <Contact theme={theme}></Contact>
      </Element>

      <Footer theme={theme}></Footer>
    </div>
  );
}

export default App;
