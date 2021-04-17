import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setCounter,
  setIntervalId,
  startTimer,
  stopTimer,
} from "../../../store/time/actions";

export default function CreateTaskTimerButton({ id, isTimerButtonVisible }) {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const { timer, counter, currentProjectTaskId } = useSelector(
    (state) => state.time
  );
  const [_, setCount] = useState(counter.seconds);
  console.log({ id, status: timer.status });

  const handleStartTimer = async () => {
    try {
      const payload = { task: id };

      await dispatch(startTimer(payload));
      let interval = setInterval(() => {
        setCount((count) => {
          dispatch(setCounter(count + 1));
          return count + 1;
        });
      }, 1000);
      dispatch(setIntervalId(interval));
    } catch (error) {
      setIsError(true);
    }
  };

  const handleStopTimer = () => {
    dispatch(stopTimer());
    clearInterval(counter.counterInterval);
  };

  return (
    <HandleTimerButton
      onClick={timer.status === "stopped" ? handleStartTimer : handleStopTimer}
    >
      <img
        src={
          id !== currentProjectTaskId ? "/assets/start.svg" : "/assets/stop.svg"
        }
        alt="logo"
      />
    </HandleTimerButton>
  );
}

const HandleTimerButton = styled.button`
  margin-bottom: -5px;
  margin-left: 20px;
`;
