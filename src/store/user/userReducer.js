import { SET_ALL_USERS, SET_USER, SET_USER_TIME } from "./actionTypes";

const initState = { user: {}, userTime: [], allUsers: [] };

function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };

    case SET_USER_TIME:
      return { ...state, userTime: payload };

    case SET_ALL_USERS: {
      return { ...state, allUsers: payload };
    }

    default:
      return state;
  }
}

export default userReducer;
