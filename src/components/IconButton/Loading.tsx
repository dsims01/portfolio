import React from "react";
import { Icons } from "./icons";
import IconButton, { IconButtonProps } from "./IconButton";

function Loading(props: Partial<IconButtonProps> & { size: number | string }) {
  return (
    <IconButton
      noOutline
      {...props}
      className={"loading-icon " + (props.className || "")}
      icon={Icons.Loading}
    />
  );
}

export default Loading;
