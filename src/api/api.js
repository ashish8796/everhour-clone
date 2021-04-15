import Axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

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
export const getUser = () => {
  return axios.get("/users/me");
};

export const getUserTime = (id) => {
  return axios.get(`/users/${id}/time`);
};
