import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./transition-styles.scss";
import { NAVBAR_HEIGHT } from "../Navbar";

function PageTransition(props: { children: React.ReactNode; path: string }) {
  const nodeRef = useRef(null);
  return (
    <SwitchTransition>
      <CSSTransition
        key={props.path}
        in={true}
        nodeRef={nodeRef}
        timeout={300}
        classNames="page"
        appear
        unmountOnExit
        mountOnEnter
      >
        <div
          style={{
            minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`,
            maxWidth: "100%",
            paddingTop: NAVBAR_HEIGHT,
          }}
          className="flex col justify-start align-center full-width"
          ref={nodeRef}
        >
          {props.children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default PageTransition;
