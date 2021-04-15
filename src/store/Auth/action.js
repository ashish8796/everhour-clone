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
  console.log(userEmail, userPassword);
  dispatch(loginRequest());
  axios
    .get('https://json-server-mocker-neeraj.herokuapp.com/fakeAuth')
    .then((res) => {
      console.log(res.data);
      const currentUser = res.data.filter(({ email, password }) => {
        return userEmail === email && userPassword === password;
      });
      if (currentUser === undefined) {
        return dispatch(loginFailure());
      }
      const { fullName, apiKey } = currentUser;
      dispatch(loginSuccess({ fullName, apiKey }));
    })
    .catch((err) => dispatch(loginFailure()));
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
