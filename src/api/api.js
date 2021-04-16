import Axios from "axios";
import { loadData } from "../utils/localStorage";

const apiKey= loadData("apiKey");

console.log(apiKey);

const axios = Axios.create({
  baseURL: "https://api.everhour.com",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  },
});

export const getAllProjects = () => {
  return axios.get("/projects");
};

export const getSpecificProject = (id) => {
  let spec_url = "/projects/" + id;
  return axios.get(spec_url);
};

export const deleteProjects = (id) => {
  let delete_url = "/projects/" + id;
  return axios.delete(delete_url);
};

export const createProjects = (createData) => {
  console.log(createData);
  return axios.post("/projects", {
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
  return axios.delete("/timers/current");
};

export const getTimer = () => {
  return axios.get("/team/timers");
};

export const getTimeSheet = () => {
  return axios.get("/timecards?from=2020-10-01&to=2020-11-01");
};

export const getSectionOfProject = (project_id) => {
  return axios.get(`projects/${project_id}/sections`);
};

export const createSectionProject = (id, createData) => {
  console.log(id, createData);
  let createSectionURL = "/projects/"+id+"/sections";
  return axios.post(createSectionURL, {
    name: createData,
    position: 1,
    status: "open"
  });
};

export const getUser = () => {
  return axios.get("/users/me");
};

export const getUserTime = (id) => {
  return axios.get(`/users/${id}/time`);
};
