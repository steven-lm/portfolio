import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";
import ComputerIcon from "@material-ui/icons/Computer";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CanvaLogo from '../assets/logos/CanvaLogo.svg'
import RangeMeLogo from '../assets/logos/RangeMeLogo.svg'
import OrdermentumLogo from '../assets/logos/OrdermentumLogo.svg'
import PushasLogo from '../assets/logos/PushasLogo.svg'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MOBILE_SIZE = "500";
const TABLET_SIZE = "1100";

const TimelineContainer = styled.div`

 .vertical-timeline::before {
    background: ${(props) => (props.dark ? "#1F1F1F" : "#F0F0F0")};
  }

  .vertical-timeline-element-icon {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .vertical-timeline-element-content {
    -webkit-box-shadow: ${(props) => (props.dark ? "0 3px 0 #0A0A05" : "0 3px 0 #ddd")} ;
    box-shadow: ${(props) => (props.dark ? "0 3px 0 #0A0A05" : "0 3px 0 #ddd")} ;
  }


  .vertical-timeline-element-subtitle {
    color: ${(props) => (props.dark ? "#707070" : "#696969")};
    font-weight: 500;
    margin-top: 2px;
  }

  vertical-timeline-element-title {
    color: ${(props) => (props.dark ? "darkgrey" : "#696969")} !important;
  }

  .tech-stack {
    margin-top: 30px;
    color: ${(props) => (props.dark ? "#505050" : "#696969")};
  }

  p {
    margin-top: 15px;
    color: ${(props) => (props.dark ? "#A9A9A9" : "black")};
  }

  text-align: left;

  width: 100%;
  margin-bottom: 50px;

  svg {
    color: grey;
  }

  .timeline-title {
    margin-bottom: 40px;
    margin-top: 110px;
    text-align: center;
    font-size: 2rem;
    color: ${(props) => (props.dark ? "gray" : "#808080")};
  }

  h1 {
    color: ${(props) => (props.dark ? "#BEBEBE" : "black")};
  }

  .timeline-content {
    text-align: left;
    position: relative;
    right: 200px;
    width: 130%;
  }

  #canva span:first-child  {
    background: linear-gradient(141.1989deg, #01C3CC 0%, #4569E0 51%, #7428EF 99.8%, #7428EF 100%);
    height: 10vw;
    width: 10vw;
    max-height: 60px;
    max-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  
  #canva img {
    height: 10vw;
    width: 10vw;
    max-height: 60px;
    max-width: 60px;
  }

  #rangeme span:first-child {
    background: white;
    border: 1px solid #c9c9c9;
    color: #fff;
    height: 10vw;
    width: 10vw;
    max-height: 60px;
    max-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center
  }

  #rangeme img {
    height: 7vw;
    width: 7vw;
    max-height: 40px;
    max-width: 40px;
  }

  #pushas span:first-child {
    background: black;
    height: 10vw;
    width: 10vw;
    max-height: 60px;
    max-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  
  #pushas img {
    height: 8.5vw;
    width: 8.5vw;
    max-height: 50px;
    max-width: 50px;
  }

  #ordermentum span:first-child {
    background: white;
    height: 10vw;
    width: 10vw;
    max-height: 60px;
    max-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  
  
  #ordermentum img {
    height: 10vw;
    width: 10vw;
    max-height: 60px;
    max-width: 60px;
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    width: 100%;

    .timeline-content {
      position: relative;
      left: -60px;
      width: 400px;
    }
  }

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    width: 85%;
  }
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    background: "white",
  },

  darkPaper: {
    padding: "6px 16px",
    background: "#1F1F1F",
    color: "#808080",
  },

  darkTypography: {
    color: "#808080",
  },

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


const TimelineComponent = ({ theme }) => {
  const classes = useStyles();

  const contentBackground = (theme === "dark") ? '#0A0A05' : '#F5F5F5'

  return (
    <TimelineContainer dark={theme === "dark"}>
      <div className="timeline-title">Experience</div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          id="canva"
          contentStyle={{ background: contentBackground, borderTop: "5px solid #6544DE" }}
          contentArrowStyle={{ borderRight: "7px solid  #F0F0F0" }}
          date="June 2023 - present"
          // iconStyle={{ background: "linear-gradient(141.1989deg, #01C3CC 0%, #4569E0 51%, #7428EF 99.8%, #7428EF 100%)", color: "#fff", height: '60px', width: '60px'}}
          icon={<img src={CanvaLogo} alt='Canva Logo'/>}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Canva</h4>
          <p>
          User Product
          </p>
          {/* <p className="tech-stack">
          Tech stack: TypeScript, React
          </p> */}
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          id="rangeme"
          contentStyle={{ background: contentBackground, borderTop: "5px solid #006FCF" }}
          contentArrowStyle={{ borderRight: "7px solid  #F0F0F0" }}
          date="Mar 2022 - Mar 2023"
          // iconStyle={{ background: "white", border: '1px solid #c9c9c9', color: "#fff", height: '60px', width: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          icon={<img src={RangeMeLogo} alt='RangeMe Logo'/>}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">RangeMe</h4>
          <p>
          Primarily worked on the Ordering system which enables Buyers to purchase directly from Suppliers on the RangeMe platform.
          </p>
          <p className="tech-stack">
          Tech stack: JavaScript, React, Redux, RxJS, Ruby, Rails, AWS, Postgresql, Docker
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          id="pushas"
          contentStyle={{ background: contentBackground, borderTop: "5px solid black" }}
          contentArrowStyle={{ borderRight: "7px solid  #F0F0F0" }}
          date="Nov 2021 - Mar 2022"
          // iconStyle={{ background: "black", color: "#fff", height: '60px', width: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          icon={<img src={PushasLogo} alt='Pushas Logo'/>}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer - Contract</h3>
          <h4 className="vertical-timeline-element-subtitle">PUSHAS</h4>
          <p>
          Architectured and developed a new platform for sellers/employees featuring Consignments and Cashouts.
          </p>
          <p className="tech-stack">
          Tech stack: Typescript, Nextjs, Apollo, Hasura Graphql, AWS, Postgresql, Docker
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          id="ordermentum"
          contentStyle={{ background: contentBackground, borderTop: "5px solid #d64700"  }}
          date="Jan 2021 - Nov 2021"
          // iconStyle={{ background: "white", color: "#fff", height: '60px', width: '60px'}}
          icon={<img src={OrdermentumLogo} alt='Ordermentum Logo'/>}
        >
          <h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ordermentum
          </h4>
          <p>
          Developed experiments/scripts for Growth team. Worked on Frontend features on the app.
          </p>
          <p className="tech-stack">
          Tech stack: Typescript, React, Python, Nodejs, AWS, Postgresql, Docker
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: contentBackground, borderTop: "5px solid #836953" }}
          date="Jun 2015 - Aug 2017"
          iconStyle={{ background: "#836953", color: "#fff" }}
          icon={<CameraAltIcon style={{fill: 'white'}} />}
        >
          <h3 className="vertical-timeline-element-title">Photo Editor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fast Photo
          </h4>
          <p>Edited photos using Photoshop, Lightroom and Transpix</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </TimelineContainer>
  );
};

export default TimelineComponent;
