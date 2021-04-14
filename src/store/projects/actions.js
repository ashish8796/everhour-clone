import { getAllProjects, getTasksOfProject } from "./../../api/api";
import {
  SET_ALL_PROJECTS,
  SET_PROJECTS_ERROR,
  SET_PROJECTS_LOADING,
  SET_TASKS_OF_PROJECT,
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

export const setTasksOfProject = (project_id) => async (dispatch) => {
  try {
    const { data } = await getTasksOfProject(project_id);

    console.log(data);

    dispatch({ type: SET_TASKS_OF_PROJECT, payload: data });
    return true;
  } catch (error) {
    return error;
  }
};
