import React from "react";
import { PATHS } from "../Navbar";
import useOpacityOnMount from "../../hooks/useOpacityOnMount";
import { useNavigate } from "react-router-dom";

export const TRANSITION_MS = 1000;

function Homepage() {
  const navigate = useNavigate();

  const { opacities } = useOpacityOnMount({
    ms: TRANSITION_MS,
    transitions: 3,
  });

  const { opacities: delayedOpacities } = useOpacityOnMount({
    ms: TRANSITION_MS / 2,
    transitions: 5,
    delay: TRANSITION_MS * 3,
  });

  return (
    <div className="flex col h-m-1">
      <div className="v-m-1 uppercase blue center-self">
        <span className="mega-font space-letters">D</span>
        <span className="mega-font-smaller space-letters-extra">erek </span>
        <span className="mega-font space-letters">S</span>
        <span className="mega-font-smaller space-letters-extra">ims</span>
      </div>

      <span
        className="light-grey text-font m-b-1 space-letters"
        style={{
          opacity: opacities[0],
          transition: TRANSITION_MS + "ms",
        }}
      >
        Frontend Web Developer
      </span>
      <span
        className="light-grey smaller-font m-b-1 space-letters  max-width-400"
        style={{
          opacity: opacities[1],
          transition: TRANSITION_MS + "ms",
        }}
      >
        Adept in Javascript, Typescript and React
      </span>
      <div
        className="flex col lightish-grey smaller-font v-m-25 space-letters max-width-400 pointer"
        style={{
          opacity: opacities[2],
          transition: TRANSITION_MS + "ms",
        }}
        onClick={() => {
          delayedOpacities[4] && navigate(PATHS.EXPERIENCE);
        }}
      >
        <span className="lightish-grey italic">With experience in</span>
        <ul className="circle-list m-0">
          <li
            style={{
              opacity: delayedOpacities[0],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Progressive Web Apps
          </li>
          <li
            style={{
              opacity: delayedOpacities[1],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Angular
          </li>
          <li
            style={{
              opacity: delayedOpacities[2],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Backend development with AWS
          </li>
          <li
            style={{
              opacity: delayedOpacities[3],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Hosting/Deployment
          </li>
          <li
            style={{
              opacity: delayedOpacities[4],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Automated Testing
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
