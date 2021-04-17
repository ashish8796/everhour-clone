import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setIntervalId } from "../../../store/time/actions";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  const dispatch = useDispatch();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      dispatch(setIntervalId(id));
      return () => clearInterval(id);
    }
  }, [delay]);
}

export { useInterval };
