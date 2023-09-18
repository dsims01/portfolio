import React from "react";
import { NAVBAR_HEIGHT, PATHS } from "../Navbar";
import useOpacityOnMount from "../../hooks/useOpacityOnMount";
import { useNavigate } from "react-router-dom";
import { FOOTER_HEIGHT } from "../Footer";

export const TRANSITION_MS = 1000;

function Homepage() {
  const navigate = useNavigate();

  const { opacities } = useOpacityOnMount({
    ms: TRANSITION_MS,
    transitions: 3,
    delay: 1000,
  });

  const { opacities: delayedOpacities } = useOpacityOnMount({
    ms: TRANSITION_MS / 2,
    transitions: 5,
    delay: 1000 + TRANSITION_MS * 3,
  });

  return (
    <div
      style={{
        height: `calc(100% - ${NAVBAR_HEIGHT} - ${FOOTER_HEIGHT})`,
        margin: "0 40px",
      }}
      className="flex col justify-center align-center"
    >
      <div className="flex col">
        <div className="v-m-1 uppercase blue">
          <span className="mega-font-size space-letters">D</span>
          <span className="mega-font-size-smaller space-letters-extra">
            erek{" "}
          </span>
          <span className="mega-font-size space-letters">S</span>
          <span className="mega-font-size-smaller space-letters-extra">
            ims
          </span>
        </div>

        <span
          className="light-grey text-font-size m-b-1 space-letters"
          style={{
            opacity: opacities[0],
            transition: TRANSITION_MS + "ms",
          }}
        >
          Frontend Web Developer
        </span>
        <span
          className="light-grey smaller-font-size m-b-1 space-letters  max-width-400"
          style={{
            opacity: opacities[1],
            transition: TRANSITION_MS + "ms",
          }}
        >
          Adept in Javascript, Typescript and React
        </span>
        <div
          className="flex col lightish-grey smaller-font-size v-m-25 space-letters max-width-400 pointer"
          style={{
            opacity: opacities[2],
            transition: TRANSITION_MS + "ms",
          }}
          onClick={() => navigate(PATHS.EXPERIENCE)}
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
    </div>
  );
}

export default Homepage;
