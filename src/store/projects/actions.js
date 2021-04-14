import { getAllProjects } from "./../../api/api";
import {
  SET_ALL_PROJECTS,
  SET_PROJECTS_ERROR,
  SET_PROJECTS_LOADING,
} from "./actionsTypes";

export const setProjectsLoading = () => {
  return {
    type: SET_PROJECTS_LOADING,
  };
};

export const setProjectsError = () => {
  return {
    type: SET_PROJECTS_ERROR,
  };
};

export const setAllProjects = () => async (dispatch) => {
  setProjectsLoading();

  try {
    const { data } = await getAllProjects();
    console.log(data);
    dispatch({
      type: SET_ALL_PROJECTS,
      payload: data,
    });
  } catch (error) {
    dispatch(setProjectsError());
  }
};
