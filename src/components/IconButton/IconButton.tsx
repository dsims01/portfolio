import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import {
  IconSize,
  IconColors,
  getIconSizeNum,
  Icons,
  handlePress,
} from "./icons";
import { IconType } from "react-icons";

const StyledButton = styled.button`
  background-color: #484a4d;
  border-radius: var(--icon-button-border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  .icon-component {
    border-radius: var(--icon-button-border-radius);
  }

  &.no-background {
    background: none !important;
  }
  &:hover {
    border: 1px solid var(--off-white);
  }
  &.no-outline {
    border: none !important;
  }
  &.square {
    border-radius: 0 !important;
  }
  &:not(.untabbable) {
    svg:active {
      opacity: 0.8;
    }
  }

  svg:not(:focus-visible) {
    border: none !important;
    outline: none !important;
  }
`;

export type IconButtonProps = {
  untabbable?: boolean;
  className?: string;
  noOutline?: boolean;
  noBackground?: boolean;
  onClick?: (arg: any) => any;
  icon: IconType;
  size?: IconSize;
  square?: boolean;
  color?: IconColors;
  disabledColor?: IconColors;
  hoverColor?: IconColors;
  undoConfirmColor?: IconColors;
  undoConfirmHoverColor?: IconColors;
  confirmationIconWarningColor?: IconColors;
  hoverClassName?: string;
  confirmClassName?: string;
  forceHoverState?: boolean;
  padding?: number;
  hPadding?: number;
  exactSize?: number;
  confirm?: "single" | "double";
  resetConfirmationAt?: Date;
  firstUntabbable?: boolean;
  toggleProps?: {
    secondIcon: IconType;
    onSecondClick: (arg: any) => any;
    secondColor?: IconColors;
    secondHoverColor?: IconColors;
    secondClassNameHover?: string;
    selectedColor: IconColors;
    selectedClassName?: string;
    selectedHoverColor: IconColors;
    selected?: "first" | "second" | "third";
    thirdIcon?: IconType;
    onThirdClick?: (arg: any) => any;
    thirdColor?: IconColors;
    thirdClassNameHover?: string;
    thirdHoverColor?: IconColors;
    secondUntabbable?: boolean;
    thirdUntabbable?: boolean;
  };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      forceHoverState,
      hoverColor,
      color = "black",
      disabledColor,
      undoConfirmColor,
      undoConfirmHoverColor,
      className,
      hoverClassName,
      noBackground,
      noOutline,
      square,
      onClick,
      icon: Icon,
      size,
      padding = 1,
      hPadding,
      exactSize,
      confirm,
      resetConfirmationAt,
      toggleProps,
      untabbable,
      firstUntabbable,
      confirmClassName,
      confirmationIconWarningColor,
      onMouseEnter,
      onMouseLeave,
    } = props;

    const sizeNum = exactSize ? exactSize : size ? getIconSizeNum(size) : 12;
    const sizeString = (mult?: number) =>
      `${(exactSize || sizeNum) * (mult || 1)}px`;
    const paddingString = `${padding}px`;
    const hPaddingString =
      hPadding !== undefined ? `${hPadding}px` : paddingString;

    const [hovering, setHovering] = useState(false);
    const [secondHovering, setSecondHovering] = useState(false);
    const [thirdHovering, setThirdHovering] = useState(false);

    const colorClass =
      untabbable || firstUntabbable
        ? disabledColor || color
        : toggleProps && toggleProps.selected === "first"
        ? hovering
          ? toggleProps.selectedHoverColor
          : toggleProps.selectedColor
        : hovering || forceHoverState
        ? hoverColor || color
        : color;

    const secondColorClass =
      untabbable || toggleProps?.secondUntabbable
        ? disabledColor
        : !toggleProps
        ? undefined
        : toggleProps.selected === "second"
        ? secondHovering
          ? toggleProps.selectedHoverColor
          : toggleProps.selectedColor
        : secondHovering
        ? toggleProps.secondHoverColor
          ? toggleProps.secondHoverColor
          : hoverColor
        : toggleProps.secondColor
        ? toggleProps.secondColor
        : color;

    const thirdColorClass =
      untabbable || toggleProps?.thirdUntabbable
        ? disabledColor
        : !toggleProps
        ? undefined
        : toggleProps.selected === "third"
        ? thirdHovering
          ? toggleProps.selectedHoverColor
          : toggleProps.selectedColor
        : thirdHovering
        ? toggleProps.thirdHoverColor
          ? toggleProps.thirdHoverColor
          : hoverColor
        : toggleProps.thirdColor
        ? toggleProps.thirdColor
        : color;

    const [confirmHovering, setConfirmHovering] = useState(false);
    const [confirmationState, setConfirmationState] = useState<
      "initial" | "final"
    >();
    const [confirmationResetAt, setConfirmationResetAt] = useState<Date>(
      new Date()
    );

    const handleClick = useCallback(
      (e: any) => {
        setHovering(false);
        if ((!confirm || confirmationState === "final") && onClick) {
          onClick(e);
          setConfirmationState(undefined);
        } else if (
          (confirm === "single" && !confirmationState) ||
          (confirmationState === "initial" && confirm === "double")
        ) {
          setConfirmationState("final");
        } else if (confirm === "double" && !confirmationState) {
          setConfirmationState("initial");
        }
      },
      [confirm, confirmationState, onClick]
    );

    const handleSecondClick = (e: any) => {
      toggleProps?.onSecondClick && toggleProps.onSecondClick(e);
    };

    const handleThirdClick = (e: any) => {
      toggleProps?.onThirdClick && toggleProps.onThirdClick(e);
    };

    const handleMouseEnter = useCallback(() => {
      setHovering(true);
      onMouseEnter && onMouseEnter();
    }, [onMouseEnter]);
    const handleMouseLeave = useCallback(() => {
      setHovering(false);
      onMouseLeave && onMouseLeave();
    }, [onMouseLeave]);

    const iconProps = useMemo(
      () => ({
        tabIndex:
          !untabbable && (toggleProps || (confirm && confirmationState))
            ? 0
            : -1,
        onClick: confirm || toggleProps ? handleClick : undefined,
        onMouseEnter:
          confirmationState || toggleProps ? handleMouseEnter : undefined,
        onMouseLeave:
          confirmationState || toggleProps ? handleMouseLeave : undefined,
        className: `icon-component ${
          !untabbable && (toggleProps || (confirm && confirmationState))
            ? `${hovering ? hoverClassName : ""} selectable`
            : ""
        } ${colorClass} ${
          (toggleProps?.selected === "first" &&
            !secondHovering &&
            !thirdHovering) ||
          (toggleProps && hovering)
            ? toggleProps.selectedClassName
            : ""
        }`,
        size: sizeNum,
        style: {
          paddingTop: paddingString,
          paddingBottom: paddingString,
          paddingRight: hPaddingString,
          paddingLeft: hPaddingString,
        },
      }),
      [
        colorClass,
        confirm,
        confirmationState,
        handleClick,
        hovering,
        paddingString,
        hPaddingString,
        secondHovering,
        sizeNum,
        thirdHovering,
        toggleProps,
        untabbable,
        handleMouseEnter,
        handleMouseLeave,
        hoverClassName,
      ]
    );

    useEffect(() => {
      setHovering(false);
    }, [hoverColor, color, Icon]);

    useEffect(() => {
      if (resetConfirmationAt && resetConfirmationAt > confirmationResetAt) {
        setConfirmationResetAt(new Date());
        setConfirmationState(undefined);
      }
    }, [resetConfirmationAt, confirmationResetAt]);

    return (
      <StyledButton
        // disabled={untabbable}
        type="button"
        tabIndex={
          !(confirm && confirmationState) && !toggleProps && !untabbable
            ? 0
            : -1
        }
        onKeyDown={(e) => {
          handlePress(e, () => handleClick(e));
        }}
        onClick={!confirm && !toggleProps ? handleClick : undefined}
        onMouseEnter={
          confirmationState || toggleProps ? undefined : handleMouseEnter
        }
        onMouseLeave={
          confirmationState || toggleProps ? undefined : handleMouseLeave
        }
        ref={ref}
        className={`icon-button ${className || ""} ${
          hovering && !(toggleProps || (confirm && confirmationState))
            ? hoverClassName
            : ""
        } ${noOutline && "no-outline"} ${noBackground && "no-background"} ${
          square && "square"
        } ${untabbable ? "untabbable" : "pointer"}
        ${confirmClassName && confirmationState ? confirmClassName : ""}`}
        style={{
          height: `calc(${sizeString(1)} + ${padding * 2}px + 4px)`,
          maxWidth: `calc(${
            (toggleProps ? (toggleProps.thirdIcon ? 2 : 1) : 0) +
            sizeString(!confirmationState ? 1 : 3)
          } + ${padding * 4}px)`,
          paddingTop:
            toggleProps || (confirm && confirmationState)
              ? "0px"
              : paddingString,
          paddingBottom:
            toggleProps || (confirm && confirmationState)
              ? "0px"
              : paddingString,
          paddingRight:
            toggleProps || (confirm && confirmationState)
              ? "0px"
              : hPaddingString,
          paddingLeft:
            toggleProps || (confirm && confirmationState)
              ? "0px"
              : hPaddingString,
        }}
      >
        {confirmationState && (
          <Icons.Undo
            tabIndex={untabbable ? -1 : 0}
            size={sizeNum}
            onMouseEnter={() => setConfirmHovering(true)}
            onMouseLeave={() => setConfirmHovering(false)}
            onKeyDown={(e) =>
              handlePress(e, () => setConfirmationState(undefined))
            }
            onClick={() => setConfirmationState(undefined)}
            id="confirmation-cancel"
            className={`selectable ${
              confirmHovering
                ? undoConfirmHoverColor || hoverColor
                : undoConfirmColor || color
            } ${firstUntabbable ? "not-allowed" : ""}`}
            style={{ padding: paddingString, borderRadius: "3px 0 0 3px" }}
          />
        )}
        {confirm === "double" && confirmationState === "initial" && (
          <Icons.QuestionCircle
            tabIndex={untabbable ? -1 : 0}
            size={sizeNum}
            onKeyDown={(e) =>
              handlePress(e, () => setConfirmationState(undefined))
            }
            onClick={() => setConfirmationState(undefined)}
            id="confirmation-cancel"
            className="yellow"
            style={{ padding: paddingString }}
          />
        )}
        {confirmationState === "final" && (
          <Icons.ExclamationCircleFill
            tabIndex={untabbable ? -1 : 0}
            size={sizeNum}
            onKeyDown={(e) =>
              handlePress(e, () => setConfirmationState(undefined))
            }
            onClick={() => setConfirmationState(undefined)}
            className={confirmationIconWarningColor || "red"}
            style={{ padding: paddingString }}
          />
        )}
        <Icon {...iconProps} />
        {toggleProps?.secondIcon && (
          <toggleProps.secondIcon
            tabIndex={untabbable ? -1 : 0}
            onClick={handleSecondClick}
            onKeyDown={(e) => handlePress(e, () => handleSecondClick(e))}
            onMouseEnter={() => setSecondHovering(true)}
            onMouseLeave={() => setSecondHovering(false)}
            className={`icon-component selectable ${secondColorClass} 
            ${
              (toggleProps?.selected === "second" &&
                !hovering &&
                !thirdHovering) ||
              (toggleProps && secondHovering)
                ? toggleProps.secondClassNameHover
                  ? toggleProps.secondClassNameHover
                  : toggleProps.selectedClassName
                : ""
            }`}
            size={sizeNum}
            style={{ padding: paddingString }}
          />
        )}
        {toggleProps?.thirdIcon && (
          <toggleProps.thirdIcon
            tabIndex={untabbable ? -1 : 0}
            onClick={handleThirdClick}
            onKeyDown={(e) => handlePress(e, () => handleThirdClick(e))}
            onMouseEnter={() => setThirdHovering(true)}
            onMouseLeave={() => setThirdHovering(false)}
            className={`icon-component selectable ${thirdColorClass} 
            ${toggleProps.thirdUntabbable ? "not-allowed" : ""}
            ${
              (toggleProps?.selected === "third" &&
                !hovering &&
                !secondHovering) ||
              (toggleProps && thirdHovering)
                ? toggleProps.thirdClassNameHover
                  ? toggleProps.thirdClassNameHover
                  : toggleProps.selectedClassName
                : ""
            }`}
            size={sizeNum}
            style={{ padding: paddingString }}
          />
        )}
      </StyledButton>
    );
  }
);

export default IconButton;
