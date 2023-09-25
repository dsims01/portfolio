import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./transition-styles.scss";
import { NAVBAR_HEIGHT } from "../Navbar";
import { FOOTER_HEIGHT } from "../Footer";

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
            height: `calc(100% - ${NAVBAR_HEIGHT} - ${FOOTER_HEIGHT})`,
          }}
          className="flex col justify-center align-center hide-scrollbar-visual"
          ref={nodeRef}
        >
          {props.children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default PageTransition;
