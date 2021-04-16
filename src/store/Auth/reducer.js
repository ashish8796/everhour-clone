import { loadData, saveData } from '../../utils/localStorage';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionTypes';

const isAuth = loadData('isAuth');
const fullName = loadData('username');
const apiKey = loadData('apiKey');
const avatar = loadData('avatar');

const initState = {
  isAuth: isAuth ? true : false,
  fullName: fullName ? fullName : '',
  apiKey: apiKey ? apiKey : '',
  avatar: avatar ? avatar : '',
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
      const { fullName, apiKey, avatar } = payload;
      saveData('isAuth', true);
      saveData('fullName', fullName);
      saveData('apiKey', apiKey);
      saveData('avatar', avatar);
      return {
        ...state,
        isAuth: true,
        fullName: fullName,
        apiKey: apiKey,
        avatar: avatar,
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
      saveData('fullName', '');
      saveData('apiKey', '');
      saveData('avatar', '');
      return {
        ...state,
        isAuth: false,
        avatar: '',
        apiKey: '',
        fullName: '',
      };
    }
    default:
      return state;
  }
};
