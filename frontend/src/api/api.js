import Axios from 'axios';
import { loadData } from '../utils/localStorage';

const apiKey = loadData('apiKey');
//const apiKey = "9dfc-a39a-8fefa7-73b1bb-328e1bc4";

console.log(apiKey);

const axios = Axios.create({
  baseURL: 'https://api.everhour.com',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  },
});

export const getAllProjects = () => {
  return axios.get('/projects');
};

export const getSpecificProject = (id) => {
  let spec_url = '/projects/' + id;
  return axios.get(spec_url);
};

export const deleteProjects = (id) => {
  let delete_url = '/projects/' + id;
  return axios.delete(delete_url);
};

export const createProjects = (createData) => {
  console.log(createData);
  return axios.post('/projects', {
    name: createData.name,
    type: createData.type,
  });
};

export const getTasksOfProject = (project_id) => {
  return axios.get(`projects/${project_id}/tasks`);
};

export const postStartTimer = (payload) => {
  return axios.post(`/timers`, payload);
};

export const deleteTimer = () => {
  return axios.delete('/timers/current');
};

export const getTimer = () => {
  return axios.get('/team/timers');
};

export const getTimeSheet = () => {
  return axios.get('/timesheets?weekId=2115');
};

export const getSectionOfProject = (project_id) => {
  return axios.get(`projects/${project_id}/sections`);
};

export const createSectionProject = (id, createData) => {
  console.log(id, createData);
  let createSectionURL = '/projects/' + id + '/sections';
  return axios.post(createSectionURL, {
    name: createData,
    position: 1,
    status: 'open',
  });
};

export const createTasks = (id, sec_id, createData) => {
  console.log(id, createData);
  let createTasksURL = '/projects/' + id + '/tasks';
  console.log(createTasksURL);
  return axios.post(createTasksURL, {
    name: createData,
    section: sec_id,
    // labels: [
    //   high,
    //   bug
    // ],
    position: 1,
    dueOn: '2018-03-05',
    status: 'open',
  });
};

export const getUser = () => {
  return axios.get('/users/me');
};

export const getUserTime = (id) => {
  return axios.get(`/users/${id}/time`);
};

export const createClient = (payload) => {
  return axios.post('/clients', payload);
};

export const getAllclients = () => {
  return axios.get('/clients');
};

export const getUsersProjects = (projectId) => {
  return axios.get(`/projects/${projectId}`);
};

export const createInvoice = (clientId) => {
  return axios.get(`clients/${clientId}/invoices}`);
};

export const getAllClients = () => {
  return axios.get('/clients');
};

export const getAllUsers = () => {
  return axios.get('/team/users');
};

export const getClient = () => {
  return axios.get('/clients');
};

const axios2 = Axios.create({
  baseURL: 'https://json-random-exam12.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postApi = (id, name) => {
  const payload = {
    id,
    name,
    projectName: '',
    projectId: '',
    budget: '',
    createdDate: '',
  };
  return axios2.post('/everhour', payload);
};

export const putMockDataApi = (id, payload) => {
  //console.log(id, name);
  let urlPutApi = '/everhour/' + id;
  return axios2.put(urlPutApi, payload);
};

export const postExpenses = (payload) => {
  let urlPostExpenses = '/expenses';
  return axios2.post(urlPostExpenses, payload);
};

export const setExpenses = (id, payload) => {
  let urlPostExpenses = '/expenses/' + id;
  return axios2.put(urlPostExpenses, payload);
};

export const getExpenses = () => {
  let urlGetExpenses = '/expenses/' + 1;
  return axios2.get(urlGetExpenses);
};

export const getMockDataApi = (id) => {
  return axios2.get(`/everhour/${id}`);
};

export const getProjectMockApi = (id) => {
  return axios2.get(`/everhour/${id}`);
};
