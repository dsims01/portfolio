import React, { useEffect, useRef, useState } from "react";
import useOpacityOnMount from "../../hooks/useOpacityOnMount";
import IconButton from "../IconButton/IconButton";
import { Icons } from "../IconButton/icons";

function Contact() {
  const { opacities } = useOpacityOnMount({
    transitions: 2,
  });

  const copySuccess = useRef(false);
  const [copySuccessRender, setCopySuccessRender] = useState(new Date());

  useEffect(() => {
    let copySuccessTimeout: NodeJS.Timeout;
    if (copySuccess.current) {
      copySuccessTimeout = setTimeout(() => {
        copySuccess.current = false;
        setCopySuccessRender(new Date());
      }, 1000);
    }
    return () => clearTimeout(copySuccessTimeout);
  }, [copySuccessRender]);
  return (
    <>
      <span className="v-m-1 mega-font center-text blue">Contact</span>

      <ul className="flex col text-font m-1">
        <li
          style={{
            opacity: opacities[0],
            transition: "300ms",
          }}
        >
          <div className="flex row m-b-1">
            <span className="p-r-1">derek.sims26@gmail.com</span>
            <IconButton
              icon={copySuccess.current ? Icons.CopySuccess : Icons.Copy}
              onClick={() => {
                navigator.clipboard.writeText("derek.sims26@gmail.com");
                copySuccess.current = true;
                setCopySuccessRender(new Date());
              }}
              color={copySuccess.current ? "blue" : "lightGrey"}
              hoverColor={copySuccess.current ? "blue" : "white"}
              noBackground
              noOutline
              size="small"
              className="grey-border thin dark-grey-bg"
            />
          </div>
        </li>
        <li
          style={{
            opacity: opacities[1],
            transition: "300ms",
          }}
        >
          <a
            className="blue"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/derek-sims-627514131/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <span className="v-m-1" style={{ height: "100px" }}></span>
    </>
  );
}

export default Contact;
