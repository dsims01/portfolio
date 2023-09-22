import React, { useState } from "react";
import { NAVBAR_HEIGHT } from "../Navbar";
import CollapseButton from "../IconButton/CollapseButton";
import useOpacityOnMount from "../../hooks/useOpacityOnMount";
import { TRANSITION_MS } from "../Home";
import { FOOTER_HEIGHT } from "../Footer";

function Experience() {
  const [professionalCollapsed, setProfessionalCollapsed] = useState(true);
  const [personalCollapsed, setPersonalCollapsed] = useState(true);
  const [personalJumbocodeCollapsed, setPersonalJumbocodeCollapsed] =
    useState(true);
  const [personalBarinCollapsed, setPersonalBarinCollapsed] = useState(true);
  const [professionalInternCollapsed, setProfessionalInternCollapsed] =
    useState(true);
  const [professionalJuniorCollapsed, setProfessionalJuniorCollapsed] =
    useState(true);
  const [professionalSeniorCollapsed, setProfessionalSeniorCollapsed] =
    useState(true);
  const [personalJumbocodeHovering, setPersonalJumbocodeHovering] =
    useState(false);
  const [personalBarinHovering, setPersonalBarinHovering] = useState(false);
  const [professionalInternHovering, setProfessionalInternHovering] =
    useState(false);
  const [professionalJuniorHovering, setProfessionalJuniorHovering] =
    useState(false);
  const [professionalSeniorHovering, setProfessionalSeniorHovering] =
    useState(false);
  const [personalHeaderHovering, setPersonalHeaderHovering] = useState(false);
  const [professionalHeaderHovering, setProfessionalHeaderHovering] =
    useState(false);

  const { opacities } = useOpacityOnMount({
    ms: TRANSITION_MS / 2,
    transitions: 4,
  });

  return (
    <div
      style={{ height: `calc(100% - ${NAVBAR_HEIGHT} - ${FOOTER_HEIGHT})` }}
      className="h-m-50 flex col full-width"
    >
      <span
        className="h-m-1 mega-font-size border-radius-default h-p-1 blue"
        style={{
          backgroundColor: `rgba(0,0,0,0.1)`,
          width: "fit-content",
        }}
      >
        Experience
      </span>
      <div className="flex row wrap align-start full-width space-letters">
        <div
          className={`m-1 flex col dark-hombre-vert border-radius-default width-clamp-800 ${
            !opacities[2]
              ? "animated-border-placeholder"
              : professionalCollapsed
              ? "animated-border-white"
              : "animated-border-mask-active-white"
          }`}
          style={{
            opacity: opacities[0],
            transition: TRANSITION_MS / 2 + "ms",
          }}
        >
          <div
            className="flex row pointer full-width"
            onMouseOver={() => setProfessionalHeaderHovering(true)}
            onMouseOut={() => setProfessionalHeaderHovering(false)}
            onClick={() => setProfessionalCollapsed((current) => !current)}
          >
            <CollapseButton
              noBackground
              noOutline
              size="large"
              collapsed={professionalCollapsed}
              collapsedOrientation="right"
              onClick={(e) => {
                e.stopPropagation();
                setProfessionalCollapsed((current) => !current);
              }}
              color="lightGrey"
              forceHoverState={professionalHeaderHovering}
            />
            <span className="v-m-1 subheader-font-size pointer italic">
              Professional
            </span>
          </div>
          <div
            style={{
              transition: "max-height 300ms",
              maxHeight: professionalCollapsed ? 0 : "100vh",
            }}
            className={'hide-scrollbar-visual'}
          >
            {!professionalCollapsed && (
              <div className="flex col h-m-1 text-font-size">
                <span className="m-b-1 m-l-1">Slalom Build</span>
                <div className="m-l-1 m-b-1">
                  <div className="flex row align-start">
                    <CollapseButton
                      noBackground
                      noOutline
                      size="small"
                      collapsed={professionalSeniorCollapsed}
                      collapsedOrientation="right"
                      onClick={(e) => {
                        e.stopPropagation();
                        setProfessionalSeniorCollapsed((current) => !current);
                      }}
                      color="grey"
                      forceHoverState={professionalSeniorHovering}
                    />
                    <div className="flex row wrap v-m-15">
                      <span
                        onMouseOver={() => setProfessionalSeniorHovering(true)}
                        onMouseOut={() => setProfessionalSeniorHovering(false)}
                        onClick={() =>
                          setProfessionalSeniorCollapsed((current) => !current)
                        }
                        className="pointer p-r-1"
                      >
                        Senior Software Engineer{" "}
                      </span>
                      <span
                        onMouseOver={() => setProfessionalSeniorHovering(true)}
                        onMouseOut={() => setProfessionalSeniorHovering(false)}
                        onClick={() =>
                          setProfessionalSeniorCollapsed((current) => !current)
                        }
                        className="pointer light-grey"
                      >
                        (Feb 2022 - June 2023)
                      </span>
                    </div>
                  </div>
                  {!professionalSeniorCollapsed && (
                    <ul className="circle-list light-grey m-l-1">
                      <li className="m-b-1 white">
                        Worked on various slices of monolithic application for
                        main POS web app of major telecom company{" "}
                        <span className="blue">
                          (Angular/Testing/Analytics)
                        </span>
                      </li>
                      <li className="m-b-33">
                        Refactored legacy code and fixed/documented bugs to
                        prepare for client handoff
                      </li>
                      <li className="m-b-33">
                        Led optimization of end-to-end testing infrastructure to
                        reduce pipeline testing time by 30%
                      </li>
                      <li className="m-b-33">
                        Implemented Google Analytics to track user-flows,
                        prevent failures, and identify areas of improvement
                      </li>
                      <li className="m-b-33">
                        Led pilot team for enabling utilization of existing
                        Angular web components within mobile application
                        web-view
                      </li>
                    </ul>
                  )}
                </div>
                <div className="m-l-1 m-b-1">
                  <div className="flex row align-start">
                    <CollapseButton
                      noBackground
                      noOutline
                      size="small"
                      collapsed={professionalJuniorCollapsed}
                      collapsedOrientation="right"
                      onClick={(e) => {
                        e.stopPropagation();
                        setProfessionalJuniorCollapsed((current) => !current);
                      }}
                      color="grey"
                      forceHoverState={professionalJuniorHovering}
                    />
                    <div className="flex row wrap v-m-15">
                      <span
                        onMouseOver={() => setProfessionalJuniorHovering(true)}
                        onMouseOut={() => setProfessionalJuniorHovering(false)}
                        onClick={() =>
                          setProfessionalJuniorCollapsed((current) => !current)
                        }
                        className="pointer p-r-1"
                      >
                        Software Engineer{" "}
                      </span>
                      <span
                        onMouseOver={() => setProfessionalJuniorHovering(true)}
                        onMouseOut={() => setProfessionalJuniorHovering(false)}
                        onClick={() =>
                          setProfessionalJuniorCollapsed((current) => !current)
                        }
                        className="pointer light-grey"
                      >
                        (Aug 2019- Feb 2022)
                      </span>
                    </div>
                  </div>
                  {!professionalJuniorCollapsed && (
                    <ul className="circle-list light-grey m-l-1">
                      <li className="m-b-1 white">
                        Worked on various microservice teams in re-platforming
                        efforts for large mortgage company{" "}
                        <span className="blue">(React/NodeJS/AWS/GraphQL)</span>
                      </li>
                      <li className="m-b-33">
                        Built and managed React UI component library (used
                        across dozens of teams)
                      </li>
                      <li className="m-b-33">
                        Developed system to convert 30+ configuration
                        spreadsheets into individual React micro-apps for
                        separate loan processes, connected to a shared AWS API
                      </li>
                      <li className="m-b-33">
                        Worked on greenfield team for engineering
                        proof-of-concept fullstack microservices for business to
                        determine resource allocation
                      </li>
                      <li className="m-b-33">
                        Served as SME for developing new microservices using
                        client loan application environment
                      </li>
                    </ul>
                  )}
                </div>
                <div className="m-l-1 m-b-1">
                  <div className="flex row align-start">
                    <CollapseButton
                      noBackground
                      noOutline
                      size="small"
                      collapsed={professionalInternCollapsed}
                      collapsedOrientation="right"
                      onClick={(e) => {
                        e.stopPropagation();
                        setProfessionalInternCollapsed((current) => !current);
                      }}
                      color="grey"
                      forceHoverState={professionalInternHovering}
                    />
                    <div className="flex row wrap v-m-15">
                      <span
                        onMouseOver={() => setProfessionalInternHovering(true)}
                        onMouseOut={() => setProfessionalInternHovering(false)}
                        onClick={() =>
                          setProfessionalInternCollapsed((current) => !current)
                        }
                        className="pointer p-r-1"
                      >
                        Software Engineering Intern{" "}
                      </span>
                      <span
                        onMouseOver={() => setProfessionalInternHovering(true)}
                        onMouseOut={() => setProfessionalInternHovering(false)}
                        onClick={() =>
                          setProfessionalInternCollapsed((current) => !current)
                        }
                        className="pointer light-grey"
                      >
                        (2018)
                      </span>
                    </div>
                  </div>
                  {!professionalInternCollapsed && (
                    <ul className="circle-list light-grey m-l-1">
                      <li className="white">
                        Worked on internal portal for facilitating
                        communication, scheduling and resource-sharing between
                        recruiters and job candidates{" "}
                        <span className="blue">(Angular/AWS)</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`m-1 flex col dark-hombre-vert border-radius-default width-clamp-800 ${
            !opacities[3]
              ? "animated-border-placeholder"
              : personalCollapsed
              ? "animated-border-white"
              : "animated-border-mask-active-white"
          }`}
          style={{
            opacity: opacities[1],
            transition: TRANSITION_MS / 2 + "ms",
          }}
        >
          <div
            className="flex row pointer full-width"
            onMouseOver={() => setPersonalHeaderHovering(true)}
            onMouseOut={() => setPersonalHeaderHovering(false)}
            onClick={() => setPersonalCollapsed((current) => !current)}
          >
            <CollapseButton
              noBackground
              noOutline
              size="large"
              collapsed={personalCollapsed}
              collapsedOrientation="right"
              onClick={(e) => {
                e.stopPropagation();
                setPersonalCollapsed((current) => !current);
              }}
              color="lightGrey"
              forceHoverState={personalHeaderHovering}
            />
            <span className="v-m-1 subheader-font-size italic">Personal Projects</span>
          </div>
          <div
            style={{
              transition: "max-height 300ms",
              maxHeight: personalCollapsed ? 0 : "100vh",
            }}
            className={'hide-scrollbar-visual'}
          >
            {!personalCollapsed && (
              <div className="flex col h-m-1 text-font-size">
                <div className="m-l-1 m-b-1">
                  <div className="flex row align-start">
                    <CollapseButton
                      noBackground
                      noOutline
                      size="small"
                      collapsed={personalBarinCollapsed}
                      collapsedOrientation="right"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPersonalBarinCollapsed((current) => !current);
                      }}
                      color="grey"
                      forceHoverState={personalBarinHovering}
                    />
                    <div className="flex row wrap v-m-15">
                      <span
                        onMouseOver={() => setPersonalBarinHovering(true)}
                        onMouseOut={() => setPersonalBarinHovering(false)}
                        onClick={() =>
                          setPersonalBarinCollapsed((current) => !current)
                        }
                        className="pointer p-r-1"
                      >
                        Barin Noter{" "}
                      </span>
                      <span
                        onMouseOver={() => setPersonalBarinHovering(true)}
                        onMouseOut={() => setPersonalBarinHovering(false)}
                        onClick={() =>
                          setPersonalBarinCollapsed((current) => !current)
                        }
                        className="pointer light-grey"
                      >
                        (2020-Present)
                      </span>
                    </div>
                  </div>
                  {!personalBarinCollapsed && (
                    <ul className="circle-list light-grey m-l-1">
                      <li className="m-b-1 white">
                        Progressive web app for taking notes, with ability to
                        create/update inline to-do and calendar items to
                        track at a high level{" "}
                        <span className="blue">
                          (React/NodeJS/AWS/Hosting/Deployment)
                        </span>
                      </li>
                      <li className="m-b-33">
                        AWS for hosting and backend services
                      </li>
                      <li className="m-b-33">Frontend built with React</li>
                      <li className="m-b-33 circle-fill-list">
                        <a
                          className="blue"
                          target="_blank"
                          rel="noreferrer"
                          href="https://notes.barin-yoder.com/about"
                        >
                          notes.barin-yoder.com/about
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="m-l-1 m-b-1">
                  <div className="flex row align-start">
                    <CollapseButton
                      noBackground
                      noOutline
                      size="small"
                      collapsed={personalJumbocodeCollapsed}
                      collapsedOrientation="right"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPersonalJumbocodeCollapsed((current) => !current);
                      }}
                      color="grey"
                      forceHoverState={personalJumbocodeHovering}
                    />
                    <div className="flex row wrap v-m-15">
                      <span
                        onMouseOver={() => setPersonalJumbocodeHovering(true)}
                        onMouseOut={() => setPersonalJumbocodeHovering(false)}
                        onClick={() =>
                          setPersonalJumbocodeCollapsed((current) => !current)
                        }
                        className="pointer p-r-1"
                      >
                        Jumbocode{" "}
                      </span>
                      <span
                        onMouseOver={() => setPersonalJumbocodeHovering(true)}
                        onMouseOut={() => setPersonalJumbocodeHovering(false)}
                        onClick={() =>
                          setPersonalJumbocodeCollapsed((current) => !current)
                        }
                        className="pointer light-grey"
                      >
                        (2018-2019)
                      </span>
                    </div>
                  </div>
                  {!personalJumbocodeCollapsed && (
                    <ul className="circle-list light-grey m-l-1">
                      <li className="m-b-33">
                        Lead frontend developer for building anonymous messaging
                        hotline for campus mental-health group{" "}
                        <span className="blue">(HTML/CSS/Javascript)</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
