import React, { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setCounter,
  setCurrentTask,
  setIntervalId,
  startTimer,
  stopTimer,
} from "../../../store/time/actions";
import { setUserTime } from "./../../../store/user/actions";
import { convertSecIntoTime } from "../../../utils/utility";

export default function Timer({ setInputName }) {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const {
    comment,
    currentProjectId,
    currentProjectTaskId,
    timer,
  } = useSelector((state) => state.time);

  const { seconds, counterInterval } = useSelector(
    (state) => state.time.counter
  );
  const [count, setCount] = useState(Number(seconds));

  const handleStartTimer = async () => {
    try {
      const payload = {
        task: currentProjectTaskId,
        comment,
        userDate: new Date().toISOString().split("T")[0],
      };

      const seconds = await dispatch(startTimer(payload));
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

  const handleStopTimer = async () => {
    clearInterval(counterInterval);
    try {
      await dispatch(stopTimer());
      await dispatch(setUserTime(user.id));
      dispatch(setCurrentTask(""));
      setInputName("task");
      dispatch(setCounter(0));
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(counterInterval);
    };
  }, []);

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
            {convertSecIntoTime(seconds)}
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
