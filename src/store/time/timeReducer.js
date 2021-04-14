import { SET_CURRENT_PROJECT, SET_CURRENT_TASK } from "./actionTypes";

const initState = {
  currentProjectId: "",
  currentProjectTaskId: "",
  currentProject: {},
  currentTask: {},
};

function timeReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_CURRENT_PROJECT: {
      return { ...state, currentProject: payload };
    }

    case SET_CURRENT_TASK: {
      return { ...state, currentTask: payload };
    }

    default:
      return state;
  }
}

export default timeReducer;
