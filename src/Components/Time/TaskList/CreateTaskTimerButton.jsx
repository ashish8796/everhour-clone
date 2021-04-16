import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { startTimer, stopTimer } from "../../../store/time/actions";

export default function CreateTaskTimerButton({ id }) {
  const dispatch = useDispatch();
  const { timer } = useSelector((state) => state.time);
  console.log({ id, status: timer.status });

  const handleStartTimer = () => {
    console.log("Start Timer working");
    const payload = { task: id };
    console.log(payload);
    dispatch(startTimer(payload));
  };

  const handleStopTimer = () => {
    dispatch(stopTimer());
  };

  return (
    <TimerButton
      onClick={timer.status === "stopped" ? handleStartTimer : handleStopTimer}
    >
      <img
        src={
          timer.status === "stopped" ? "/assets/start.svg" : "/assets/stop.svg"
        }
        alt="logo"
      />
    </TimerButton>
  );
}

const TimerButton = styled.button`
  margin-bottom: -5px;
  margin-left: 20px;
`;
