import React from "react";
import { Icons } from "../IconButton/consts";
import IconButton, { IconButtonProps } from "./IconButton";
import { isMobile } from "react-device-detect";

type Orientation = "up" | "down" | "left" | "right";
type CollapseButtonProps = Partial<IconButtonProps> & {
  collapsed: boolean;
  collapsedOrientation?: Orientation;
  collapseClockwise?: boolean;
  big?: boolean;
};

function CollapseButton(props: CollapseButtonProps) {
  const icon = {
    up: props.big ? Icons.ChevronUpBig : Icons.ChevronUp,
    down: props.big ? Icons.ChevronDownBig : Icons.ChevronDown,
    left: props.big ? Icons.ChevronLeftBig : Icons.ChevronLeft,
    right: props.big ? Icons.ChevronRightBig : Icons.ChevronRight,
  }[props.collapsedOrientation || "right"];
  return (
    <IconButton
      {...props}
      className={`collapse-icon ${isMobile ? "mobile" : ""} ${
        props.collapseClockwise ? "" : "counter-clockwise"
      } ${props.collapsed ? "collapsed" : "expanded"} ${
        props.forceHoverState ? "hover" : ""
      } ${props.className || ""}`}
      icon={icon}
    />
  );
}

export default CollapseButton;
