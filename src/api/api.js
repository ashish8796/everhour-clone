import Axios from "axios";

const axios = Axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json",
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
