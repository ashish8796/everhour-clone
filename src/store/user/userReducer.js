import { SET_USER, SET_USER_TIME } from "./actionTypes";

const initState = { user: {}, userTime: [] };

function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };

    case SET_USER_TIME:
      return { ...state, userTime: payload };

    default:
      return state;
  }
}

export default userReducer;
