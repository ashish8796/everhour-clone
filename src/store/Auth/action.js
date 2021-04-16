import axios from 'axios';
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
  const { userEmail, userPassword } = payload;
  dispatch(loginRequest());
  axios
    .get('https://json-server-mocker-neeraj.herokuapp.com/fakeAuth')
    .then((res) => {
      const currentUser = res.data.filter(({ email, password }) => {
        return userEmail === email && userPassword === password;
      });
      if (currentUser.length === 0) {
        return dispatch(loginFailure());
      }
      const { fullName, apiKey, avatar } = currentUser[0];
      dispatch(loginSuccess({ fullName, apiKey, avatar }));
    })
    .catch((err) => dispatch(loginFailure()));
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
