import React from "react";
import { Icons } from "./icons";
import IconButton, { IconButtonProps } from "./IconButton";

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
      className={
        `collapse-icon ${props.collapseClockwise ? "" : "counter-clockwise"} ${
          props.collapsed ? "collapsed" : "expanded"
        } ${props.forceHoverState ? "force-hover" : ""} ` +
        (props.className || "")
      }
      icon={icon}
    />
  );
}

export default CollapseButton;
