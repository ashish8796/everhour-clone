import {
  GET_ALL_CLIENTS_FAILURE,
  GET_ALL_CLIENTS_REQUEST,
  GET_ALL_CLIENTS_SUCCESS,
  GET_USERS_PROJECTS_FAILURE,
  GET_USERS_PROJECTS_REQUEST,
  GET_USERS_PROJECTS_SUCCESS,
} from './actionTypes';

const initState = {
  allClients: [],
  projects: [],
  isLoading: false,
  isError: false,
};

export const invoiceReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CLIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_ALL_CLIENTS_SUCCESS: {
      return {
        ...state,
        allClients: payload,
        isLoading: false,
      };
    }
    case GET_ALL_CLIENTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_USERS_PROJECTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_USERS_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: [...state.projects, payload],
        isLoading: false,
      };
    }
    case GET_USERS_PROJECTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
