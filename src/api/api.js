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

export const getData = () => {
  return axios.get("/endPoint");
};

export const postData = () => {
  return axios.post("/endPoint");
};

export const deleteData = () => {
  return axios.delete("/endPoint");
};
