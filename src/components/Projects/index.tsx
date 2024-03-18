import React, { useRef, useState } from "react";
import CollapseButton from "../IconButton/CollapseButton";
import useOpacityOnMount from "../../hooks/useOpacityOnMount";
import { TRANSITION_MS } from "../Home";
import classnames from "classnames";

function Experience() {
  return (
    <div
      style={{ height: `100%`, zIndex: 1, justifySelf: "flex-start" }}
      id="experience"
      className="flex col full-width align-center relative"
    >
      <span className="h-m-1 mega-font br-default h-p-1 blue">Experience</span>
      <div className="flex row wrap align-start justify-center full-width space-letters">
        <Category
          transitionNum={0}
          header="Professional Projects"
          div1="Slalom Build"
          first={{
            label: "Senior Software Engineer",
            duration: "(Feb 2022 - June 2023)",
            contents: [
              {
                text: "Worked on various slices of monolithic application for main POS web app of major telecom company",
                postText: "(Angular / Cucumber / Google Analytics)",
              },
              {
                text: "Optimized end-to-end tests to reduce pipeline testing time by 30%",
              },
              {
                text: "Implemented analytics to track user-flows and identify failures and areas of improvement",
              },
              {
                text: "Prepared legacy code for client handoff with refactors, bug fixes and documentation",
              },
              {
                text: "Led small pilot team for enabling usage of Angular web components within mobile app",
              },
            ],
          }}
          second={{
            label: "Software Engineer",
            duration: "(Aug 2019- Feb 2022)",
            contents: [
              {
                text: "Worked on multiple microservice teams in re-platforming efforts for large mortgage company",
                postText: "(React / GraphQL / Node.js / AWS)",
              },
              {
                text: "Built React UI component library (used across dozens of teams)",
              },
              {
                text: "Developed system to convert 30+ business-written configurations for loan forms into React microservices connected to a shared AWS API",
              },
              {
                text: "Worked on greenfield team for engineering proof-of-concept fullstack microservices for business to determine resource allocation",
              },
              {
                text: "Served as SME for developing new microservices within client application environment",
              },
            ],
          }}
          third={{
            label: "Software Engineering Intern",
            duration: "(2018)",
            contents: [
              {
                text: "Worked on internal portal for facilitating communication, scheduling and resource-sharing between recruiters and job candidates",
                postText: "(Angular / AWS)",
              },
            ],
          }}
        />
        <Category
          transitionNum={1}
          header="Other Projects"
          first={{
            label: "Barin Noter",
            duration: "(2020 - Present)",
            contents: [
              {
                text: "Built a progressive web app for productive note-taking which tracks to-do items and calendar items across notes",
                postText:
                  "(React / Vite / Sass / Node.js / AWS / Web workers / hosting / deployment)",
              },
              {
                text: "notes.barin-yoder.com/about",
                link: "https://notes.barin-yoder.com/about",
                fillBullet: true,
              },
              {
                text: "AWS backend and hosting",
              },
              {
                text: "React frontend",
              },
              {
                text: "Used by friends and family",
              },
            ],
          }}
          second={{
            label: "JumboCode",
            duration: "(2018 - 2019)",
            contents: [
              {
                text: "Served as lead frontend developer in building anonymous messaging hotline web app for Tufts mental-health group",
                postText: "(HTML / CSS / Javascript)",
              },
            ],
          }}
        />
        <Category
          transitionNum={2}
          header="Skills/Technology"
          first={{
            label: "Languages",
            contents: [
              {
                text: "Javascript/Typescript",
              },
              {
                text: "HTML/CSS",
              },
              {
                text: "C++",
              },
              {
                text: "SQL",
              },
              {
                text: "GraphQL",
              },
            ],
          }}
          second={{
            label: "Frameworks/Technologies",
            contents: [
              {
                text: "React",
              },
              {
                text: "AWS",
                postText:
                  "(DynamoDB, Lambda, API Gateway, Cognito, CloudFormation, CloudFront, S3, CloudWatch, Route 53)",
              },
              {
                text: "Angular",
              },
              {
                text: "MongoDB",
              },
              {
                text: "Node.js",
              },
              {
                text: "Express.js",
              },
              {
                text: "Firebase",
              },
              {
                text: "Jest",
              },
              {
                text: "Enzyme",
              },
              {
                text: "Cucumber",
              },
              {
                text: "Vite",
              },
              {
                text: "Sass",
              },
            ],
          }}
          third={{
            label: "Other",
            contents: [
              {
                text: "Progressive Web Apps",
              },
              {
                text: "Google Analytics",
              },
              {
                text: "E2E Testing",
              },
              {
                text: "Hosting/Deployment",
              },
              {
                text: "Agile Development",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Experience;

type Section = {
  label: string;
  duration?: string;
  contents: {
    fillBullet?: boolean;
    link?: string;
    text: string;
    postText?: string;
  }[];
};

const Category = (props: {
  div1?: string;
  div2?: string;
  transitionNum: number;
  header: string;
  first: Section;
  second?: Section;
  third?: Section;
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);

  const [collapsed, setCollapsed] = useState(true);
  const [thirdCollapsed, setThirdCollapsed] = useState(false);
  const [secondCollapsed, setSecondCollapsed] = useState(false);
  const [firstCollapsed, setFirstCollapsed] = useState(false);
  const [thirdHovering, setThirdHovering] = useState(false);
  const [secondHovering, setSecondHovering] = useState(false);
  const [firstHovering, setFirstHovering] = useState(false);
  const [headerHovering, setHeaderHovering] = useState(false);

  const { opacities } = useOpacityOnMount({
    ms: TRANSITION_MS / 2,
    transitions: 4,
  });

  return (
    <div
      className={`m-1 flex col br-default width-clamp-800 ${
        !opacities[props.transitionNum + 1]
          ? "animated-border-placeholder"
          : collapsed
          ? "animated-border-card-white"
          : "animated-border-mask-active-card-white"
      }`}
      style={{
        opacity: opacities[props.transitionNum],
        transition: TRANSITION_MS / 2 + "ms",
      }}
    >
      <div
        className={classnames(
          "flex",
          "row",
          "pointer",
          "full-width",
          "dark-hombre-horiz",
          !collapsed && "header-border-white"
        )}
        onMouseOver={() => setHeaderHovering(true)}
        onMouseOut={() => setHeaderHovering(false)}
        onClick={() => setCollapsed(current => !current)}
        style={{
          position: "sticky",
          top: "0px",
          zIndex: 2,
        }}
        ref={headerRef}
      >
        <CollapseButton
          noBackground
          noOutline
          size="large"
          collapsed={collapsed}
          collapsedOrientation="right"
          onClick={e => {
            e.stopPropagation();
            setCollapsed(current => !current);
          }}
          color="lightGrey"
          forceHoverState={headerHovering}
        />
        <span className="v-m-1 subheader-font pointer italic">
          {props.header}
        </span>
      </div>
      <div className={"dark-hombre-horiz"}>
        {!collapsed && (
          <div className="flex col smaller-font">
            {props.div1 && (
              <span
                className="p-l-1 v-p-50 dark-hombre-horiz"
                style={{
                  position: "sticky",
                  top: headerRef.current?.offsetHeight || 65,
                  zIndex: 2,
                  borderBottom: "1px solid var(--dark-grey)",
                  borderTop: "1px solid var(--grey)",
                }}
                ref={div1Ref}
              >
                {props.div1}
              </span>
            )}
            <div>
              <div
                className="flex row align-center dark-hombre-horiz p-l-1"
                style={{
                  position: "sticky",
                  top:
                    (headerRef.current?.offsetHeight || 65) +
                    (div1Ref.current?.offsetHeight || 0) -
                    1,
                  zIndex: 1,
                  borderBottom: "1px solid var(--dark-grey)",
                  borderTop: "1px solid var(--grey)",
                }}
              >
                <CollapseButton
                  noBackground
                  noOutline
                  size="small"
                  collapsed={firstCollapsed}
                  collapsedOrientation="right"
                  onClick={e => {
                    e.stopPropagation();
                    setFirstCollapsed(current => !current);
                  }}
                  color="grey"
                  forceHoverState={firstHovering}
                />
                <div className="flex row wrap v-m-15">
                  <span
                    onMouseOver={() => setFirstHovering(true)}
                    onMouseOut={() => setFirstHovering(false)}
                    onClick={() => setFirstCollapsed(current => !current)}
                    className="pointer p-r-1"
                  >
                    {props.first.label}{" "}
                  </span>
                  {props.first.duration && (
                    <span
                      onMouseOver={() => setFirstHovering(true)}
                      onMouseOut={() => setFirstHovering(false)}
                      onClick={() => setFirstCollapsed(current => !current)}
                      className="pointer light-grey"
                    >
                      {props.first.duration}
                    </span>
                  )}
                </div>
              </div>
              {!firstCollapsed && (
                <ul className="circle-list light-grey m-l-2">
                  <li className="m-b-1 white">
                    {props.first.contents[0].text}{" "}
                    {props.first.contents[0].postText && (
                      <span className="blue" style={{ wordWrap: "break-word" }}>
                        {props.first.contents[0].postText}
                      </span>
                    )}
                  </li>
                  {props.first.contents.slice(1).length > 0 &&
                    props.first.contents.slice(1).map(liContent => (
                      <li
                        className={`m-b-50 light-grey ${
                          liContent.fillBullet ? "circle-fill-list" : ""
                        }`}
                      >
                        {liContent.link ? (
                          <a
                            className="blue"
                            target="_blank"
                            rel="noreferrer"
                            href={liContent.link}
                          >
                            {liContent.text}
                          </a>
                        ) : (
                          liContent.text
                        )}{" "}
                        {liContent.postText && (
                          <span className="light-grey">
                            {liContent.postText}
                          </span>
                        )}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            {props.second && (
              <div>
                <div
                  className="flex row align-center dark-hombre-horiz p-l-1"
                  style={{
                    position: "sticky",
                    top:
                      (headerRef.current?.offsetHeight || 65) +
                      (div1Ref.current?.offsetHeight || 0) -
                      1,
                    zIndex: 1,
                    borderBottom: "1px solid var(--dark-grey)",
                    borderTop: "1px solid var(--grey)",
                  }}
                >
                  <CollapseButton
                    noBackground
                    noOutline
                    size="small"
                    collapsed={secondCollapsed}
                    collapsedOrientation="right"
                    onClick={e => {
                      e.stopPropagation();
                      setSecondCollapsed(current => !current);
                    }}
                    color="grey"
                    forceHoverState={secondHovering}
                  />
                  <div className="flex row wrap v-m-15">
                    <span
                      onMouseOver={() => setSecondHovering(true)}
                      onMouseOut={() => setSecondHovering(false)}
                      onClick={() => setSecondCollapsed(current => !current)}
                      className="pointer p-r-1"
                    >
                      {props.second.label}{" "}
                    </span>
                    {props.second.duration && (
                      <span
                        onMouseOver={() => setSecondHovering(true)}
                        onMouseOut={() => setSecondHovering(false)}
                        onClick={() => setSecondCollapsed(current => !current)}
                        className="pointer light-grey"
                      >
                        {props.second.duration}
                      </span>
                    )}
                  </div>
                </div>
                {!secondCollapsed && (
                  <ul className="circle-list light-grey m-l-2">
                    <li className="m-b-1 white">
                      {props.second.contents[0].text}{" "}
                      {props.second.contents[0].postText && (
                        <span
                          className="blue"
                          style={{ wordWrap: "break-word" }}
                        >
                          {props.second.contents[0].postText}
                        </span>
                      )}
                    </li>
                    {props.second.contents.slice(1).length > 0 &&
                      props.second.contents.slice(1).map(liContent => (
                        <li className="m-b-50 light-grey">
                          {liContent.text}{" "}
                          {liContent.postText && (
                            <span className="light-grey">
                              {liContent.postText}
                            </span>
                          )}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            )}
            {props.third && (
              <div>
                <div
                  className="flex row align-center dark-hombre-horiz p-l-1"
                  style={{
                    position: "sticky",
                    top:
                      (headerRef.current?.offsetHeight || 65) +
                      (div1Ref.current?.offsetHeight || 0) -
                      1,
                    zIndex: 1,
                    borderBottom: "1px solid var(--dark-grey)",
                    borderTop: "1px solid var(--grey)",
                  }}
                >
                  <CollapseButton
                    noBackground
                    noOutline
                    size="small"
                    collapsed={thirdCollapsed}
                    collapsedOrientation="right"
                    onClick={e => {
                      e.stopPropagation();
                      setThirdCollapsed(current => !current);
                    }}
                    color="grey"
                    forceHoverState={thirdHovering}
                  />
                  <div className="flex row wrap v-m-15">
                    <span
                      onMouseOver={() => setThirdHovering(true)}
                      onMouseOut={() => setThirdHovering(false)}
                      onClick={() => setThirdCollapsed(current => !current)}
                      className="pointer p-r-1"
                    >
                      {props.third.label}{" "}
                    </span>
                    {props.third.duration && (
                      <span
                        onMouseOver={() => setThirdHovering(true)}
                        onMouseOut={() => setThirdHovering(false)}
                        onClick={() => setThirdCollapsed(current => !current)}
                        className="pointer light-grey"
                      >
                        {props.third.duration}
                      </span>
                    )}
                  </div>
                </div>
                {!thirdCollapsed && (
                  <ul className="circle-list light-grey m-l-2">
                    <li className="m-b-1 white">
                      {props.third.contents[0].text}{" "}
                      {props.third.contents[0].postText && (
                        <span
                          className="blue"
                          style={{ wordWrap: "break-word" }}
                        >
                          {props.third.contents[0].postText}
                        </span>
                      )}
                    </li>
                    {props.third.contents.slice(1).length > 0 &&
                      props.third.contents.slice(1).map(liContent => (
                        <li className="m-b-50 light-grey">
                          {liContent.text}{" "}
                          {liContent.postText && (
                            <span className="light-grey">
                              {liContent.postText}
                            </span>
                          )}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
