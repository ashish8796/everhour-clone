import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setCurrentTask,
  startTimer,
  stopTimer,
} from "../../../store/time/actions";
import { convertSecIntoTime } from "../../../utils/utility";

export default function Timer({ setInputName }) {
  const dispatch = useDispatch();
  const timerRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const {
    comment,
    currentProjectId,
    currentProjectTaskId,
    timer,
  } = useSelector((state) => state.time);

  const [time, setTime] = useState(timer.value);

  console.log({ time });

  const handleStartTimer = async () => {
    try {
      const payload = {
        task: currentProjectTaskId,
        comment,
        userDate: new Date().toISOString().split("T")[0],
      };

      await dispatch(startTimer(payload));
      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleStopTimer = async () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    try {
      await dispatch(stopTimer());
      dispatch(setCurrentTask(""));
      setInputName("task");
      setTime(0);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (timer.status) {
      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [timer.status]);

  return (
    <TimerCont className="flex">
      <TimerButton
        disabled={!(currentProjectId && currentProjectTaskId)}
        status={timer.status}
        onClick={
          timer.status === "stopped" ? handleStartTimer : handleStopTimer
        }
      >
        {timer.status === "active" ? (
          <span style={{ fontSize: "18px" }}>
            <img
              style={{ marginRight: "35px", width: "10px" }}
              src="/assets/pause.svg"
              alt="pause"
            />
            {convertSecIntoTime(time)}
          </span>
        ) : (
          "START TIMER"
        )}
      </TimerButton>
    </TimerCont>
  );
}

const TimerCont = styled.div``;

const TimerButton = styled.button`
  display: inline-block;
  background-color: ${(props) =>
    props.status === "active" ? "#e8585a" : "#24be6a"};
  color: #fff;
  font-size: 13px;
  opacity: 1;
  height: 55px;
  min-width: 140px;
  padding: 14px 0;
  border-radius: 2px;
  width: ${(props) => (props.status === "active" ? "fit-content" : "110px")};
  box-shadow: ${(props) =>
    props.status === "active" ? "0 3px 10px 0 rgb(238 92 87 / 51%)" : "none"};
  border-color: ${(props) =>
    props.status === "active" ? "#e8585a" : "#24be6a"};

  &:hover {
    background-color: ${(props) => props.status === "active" && "#f32e32"};
  }
  &:disabled {
    opacity: 0.65;
    cursor: auto;
  }
`;

const TimeTag = styled.div``;
