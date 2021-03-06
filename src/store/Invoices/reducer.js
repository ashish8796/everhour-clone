import {
  EMPTY_USER_PROJECTS,
  GET_ALL_CLIENTS_FAILURE,
  GET_ALL_CLIENTS_REQUEST,
  GET_ALL_CLIENTS_SUCCESS,
  GET_USERS_PROJECTS_FAILURE,
  GET_USERS_PROJECTS_REQUEST,
  GET_USERS_PROJECTS_SUCCESS,
  SAVED_INVOICE,
  SELECT_DATE,
} from './actionTypes';

const initState = {
  allClients: [],
  projects: [],
  date: '',
  isLoading: false,
  isError: false,
  savedInvoices: [],
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
    case EMPTY_USER_PROJECTS: {
      return {
        ...state,
        projects: [],
      };
    }
    case SELECT_DATE: {
      return {
        ...state,
        date: payload,
      };
    }
    case SAVED_INVOICE: {
      return {
        ...state,
        savedInvoices: [...state.savedInvoices, payload],
      };
    }
    default:
      return state;
  }
};
