import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setTimerStatus,
  startTimer,
  stopTimer,
} from "../../../store/time/actions";

export default function Timer() {
  const dispatch = useDispatch();
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isError, setIsError] = useState(false);
  const {
    comment,
    currentProjectId,
    currentProjectTaskId,
    timer,
  } = useSelector((state) => state.time);

  const handleStartTimer = async () => {
    try {
      const payload = {
        task: currentProjectTaskId,
        comment,
        userDate: new Date().toISOString().split("T")[0],
      };

      const status = await dispatch(startTimer(payload));
      dispatch(setTimerStatus(status));

      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleStopTimer = async () => {
    try {
      const status = await dispatch(stopTimer());
      dispatch(setTimerStatus(status));
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTime(0);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <TimerCont className="flex">
      <StartTimerButton
        disabled={!(currentProjectId && currentProjectTaskId)}
        onClick={
          timer.status === "stopped" ? handleStartTimer : handleStopTimer
        }
      >
        {timer.status === "active" ? `|| ${time}` : "Start Timer"}
      </StartTimerButton>
      {/* 
      <TimeTag>
        <p>{timer}</p>
      </TimeTag> */}
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
    opacity: 0.5;
    cursor: auto;
  }
`;

const TimeTag = styled.div``;
