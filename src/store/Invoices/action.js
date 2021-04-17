import { getAllclients, getUsersProjects } from '../../api/api';
import {
  CREATE_INVOICE_FAILURE,
  CREATE_INVOICE_REQUEST,
  CREATE_INVOICE_SUCCESS,
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
export const getAllclientsDetails = () => (dispatch) => {
  dispatch(getAllClientsRequest());
  return getAllclients()
    .then((res) => {
      console.log(res.data);
      const filterClientsData = res.data.map((client) => {
        return { id: client.id, name: client.name, projects: client.projects };
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
export const getUsersProjectsDetails = (projectId) => (dispatch) => {
  console.log('proidi', projectId);
  dispatch(getUsersProjectsRequest());
  return getUsersProjects(projectId)
    .then((res) => {
      dispatch(getUsersProjectsSuccess(res.data.name));
    })
    .catch((err) => dispatch(getUsersProjectsFailure()));
};

// Create Invoice
export const createInvoiceRequest = () => {
  return {
    type: CREATE_INVOICE_REQUEST,
  };
};

export const createInvoiceSuccess = (payload) => {
  return {
    type: CREATE_INVOICE_SUCCESS,
    payload,
  };
};

export const createInvoiceFailure = () => {
  return {
    type: CREATE_INVOICE_FAILURE,
  };
};
