import React, { useRef, useEffect } from "react";

// https://stackoverflow.com/a/42234988
export function useOutsideAlerter(ref: any, callback: () => any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback && callback();
      }
    }
    document.addEventListener("touchend", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);
    function handleEscape(event: any) {
      if (event.key === "Escape") {
        callback && callback();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}

export default function OutsideAlerter(props: any) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.callback);

  return (
    <div className={`outside-alerter ${props.className}`} ref={wrapperRef}>
      {props.children}
    </div>
  );
}
