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
    ms: TRANSITION_MS / 3,
    transitions: 26,
    delay: TRANSITION_MS * 3,
  });

  const additionalExperienceItems: { item: string; className?: string }[] = [
    { item: "Angular" },
    { item: "Progressive Web Apps" },
    { item: "AWS" },
    { item: "DyanamoDB", className: "m-l-2" },
    { item: "Lambda", className: "m-l-2" },
    { item: "S3", className: "m-l-2" },
    { item: "API Gateway", className: "m-l-2" },
    { item: "Cognito", className: "m-l-2" },
    { item: "CloudFormation", className: "m-l-2" },
    { item: "CloudFront", className: "m-l-2" },
    { item: "CloudWatch", className: "m-l-2" },
    { item: "Route 53", className: "m-l-2" },
    { item: "Web workers" },
    { item: "MongoDB" },
    { item: "Node.js" },
    { item: "Express" },
    { item: "Firebase" },
    { item: "Jest" },
    { item: "Enzyme" },
    { item: "Cucumber" },
    { item: "Vite" },
    { item: "Sass" },
    { item: "End-to-end testing" },
    { item: "Hosting/deployment" },
    { item: "Agile Development" },
    { item: "Google Analytics" },
  ];

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
          {additionalExperienceItems.map((itemData, index) => (
            <li
              style={{
                opacity: delayedOpacities[index],
                transition: TRANSITION_MS + "ms",
              }}
              className={itemData.className}
            >
              {itemData.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
