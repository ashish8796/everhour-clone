import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Timer() {
  const timerRef = useRef(null);
  const [timer, setTimer] = useState(0);

  const handleStartTimer = () => {
    timer.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleStopTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <TimerCont>
      <StartTimerButton disabled>Start Timer</StartTimerButton>
    </TimerCont>
  );
}

const TimerCont = styled.div``;

const StartTimerButton = styled.button`
  background-color: #09d409;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  opacity: 1;

  &:disabled {
    opacity: 0.8;
  }
`;
