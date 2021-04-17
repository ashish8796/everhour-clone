import axios from 'axios';
import {
  GET_ALL_CLIENTS_FAILURE,
  GET_ALL_CLIENTS_REQUEST,
  GET_ALL_CLIENTS_SUCCESS,
  GET_USERS_PROJECTS_FAILURE,
  GET_USERS_PROJECTS_REQUEST,
  GET_USERS_PROJECTS_SUCCESS,
} from './actionTypes';

// Clients
export const getAllClientsRequest = () => {
  return {
    type: GET_ALL_CLIENTS_REQUEST,
  };
};

export const getAllClientsSuccess = (payload) => {
  return {
    type: GET_ALL_CLIENTS_SUCCESS,
    payload,
  };
};

export const getAllClientsFailure = () => {
  return {
    type: GET_ALL_CLIENTS_FAILURE,
  };
};

// request to get all clients
export const getAllclients = () => (dispatch) => {
  dispatch(getAllClientsRequest());
  axios
    .get('https://api.everhour.com/clients', {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'd453-9b4e-6882aa-723609-5c9540a0',
      },
    })
    .then((res) => {
      const filterClientsData = res.data.map((client) => {
        return { id: client.id, name: client.name };
      });
      dispatch(getAllClientsSuccess(filterClientsData));
    })
    .catch((err) => dispatch(getAllClientsFailure()));
};

// Projects
export const getUsersProjectsRequest = () => {
  return {
    type: GET_USERS_PROJECTS_REQUEST,
  };
};

export const getUsersProjectsSuccess = (payload) => {
  return {
    type: GET_USERS_PROJECTS_SUCCESS,
    payload,
  };
};

export const getUsersProjectsFailure = () => {
  return {
    type: GET_USERS_PROJECTS_FAILURE,
  };
};

// request to get projects of that clients
export const getUsersProjects = () => (dispatch) => {
  dispatch(getUsersProjectsRequest());
  axios
    .get('https://api.everhour.com/clients', {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'd453-9b4e-6882aa-723609-5c9540a0',
      },
    })
    .then((res) => {
      const filterProjectsData = res.data.map((client) => {
        return { id: client.id, name: client.name };
      });
      dispatch(getUsersProjectsSuccess(filterProjectsData));
    })
    .catch((err) => dispatch(getUsersProjectsFailure()));
};
