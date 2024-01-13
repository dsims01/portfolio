import React from "react";
import { Icons } from "../IconButton/consts";
import IconButton, { IconButtonProps } from "./IconButton";

function Loading(props: Partial<IconButtonProps> & { size: number | string }) {
  return (
    <IconButton
      noOutline
      {...props}
      className={"loading-icon no-overflow " + (props.className || "")}
      icon={Icons.Loading}
    />
  );
}

export default Loading;
