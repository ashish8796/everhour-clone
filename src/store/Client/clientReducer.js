import {
  CREATE_CLIENT_ERROR,
  CREATE_CLIENT_LOADING,
  CREATE_CLIENT_SUCCESS,
  GET_CLIENT_ERROR,
  GET_CLIENT_LOADING,
  GET_CLIENT_SUCCESS,
  SET_ALL_CLIENTS,
} from "./actionTypes";

const init = {
  allClients: [],
  query: "",
  client: [],
  isLoading: false,
  isError: false,
};

export const clientReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CREATE_CLIENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        client: [...state.client, payload],
      };
    case CREATE_CLIENT_ERROR:
      return {
        ...state,
        isError: true,
      };

    case GET_CLIENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        client: payload,
      };
    case GET_CLIENT_ERROR:
      return {
        ...state,
        isError: true,
      };

    case SET_ALL_CLIENTS: {
      return { ...state, allClients: payload };
    }
    default:
      return state;
  }
};
