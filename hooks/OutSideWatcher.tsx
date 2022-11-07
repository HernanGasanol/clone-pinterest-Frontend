import React, { useEffect, useRef, useState, useMemo } from "react";

export const SwitchCard = () => {
  const [state, setState] = useState({
    stateOne: false,
    stateTwo: false,
  });

  const refOne = useRef(null);
  const refTwo = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handle, true);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, [refOne, refTwo]);

  const handle = (e: any) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setState({ ...state, stateOne: false });
    }

    if (refTwo.current && !refTwo.current.contains(e.target)) {
      console.log("two");

      setState({ ...state, stateTwo: false });
    }
  };

  return { state, setState, refOne, refTwo };
};
