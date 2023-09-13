import { useEffect, useRef, useState } from "react";

function useOpacityOnMount(props: {
  ms?: number;
  transitions: number;
  delay?: number;
}) {
  const { ms = 500, transitions, delay = 1 } = props;

  const [, setRerenderAt] = useState(new Date());

  const intervalRef = useRef(0);
  const opacitiesRef = useRef(Array.from(Array(transitions)).map(() => 0));

  useEffect(() => {
    let opacityInterval: NodeJS.Timeout;
    const delayTimeout = setTimeout(() => {
      opacityInterval = setInterval(() => {
        if (opacitiesRef.current[intervalRef.current] === 0) {
          opacitiesRef.current[intervalRef.current] = 1;
          opacitiesRef.current = [...opacitiesRef.current];
          intervalRef.current++;
          setRerenderAt(new Date());
        }
      }, ms);
    }, delay);

    return () => {
      clearInterval(opacityInterval);
      clearTimeout(delayTimeout);
    };
  }, [ms, transitions, delay]);

  return { opacities: opacitiesRef.current };
}

export default useOpacityOnMount;
