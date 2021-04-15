import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionTypes';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginUser = (payload) => (dispatch) => {
  const { email, password } = payload;
  console.log(email, password);
  dispatch(loginRequest());
  if (email === 'admin' && password === 'admin') {
    dispatch(loginSuccess(payload));
  } else {
    dispatch(loginFailure());
  }
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
