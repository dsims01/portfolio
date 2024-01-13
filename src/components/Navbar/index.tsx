import React, { useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import { Icons } from "../IconButton/consts";
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
    "nav-text-link v-p-25 h-p-50 m-50 light-grey br-default dark-hombre grey-border thin pointer ";

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
          <IconButton
            icon={Icons.Home}
            color="lightGrey"
            hoverColor="lightGrey"
            exactSize={20}
            className="smaller-font pointer"
            untabbable
            noBackground
            noOutline
            padding={2}
            rightText="Derek Sims"
          />
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
          <IconButton
            icon={Icons.User}
            color="lightGrey"
            hoverColor="lightGrey"
            exactSize={20}
            className="smaller-font pointer"
            untabbable
            noBackground
            noOutline
            padding={2}
            rightText="About"
          />
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
          <IconButton
            icon={Icons.Briefcase}
            color="lightGrey"
            hoverColor="lightGrey"
            exactSize={20}
            className="smaller-font pointer"
            untabbable
            noBackground
            noOutline
            padding={2}
            rightText="Experience"
          />
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
          <IconButton
            icon={Icons.Contact}
            color="lightGrey"
            hoverColor="lightGrey"
            exactSize={20}
            className="smaller-font pointer"
            untabbable
            noBackground
            noOutline
            padding={2}
            rightText="Contact"
          />
        </Link>
      </>
    ),
    [pathname]
  );

  return (
    <>
      <div
        id="navbar-big"
        className="flex row space-between h-p-25 dark-hombre-reverse-vert"
        style={{
          height: NAVBAR_HEIGHT,
          zIndex: 1,
        }}
      >
        <Link to="/about">
          <img
            className="m-1 pointer"
            src="headshot.png"
            style={{ borderRadius: "50%", height: "35px", width: "35px" }}
            alt="headshot"
          />
        </Link>
        <div className="flex row relative" style={{ zIndex: 1 }}>
          {Links}
        </div>
      </div>
      <div
        id="navbar-small"
        className="full-width full-height absolute no-overflow"
        style={{
          zIndex: 2,
          maxWidth: "100%",
          pointerEvents: "none",
        }}
      >
        <div
          className="flex row align-start space-between full-width dark-hombre-reverse-vert m-0"
          style={{ height: NAVBAR_HEIGHT }}
        >
          <Link to="/about" style={{ pointerEvents: "all" }}>
            <img
              className="m-1 pointer"
              src="headshot.png"
              style={{ borderRadius: "50%", height: "35px", width: "35px" }}
              alt="headshot"
            />
          </Link>
          <div
            className="flex col"
            style={{ maxWidth: "100%", pointerEvents: "all" }}
          >
            <IconButton
              icon={Icons.List}
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                setSmallNavOpen(current => !current);
              }}
              size="large"
              className="m-t-50 m-r-50 dark-hombre blue-border thin"
              color="lightGrey"
              hoverColor="white"
              padding={2}
            />
            <div
              className="flex col dark-hombre-reverse-horiz p-50 br-default blue-border thin"
              style={{
                position: "absolute",
                top: 0,
                right: smallNavOpen
                  ? 0
                  : -1 * (popoutMenuRef.current?.offsetWidth || 350) + "px",
                transition: "300ms",
                zIndex: 3,
              }}
              ref={popoutMenuRef}
            >
              {Links}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
