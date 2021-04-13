import Axios from "axios";

const apiKey = env.process.REACT_APP_API_KEY;

console.log(apiKey);

const axios = Axios.create({
  baseURL: "https://api.everhour.com",
  headers: {
    "content-type": "application/json",
    "X-Api-Key": apiKey,
  },
});

export const getData = () => {
  return axios.get("/endPoint");
};

export const postData = () => {
  return axios.post("/endPoint");
};

export const deleteData = () => {
  return axios.delete("/endPoint");
};
