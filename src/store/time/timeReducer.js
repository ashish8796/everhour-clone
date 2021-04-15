import {
  SET_CURRENT_PROJECT,
  SET_CURRENT_TASK,
  SET_TIMER_ACTIVE,
} from "./actionTypes";

const initState = {
  currentProjectId: "",
  currentProjectTaskId: "",
  timer: {
    timerStatus: "stopped",
  },
};

function timeReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_CURRENT_PROJECT: {
      return { ...state, currentProjectId: payload };
    }

    case SET_CURRENT_TASK: {
      return { ...state, currentProjectTaskId: payload };
    }

    case SET_TIMER_ACTIVE: {
      return { ...state, timer: { ...state.timer, timerStatus: "active" } };
    }

    case SET_CURRENT_TASK: {
      return { ...state, timer: { ...state.timer, timerStatus: "stopped" } };
    }

    default:
      return state;
  }
}

export default timeReducer;
