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
            height: `calc(100% - ${NAVBAR_HEIGHT})`,
            paddingTop: '30px'
          }}
          className="flex col justify-center align-center"
          ref={nodeRef}
        >
          {props.children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default PageTransition;
