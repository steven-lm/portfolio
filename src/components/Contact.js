import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import poly from "../assets/images/poly1.svg";
import emailjs from 'emailjs-com';

const Outer = styled.div`
  width: 100%;
  height: 650px;
  position: relative;
  background-color: transparent;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 2.2rem;
  margin: 55px;
  margin-top: 115px;
  color: ${(props) => (props.dark ? "#D3D3D3" : "black")};

  :after {
    bottom: -8px;
    content: "";
    display: block;
    height: 4px;
    position: relative;
    width: 60%;
    left: calc(50% - 30%);
    background: ${(props) => (props.dark ? "#D3D3D3" : "black")};
 }

}
`;

const Polygon = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.lightTheme.background};

  ${(props) =>
    props.dark &&
    css`
      background-color: ${(props) => props.theme.darkTheme.darkerBackground};
      color: white;
    `}

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    fill: ${(props) => props.theme.lightTheme.main};

    ${(props) =>
      props.dark &&
      css`
        fill: ${(props) => props.theme.darkTheme.main};
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

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  background-color: ${(props) => props.theme.lightTheme.main};

  ${(props) =>
    props.dark &&
    css`
      background-color: ${(props) => props.theme.darkTheme.main};
      color: white;
    `}

  #from_name {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    width: 350px;
    height: 38px;
    border: none;
    border-radius: 5px;
    outline: black;
    color: ${(props) => (props.dark ? "#D3D3D3" : "black")};
    background-color: ${(props) =>
      props.dark ? props.theme.darkTheme.input : props.theme.lightTheme.input};

    ::placeholder {
      color: ${(props) =>
        props.dark ? props.theme.darkTheme.placeholder : "gray"};
    }
  }

  #email {
    margin: 15px 0px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    width: 350px;
    height: 38px;
    border: none;
    border-radius: 5px;
    outline: black;
    color: ${(props) => (props.dark ? "#D3D3D3" : "black")};
    background-color: ${(props) =>
      props.dark ? props.theme.darkTheme.input : props.theme.lightTheme.input};

    ::placeholder {
      color: ${(props) =>
        props.dark ? props.theme.darkTheme.placeholder : "gray"};
    }
  }

  #message {
    margin: 15px 0px;
    padding: 15px;
    display: flex;
    font-size: 1.2rem;
    width: 350px;
    height: 100px;
    border: none;
    border-radius: 5px;
    resize: none;
    font-family: inherit;
    outline: black;
    color: ${(props) => (props.dark ? "#D3D3D3" : "black")};
    background-color: ${(props) =>
      props.dark ? props.theme.darkTheme.input : props.theme.lightTheme.input};

    ::placeholder {
      color: ${(props) =>
        props.dark ? props.theme.darkTheme.placeholder : "gray"};
    }
  }

  .submit-button {
    margin-top: 10px;
    width: 350px;
    height: 30px;
    border-radius: 5px;
    border: none;
    font-family: inherit;
    outline: black;
    color: ${(props) => (props.dark ? "black" : "black")};
    background: ${(props) => (props.dark ? "#252b6b" : "#cfad80")};
    cursor: pointer;
    font-weight: 500;
  }

  .submit-button: hover {
    background: ${(props) => (props.dark ? "#3e469c" : "#ab8e68")};
  }

  .form-message {
    margin-top: 10px;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    .submit-button {
      width: 300px;
    }

    #message {
      width: 300px;

    }

    #from_name {
      width: 300px;
    }

    #email {
      width: 300px;
    }
  }

`;

const Contact = ({ theme }) => {
  const {REACT_APP_USER_ID, REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID} = process.env;

  const [formState, setFormState] = useState({
    from_name: null,
    email: null,
    message: null,
  });

  const [isValid, setIsValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMissing, setShowMissing] = useState(false);

  function handleChange(e) {
    setShowMissing(false);
    setShowSuccess(false);
    const value = e.target.value;
    const name = e.target.name;
    const id = e.target.id;
    let i = document.getElementById(id);

    if (value === "" || value === null) {
      i.style.border = "1px solid red"
    } else {
      i.style.border = "none"
    }

    setFormState({
      ...formState,
      [name]: value
    })
  }

  function highlightMissing() {
    for (const [key, value] of Object.entries(formState)) {
      if (value === "" || value === null) {
        let i = document.getElementById(key);
        i.style.border = "1px solid red"
      }
    }
  }

  useEffect(() => {
    const name = formState.from_name;
    const email = formState.email;
    const message =formState.message;
    if (name && email && message) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

  }, [formState])

  function sendEmail(e) {
    e.preventDefault();

    if (!isValid) {
      highlightMissing();
      setShowMissing(true);
      return;
    }


    emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });    

    e.target.reset();

    setShowSuccess(true);
  }

  return (
    <Outer>
      <Polygon dark={theme === "dark"}>
        <svg
          height="60px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            class="svg--sm"
            points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
          />
          <polygon
            class="svg--lg"
            points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
          />
        </svg>
      </Polygon>
      <Container dark={theme === "dark"}>
        <Title dark={theme === "dark"}>Get in touch!</Title>
        <div className="form-container">
          <form onSubmit={sendEmail}>
            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
          {showSuccess && 
          <div className="form-message" style={{color: "green"}}> Email Sent! </div>
          }
          {showMissing && 
          <div className="form-message" style={{color: "red"}}> Please fill out all fields! </div>
          }
        </div>
      </Container>
    </Outer>
  );
};

export default Contact;
