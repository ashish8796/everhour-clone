import { createClient, getAllClients } from "../../api/api";
import {
  CREATE_CLIENT_ERROR,
  CREATE_CLIENT_LOADING,
  CREATE_CLIENT_SUCCESS,
  SET_ALL_CLIENTS,
} from "./actionTypes";

const createClientLoading = () => {
  return {
    type: CREATE_CLIENT_LOADING,
  };
};

const createClientSuccess = (payload) => {
  return {
    type: CREATE_CLIENT_SUCCESS,
    payload,
  };
};

const createClientFailure = () => {
  return {
    type: CREATE_CLIENT_ERROR,
  };
};

const setAllClients = () => async (dispatch) => {
  try {
    const { data } = await getAllClients();
    dispatch({ type: SET_ALL_CLIENTS, payload: data });
  } catch (error) {}
};

const createClientData = (payload) => (dispatch) => {
  dispatch(createClientLoading());

  return createClient(payload)
    .then((res) => dispatch(createClientSuccess(res.data)))
    .catch((err) => dispatch(createClientFailure()));
};

export { createClientData, setAllClients };
