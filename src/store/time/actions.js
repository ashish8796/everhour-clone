import { deleteTimer, postStartTimer } from "../../api/api";
import {
  SET_COMMENT,
  SET_COUNTER,
  SET_CURRENT_PROJECT,
  SET_CURRENT_TASK,
  SET_INTERVAL,
  START_TIMER,
  STOP_TIMER,
} from "./actionTypes";

export const setCurrentProject = (id) => {
  console.log(id);
  return {
    type: SET_CURRENT_PROJECT,
    payload: id,
  };
};

export const setCurrentTask = (id) => {
  console.log(id);
  return {
    type: SET_CURRENT_TASK,
    payload: id,
  };
};

export const startTimer = (payload) => async (dispatch) => {
  try {
    const { data } = await postStartTimer(payload);
    console.log(data);

    dispatch({
      type: START_TIMER,
      payload: data,
    });
    return data.status;
  } catch (error) {
    return error;
  }
};

export const stopTimer = () => async (dispatch) => {
  try {
    const { data } = await deleteTimer();
    console.log(data);

    dispatch({
      type: STOP_TIMER,
      payload: data,
    });
    return data.status;
  } catch (error) {
    return error;
  }
};

export const setCounter = (counter) => {
  return {
    type: SET_COUNTER,
    payload: counter,
  };
};

export const setComment = (comment) => {
  return {
    type: SET_COMMENT,
    payload: comment,
  };
};

export const setIntervalId = (intervalId) => {
  console.log(intervalId);
  return {
    type: SET_INTERVAL,
    payload: intervalId,
  };
};
