import React from "react";
import useOpacityOnMount from "../../hooks/useOpacityOnMount";
import { TRANSITION_MS } from "../Home";

function AboutMe() {
  const { opacities } = useOpacityOnMount({
    ms: TRANSITION_MS * 0.75,
    transitions: 4,
  });

  return (
    <>
      <div id="picture-and-label" style={{ transition: "0.3s" }}>
        <span className="v-m-1 mega-font-size center-text blue">About Me</span>
        <img
          className="h-m-1"
          src="headshot.png"
          style={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
          }}
          alt="headshot"
        />
      </div>
      <div className="flex col h-m-1">
        <span
          className="light-grey smaller-font-size m-b-1 space-letters max-width-400"
          style={{
            opacity: opacities[0],
            transition: TRANSITION_MS + "ms",
          }}
        >
          From Seattle, Washington
        </span>
        <span
          className="light-grey smaller-font-size m-b-1 space-letters max-width-400"
          style={{
            opacity: opacities[1],
            transition: TRANSITION_MS + "ms",
          }}
        >
          Graduated Tufts University in 2019 with a BS in CS
        </span>
        <span
          className="light-grey smaller-font-size m-b-1 space-letters max-width-400"
          style={{
            opacity: opacities[2],
            transition: TRANSITION_MS + "ms",
          }}
        >
          Spent four years as a full-stack web developer for Slalom Build in
          Seattle
        </span>
        <span
          className="light-grey smaller-font-size m-b-1 space-letters max-width-400"
          style={{
            opacity: opacities[3],
            transition: TRANSITION_MS + "ms",
          }}
        >
          Currently residing in New Orleans, Louisiana.
        </span>
      </div>
    </>
  );
}

export default AboutMe;
