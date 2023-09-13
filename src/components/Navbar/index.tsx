import React, { useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import { Icons } from "../IconButton/icons";
import { useOutsideAlerter } from "../OutsideAlerter/OutsideAlerter";

export enum PATHS {
  HOME = "/",
  ABOUT = "/about",
  EXPERIENCE = "/experience",
  CONTACT = "/contact",
}
export const NAVBAR_HEIGHT = "50px";

function Navbar() {
  const [smallNavOpen, setSmallNavOpen] = useState(false);
  const popoutMenuRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const { pathname } = location;

  useOutsideAlerter(popoutMenuRef, () => setSmallNavOpen(false));

  const linkTextClassName =
    "nav-text-link v-p-25 h-p-50 m-50 light-grey border-radius-default dark-hombre grey-border thin pointer ";

  const Links = useMemo(
    () => (
      <>
        <Link
          className={
            linkTextClassName +
            (pathname === PATHS.HOME
              ? "animated-border-mask-active-white-thick"
              : "animated-border-white-thick")
          }
          to={PATHS.HOME}
        >
          <span>Home</span>
        </Link>
        <Link
          className={
            linkTextClassName +
            (pathname === PATHS.ABOUT
              ? "animated-border-mask-active-white-thick"
              : "animated-border-white-thick")
          }
          to={PATHS.ABOUT}
        >
          <span>About</span>
        </Link>
        <Link
          className={
            linkTextClassName +
            (pathname === PATHS.EXPERIENCE
              ? "animated-border-mask-active-white-thick"
              : "animated-border-white-thick")
          }
          to={PATHS.EXPERIENCE}
        >
          <span>Experience</span>
        </Link>
        <Link
          className={
            linkTextClassName +
            (pathname === PATHS.CONTACT
              ? "animated-border-mask-active-white-thick"
              : "animated-border-white-thick")
          }
          to={PATHS.CONTACT}
        >
          <span>Contact</span>
        </Link>
      </>
    ),
    [pathname]
  );

  return (
    <>
      <div
        id="navbar-big"
        className="flex row space-between h-p-25 "
        style={{ width: "calc(100% - .25rem)", height: NAVBAR_HEIGHT }}
      >
        <Link to="/about">
          <img
            className="m-1 pointer"
            src="headshot.png"
            style={{ borderRadius: "50%", height: "35px", width: "35px" }}
            alt="headshot"
          />
        </Link>
        <div className="flex row">{Links}</div>
      </div>
      <div
        id="navbar-small"
        className="flex row space-between h-p-25 no-overflow hide-scrollbar-visual"
        style={{ width: "calc(100vw - .25rem)", height: NAVBAR_HEIGHT }}
      >
        <Link to="/about">
          <img
            className="m-1 pointer"
            src="headshot.png"
            style={{ borderRadius: "50%", height: "35px", width: "35px" }}
            alt="headshot"
          />
        </Link>
        <div className="flex col">
          <IconButton
            icon={Icons.List}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setSmallNavOpen((current) => !current);
            }}
            size="large"
            className="h-m-50 dark-hombre grey-border thin"
            color="lightGrey"
            hoverColor="white"
          />
          <div
            className="flex col dark-hombre-reverse-horiz p-50"
            style={{
              position: "absolute",
              top: 0,
              right: smallNavOpen
                ? 0
                : -1 * (popoutMenuRef.current?.offsetWidth || 130) + "px",
              transition: "300ms",
              zIndex: 1,
            }}
            ref={popoutMenuRef}
          >
            {Links}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
