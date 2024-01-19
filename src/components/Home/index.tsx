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
    transitions: 25,
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
        className="light-grey text-font v-m-1 space-letters"
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
        Adept in Javascript/Typescript and React
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
            Angular
          </li>
          <li
            style={{
              opacity: delayedOpacities[1],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Progressive Web Apps
          </li>
          <li
            style={{
              opacity: delayedOpacities[2],
              transition: TRANSITION_MS + "ms",
            }}
          >
            AWS
          </li>
          <li
            style={{
              opacity: delayedOpacities[3],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            DyanamoDB
          </li>
          <li
            style={{
              opacity: delayedOpacities[4],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            Lambda
          </li>
          <li
            style={{
              opacity: delayedOpacities[5],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            S3
          </li>
          <li
            style={{
              opacity: delayedOpacities[6],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            API Gateway
          </li>
          <li
            style={{
              opacity: delayedOpacities[7],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            Cognito
          </li>
          <li
            style={{
              opacity: delayedOpacities[8],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            CloudFormation
          </li>
          <li
            style={{
              opacity: delayedOpacities[9],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            CloudFront
          </li>

          <li
            style={{
              opacity: delayedOpacities[10],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            CloudWatch
          </li>
          <li
            style={{
              opacity: delayedOpacities[11],
              transition: TRANSITION_MS + "ms",
            }}
            className="m-l-2"
          >
            Route 53
          </li>
          <li
            style={{
              opacity: delayedOpacities[12],
              transition: TRANSITION_MS + "ms",
            }}
          >
            MongoDB
          </li>
          <li
            style={{
              opacity: delayedOpacities[13],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Node.js
          </li>
          <li
            style={{
              opacity: delayedOpacities[14],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Express
          </li>
          <li
            style={{
              opacity: delayedOpacities[15],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Firebase
          </li>
          <li
            style={{
              opacity: delayedOpacities[16],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Jest
          </li>
          <li
            style={{
              opacity: delayedOpacities[17],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Enzyme
          </li>
          <li
            style={{
              opacity: delayedOpacities[18],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Cucumber
          </li>
          <li
            style={{
              opacity: delayedOpacities[19],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Vite
          </li>
          <li
            style={{
              opacity: delayedOpacities[20],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Sass
          </li>
          <li
            style={{
              opacity: delayedOpacities[21],
              transition: TRANSITION_MS + "ms",
            }}
          >
            End-to-end testing
          </li>
          <li
            style={{
              opacity: delayedOpacities[22],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Hosting/deployment
          </li>
          <li
            style={{
              opacity: delayedOpacities[23],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Agile Development
          </li>
          <li
            style={{
              opacity: delayedOpacities[23],
              transition: TRANSITION_MS + "ms",
            }}
          >
            Google Analytics
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
