import { loadData, saveData } from '../../utils/localStorage';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionTypes';

const isAuth = loadData('isAuth');
const username = loadData('username');

const initState = {
  isAuth: isAuth ? true : false,
  user: username ? username : '',
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_SUCCESS: {
      console.log('pay', payload);
      const { email } = payload;
      saveData('isAuth', true);
      saveData('username', email);
      return {
        ...state,
        isAuth: true,
        user: username,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case LOGOUT_SUCCESS: {
      saveData('isAuth', false);
      saveData('username', '');
      return {
        ...state,
        isAuth: false,
        user: '',
      };
    }
    default:
      return state;
  }
};
