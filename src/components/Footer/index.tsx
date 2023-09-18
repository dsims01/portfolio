import React from "react";

export const FOOTER_HEIGHT = "50px";

function Footer() {
  return (
    <div
      className="grey"
      style={{
        height: FOOTER_HEIGHT + "px",
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: -1
      }}
    >
      <a
        className="grey"
        target="_blank"
        rel="noreferrer"
        href="https://www.freepik.com/free-vector/simple-black-technology-background-template-vector_16396575.htm#query=technology%20background&position=36&from_view=search&track=ais"
      >
        Background image by rawpixel.com
      </a>{" "}
      on Freepik
    </div>
  );
}

export default Footer;
