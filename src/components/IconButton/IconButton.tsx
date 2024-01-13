import React, {
  ForwardedRef,
  StyleHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { IconSize, IconColors } from "./consts";
import { IconType } from "react-icons";
import { getIconSizeNum } from "./consts";
import { Icons } from "../IconButton/consts";
import { handlePress } from "./consts";
import { isMobile } from "react-device-detect";
import { ITooltip } from "react-tooltip";
import classnames from "classnames";

const StyledButton = styled.button`
  background-color: #484a4d;
  border-radius: var(--br-icon);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex-shrink: 0;
  // flex-wrap: wrap;
  max-width: 100%;

  .icon {
    border-radius: var(--br-icon);
  }
  &.no-bg {
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
    &.bha:active {
      * {
        opacity: 0.8;
      }
    }
  }

  svg:not(:focus-visible) {
    border: none !important;
    outline: none !important;
  }

  span {
    text-wrap: nowrap;
  }
`;

export const getTooltipProps = (small?: boolean): ITooltip => ({
  delayShow: 1500,
  place: "right",
  style: {
    padding: small ? "1px 5px" : "5px 10px",
    background: "var(--dark-hombre)",
    color: "var(--off-white)",
    zIndex: 100,
  },
  border: "1px solid var(--light-grey)",
  opacity: 1,
  closeEvents: {
    blur: true,
    mouseleave: true,
    click: true,
    dblclick: true,
    mouseup: true,
  },
  globalCloseEvents: {
    scroll: true,
  },
});

export type IconButtonProps = {
  untabbable?: boolean;
  className?: string;
  noOutline?: boolean;
  noBackground?: boolean;
  leftText?: string;
  rightText?: string;
  onClick?: (e: React.MouseEvent) => any;
  icon: IconType;
  size?: IconSize;
  square?: boolean;
  color?: IconColors;
  textColor?: IconColors;
  disabledColor?: IconColors;
  hoverColor?: IconColors;
  undoConfirmColor?: IconColors;
  undoConfirmHoverColor?: IconColors;
  confirmationIconWarningColor?: IconColors;
  hoverClassName?: string;
  confirmClassName?: string;
  forceHoverState?: boolean;
  padding?: number;
  exactSize?: number;
  confirm?: "single" | "double";
  resetConfirmationAt?: Date;
  firstUntabbable?: boolean;
  toggleProps?: {
    secondIcon: IconType;
    onSecondClick?: (arg: any) => any;
    secondColor?: IconColors;
    secondHoverColor?: IconColors;
    secondClassNameHover?: string;
    secondTooltip?: string;
    selectedColor?: IconColors;
    selectedClassName?: string;
    selectedHoverColor?: IconColors;
    selected?: "first" | "second" | "third";
    thirdIcon?: IconType;
    onThirdClick?: (arg: any) => any;
    thirdColor?: IconColors;
    thirdClassNameHover?: string;
    thirdHoverColor?: IconColors;
    thirdTooltip?: string;
    secondUntabbable?: boolean;
    thirdUntabbable?: boolean;
  };
  tooltip?: string;
  smallTooltip?: boolean;
  singleAction?: boolean;
  noClickPropagation?: boolean;
  width?: string;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      forceHoverState,
      hoverColor,
      color = "black",
      textColor,
      disabledColor,
      undoConfirmColor,
      undoConfirmHoverColor,
      className,
      hoverClassName,
      noBackground,
      noOutline,
      square,
      leftText,
      rightText,
      onClick,
      icon: Icon,
      size,
      padding = 1,
      exactSize,
      confirm,
      resetConfirmationAt,
      toggleProps,
      untabbable,
      firstUntabbable,
      confirmClassName,
      confirmationIconWarningColor,
      tooltip,
      smallTooltip,
      singleAction,
      noClickPropagation,
      width,
    } = props;

    const sizeNum = exactSize ? exactSize : size ? getIconSizeNum(size) : 12;
    const paddingString = `${padding}px`;

    const [hovering, setHovering] = useState(false);
    const [secondHovering, setSecondHovering] = useState(false);
    const [thirdHovering, setThirdHovering] = useState(false);
    const [confirmHovering, setConfirmHovering] = useState(false);
    const [confirmationState, setConfirmationState] = useState<
      "initial" | "final"
    >();
    const [confirmationResetAt, setConfirmationResetAt] = useState<Date>(
      new Date()
    );
    const numIcons = confirmationState
      ? 3
      : toggleProps
      ? toggleProps.thirdIcon
        ? 3
        : 2
      : 1;

    const buttonHandlesAction = singleAction || numIcons === 1;

    const singleHovering =
      (singleAction || numIcons === 1) &&
      (hovering || secondHovering || thirdHovering);

    const colorClass =
      untabbable || firstUntabbable
        ? disabledColor || color
        : toggleProps && toggleProps.selected === "first"
        ? hovering || singleHovering
          ? toggleProps.selectedHoverColor || hoverColor || color
          : toggleProps.selectedColor || color
        : hovering || forceHoverState || singleHovering
        ? hoverColor || color
        : color;

    const secondColorClass = singleHovering
      ? colorClass
      : untabbable || toggleProps?.secondUntabbable
      ? disabledColor || toggleProps?.secondColor || color
      : !toggleProps
      ? undefined
      : toggleProps.selected === "second"
      ? secondHovering
        ? toggleProps.selectedHoverColor || hoverColor || color
        : toggleProps.selectedColor || color
      : secondHovering
      ? toggleProps.secondHoverColor
        ? toggleProps.secondHoverColor
        : hoverColor
      : toggleProps.secondColor
      ? toggleProps.secondColor
      : color;

    const thirdColorClass = singleHovering
      ? colorClass
      : untabbable || toggleProps?.thirdUntabbable
      ? disabledColor || color
      : !toggleProps
      ? undefined
      : toggleProps.selected === "third"
      ? thirdHovering
        ? toggleProps.selectedHoverColor || hoverColor || color
        : toggleProps.selectedColor || color
      : thirdHovering
      ? toggleProps.thirdHoverColor
        ? toggleProps.thirdHoverColor
        : hoverColor
      : toggleProps.thirdColor
      ? toggleProps.thirdColor
      : color;

    const textColorClass =
      singleHovering || hovering ? hoverColor : textColor || color;

    const handleClick = useCallback(
      (e: React.MouseEvent) => {
        setHovering(false);
        if ((!confirm || confirmationState === "final") && onClick) {
          onClick(e);
          setConfirmationState(undefined);
        } else if (
          (confirm === "single" && !confirmationState) ||
          (confirmationState === "initial" && confirm === "double")
        ) {
          noClickPropagation && e.stopPropagation();
          setConfirmationState("final");
        } else if (confirm === "double" && !confirmationState) {
          noClickPropagation && e.stopPropagation();
          setConfirmationState("initial");
        }
      },
      [confirm, confirmationState, onClick, noClickPropagation]
    );

    const handleSecondClick = (e: any) => {
      if (!singleAction) {
        setSecondHovering(false);
        toggleProps?.onSecondClick && toggleProps.onSecondClick(e);
      }
    };

    const handleThirdClick = (e: any) => {
      if (!singleAction) {
        setThirdHovering(false);
        toggleProps?.onThirdClick && toggleProps.onThirdClick(e);
      }
    };

    const handleMouseEnter = useCallback(() => {
      if (!isMobile) setHovering(true);
    }, []);
    const handleMouseLeave = useCallback(() => {
      setHovering(false);
    }, []);

    const iconStyle: any = useMemo(
      () => ({
        padding: paddingString,
        boxSizing: "border-box",
      }),
      [paddingString]
    );

    const iconProps: StyleHTMLAttributes<SVGElement> = useMemo(
      () => ({
        tabIndex: !untabbable && !buttonHandlesAction ? 0 : -1,
        onClick: buttonHandlesAction ? undefined : handleClick,
        onMouseEnter: buttonHandlesAction ? undefined : handleMouseEnter,
        onMouseLeave: buttonHandlesAction ? undefined : handleMouseLeave,
        className: classnames(
          `icon`,
          !untabbable && !buttonHandlesAction && hovering && hoverClassName,
          colorClass,
          (toggleProps?.selected === "first" &&
            !secondHovering &&
            !thirdHovering) ||
            (toggleProps && hovering)
            ? toggleProps.selectedClassName
            : ""
        ),
        size: sizeNum,
        style: iconStyle,
      }),
      [
        colorClass,
        handleClick,
        hovering,
        secondHovering,
        sizeNum,
        thirdHovering,
        toggleProps,
        untabbable,
        handleMouseEnter,
        handleMouseLeave,
        hoverClassName,
        buttonHandlesAction,
        iconStyle,
      ]
    );

    useEffect(() => {
      if (resetConfirmationAt && resetConfirmationAt > confirmationResetAt) {
        setConfirmationResetAt(new Date());
        setConfirmationState(undefined);
      }
    }, [resetConfirmationAt, confirmationResetAt]);

    const tooltipId = smallTooltip ? "small-tooltip" : "tooltip";

    return (
      <StyledButton
        type="button"
        tabIndex={buttonHandlesAction && !untabbable ? 0 : -1}
        onKeyDown={handlePress(handleClick)}
        onClick={buttonHandlesAction ? handleClick : undefined}
        onMouseEnter={buttonHandlesAction ? handleMouseEnter : undefined}
        onMouseLeave={buttonHandlesAction ? handleMouseLeave : undefined}
        ref={ref}
        className={classnames(
          `icon-button`,
          className,
          hovering && buttonHandlesAction && hoverClassName,
          noOutline && "no-outline",
          noBackground && "no-bg",
          square && "square",
          untabbable ? "untabbable" : "pointer",
          confirmClassName && confirmationState && confirmClassName,
          buttonHandlesAction && "bha"
        )}
        style={{
          height: "fit-content",
          width: width || "fit-content",
          maxWidth: "400px",
          padding: `2px`,
        }}
        data-tooltip-id={singleAction ? tooltipId : undefined}
        data-tooltip-content={singleAction ? tooltip : undefined}
        data-tooltip-hidden={!hovering}
      >
        {leftText && (
          <span
            data-tooltip-id={tooltipId}
            data-tooltip-content={tooltip}
            data-tooltip-hidden={!hovering}
            className={classnames(textColorClass, `h-m-15`, "relative")}
            style={{
              paddingLeft: paddingString,
              paddingRight: paddingString,
            }}
            onClick={buttonHandlesAction ? undefined : handleClick}
            onMouseEnter={buttonHandlesAction ? undefined : handleMouseEnter}
            onMouseLeave={buttonHandlesAction ? undefined : handleMouseLeave}
          >
            {leftText}
          </span>
        )}
        {confirm && (
          <>
            <Icons.Undo
              tabIndex={untabbable ? -1 : 0}
              size={sizeNum}
              onMouseEnter={() => setConfirmHovering(true)}
              onMouseLeave={() => setConfirmHovering(false)}
              onKeyDown={handlePress(e => {
                noClickPropagation && e.stopPropagation();
                setConfirmationState(undefined);
              })}
              onClick={e => {
                noClickPropagation && e.stopPropagation();
                setConfirmationState(undefined);
              }}
              id="confirmation-cancel"
              className={classnames(
                !confirmationState && "hidden",

                confirmHovering
                  ? undoConfirmHoverColor || hoverColor
                  : undoConfirmColor || color
              )}
              style={iconStyle}
            />
            <Icons.QuestionStop
              tabIndex={untabbable ? -1 : 0}
              size={sizeNum}
              onKeyDown={handlePress(() => setConfirmationState(undefined))}
              onClick={() => setConfirmationState(undefined)}
              id="confirmation-cancel"
              className={
                confirm === "double" && confirmationState === "initial"
                  ? "yellow"
                  : "hidden"
              }
              style={iconStyle}
            />
            <Icons.ExclamationStop
              tabIndex={untabbable ? -1 : 0}
              size={sizeNum}
              onKeyDown={handlePress(() => setConfirmationState(undefined))}
              onClick={() => setConfirmationState(undefined)}
              className={
                confirmationState === "final"
                  ? confirmationIconWarningColor || "red"
                  : "hidden"
              }
              style={iconStyle}
            />
          </>
        )}
        <Icon
          {...iconProps}
          data-tooltip-id={tooltipId}
          data-tooltip-content={tooltip}
          data-tooltip-hidden={!hovering}
          key="main-icon"
        />
        {rightText && (
          <span
            data-tooltip-id={tooltipId}
            data-tooltip-content={tooltip}
            data-tooltip-hidden={!hovering}
            className={classnames(textColorClass, "h-m-15", "relative")}
            style={{
              paddingLeft: paddingString,
              paddingRight: paddingString,
            }}
            onClick={buttonHandlesAction ? undefined : handleClick}
            onMouseEnter={buttonHandlesAction ? undefined : handleMouseEnter}
            onMouseLeave={buttonHandlesAction ? undefined : handleMouseLeave}
          >
            {rightText}
          </span>
        )}
        {toggleProps?.secondIcon && (
          <toggleProps.secondIcon
            tabIndex={untabbable || toggleProps.secondUntabbable ? -1 : 0}
            onClick={handleSecondClick}
            onKeyDown={handlePress(handleSecondClick)}
            onMouseEnter={() => setSecondHovering(!isMobile && true)}
            onMouseLeave={() => setSecondHovering(false)}
            className={classnames(
              `icon`,

              secondColorClass,
              (toggleProps?.selected === "second" &&
                !hovering &&
                !thirdHovering) ||
                (toggleProps && secondHovering)
                ? toggleProps.secondClassNameHover
                  ? toggleProps.secondClassNameHover
                  : toggleProps.selectedClassName
                : ""
            )}
            size={sizeNum}
            style={iconStyle}
            data-tooltip-id={tooltipId + "-2"}
            data-tooltip-content={toggleProps.secondTooltip}
            data-tooltip-hidden={!secondHovering}
          />
        )}
        {toggleProps?.thirdIcon && (
          <toggleProps.thirdIcon
            tabIndex={untabbable || toggleProps.thirdUntabbable ? -1 : 0}
            onClick={handleThirdClick}
            onKeyDown={handlePress(handleThirdClick)}
            onMouseEnter={() => setThirdHovering(!isMobile && true)}
            onMouseLeave={() => setThirdHovering(false)}
            className={classnames(
              "icon",

              thirdColorClass,
              (toggleProps?.selected === "third" &&
                !hovering &&
                !secondHovering) ||
                (toggleProps && thirdHovering)
                ? toggleProps.thirdClassNameHover
                  ? toggleProps.thirdClassNameHover
                  : toggleProps.selectedClassName
                : ""
            )}
            size={sizeNum}
            style={iconStyle}
            data-tooltip-id={tooltipId}
            data-tooltip-content={toggleProps.thirdTooltip}
            data-tooltip-hidden={!thirdHovering}
          />
        )}
      </StyledButton>
    );
  }
);

export default IconButton;
