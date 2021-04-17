import {
  SET_COMMENT,
  SET_COUNTER,
  SET_CURRENT_PROJECT,
  SET_CURRENT_TASK,
  SET_INTERVAL,
  SET_TIMER_STATUS,
  START_TIMER,
  STOP_TIMER,
} from "./actionTypes";

const initState = {
  currentProjectId: "",
  currentProjectTaskId: "",
  comment: "",
  currentTask: {},
  counter: {
    seconds: 0,
    counterInterval: "",
  },
  timer: {
    status: "stopped",
    value: 0,
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

    case SET_TIMER_STATUS: {
      return { ...state, timer: { ...state.timer, status: payload } };
    }

    case SET_COMMENT: {
      return { ...state, comment: payload };
    }

    case START_TIMER: {
      return {
        ...state,
        currentProjectId: payload.task.projects[0],
        currentProjectTaskId: payload.task.id,
        currentTask: payload,
        counter: {
          ...state.counter,
          seconds: payload.today,
        },
        timer: {
          status: payload.status,
          value: payload.today,
        },
      };
    }

    case STOP_TIMER: {
      return {
        ...state,
        currentProjectTaskId: "",
        timer: { status: payload.status, value: 0 },
      };
    }

    case SET_COUNTER: {
      return { ...state, counter: { ...state.counter, seconds: payload } };
    }

    case SET_INTERVAL: {
      return {
        ...state,
        counter: { ...state.counter, counterInterval: payload },
      };
    }

    default:
      return state;
  }
}

export default timeReducer;
