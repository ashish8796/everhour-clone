import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setCounter,
  setIntervalId,
  startTimer,
  stopTimer,
} from "../../../store/time/actions";
import { setUserTime } from "../../../store/user/actions";

export default function CreateTaskTimerButton({ id, isTimerButtonVisible }) {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const { timer, counter, currentProjectTaskId } = useSelector(
    (state) => state.time
  );
  const [_, setCount] = useState(Number(counter.seconds));
  const { user } = useSelector((state) => state.user);
  // console.log({ id, status: timer.status });

  const handleStartTimer = async () => {
    console.log(id);
    try {
      const payload = { task: id };

      const seconds = await dispatch(startTimer(payload));
      await dispatch(setUserTime(user.id));
      let interval = setInterval(() => {
        setCount((count) => {
          dispatch(setCounter(count < seconds ? seconds + 1 : count + 1));
          return count < seconds ? seconds + 1 : count + 1;
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
