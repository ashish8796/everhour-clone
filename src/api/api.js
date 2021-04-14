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

export const deleteProjects = (id) => {
  let delete_url = "/projects/" + id;
  return axios.delete(delete_url);
};

export const createProjects = (createData) => {
  console.log(createData);
  return axios.post("/projects",{
    name: createData.name,
    type: createData.type
  });
}

export const getTasksOfProject = (project_id) => {
  return axios.get(`projects/${project_id}/tasks`);
};

export const getData = () => {
  return axios.get("/endPoint");
};

export const postData = () => {
  return axios.post("/endPoint");
};

export const deleteData = () => {
  return axios.delete("/endPoint");
};

export const getTimer = () => {
  return axios.get("/team/timers");
};

export const getTimeSheet = () => {
  return axios.get("/timecards?from=2020-10-01&to=2020-11-01");
};