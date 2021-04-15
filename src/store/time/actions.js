import {
  SET_COMMENT,
  SET_CURRENT_PROJECT,
  SET_CURRENT_TASK,
  SET_TIMER_ACTIVE,
  SET_TIMER_STOPPED,
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

export const setTimerActive = () => {
  return {
    type: SET_TIMER_ACTIVE,
  };
};

export const setTimerStopped = () => {
  return {
    type: SET_TIMER_STOPPED,
  };
};

export const setComment = (comment) => {
  return {
    type: SET_COMMENT,
    payload: comment,
  };
};
