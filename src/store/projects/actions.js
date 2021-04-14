<<<<<<< HEAD
import { getAllProjects } from "./../../api/api";
import { createProjects } from "./../../api/api";
import {
  CREATE_ALL_PROJECTS,
  CREATE_PROJECTS_ERROR,
  CREATE_PROJECTS_LOADING,
} from "./actionsTypes";

=======
import { getAllProjects, getTasksOfProject } from "./../../api/api";
>>>>>>> d2f5041810822950d8159b4fab55e74887b316f1
import {
  SET_ALL_PROJECTS,
  SET_PROJECTS_ERROR,
  SET_PROJECTS_LOADING,
  SET_TASKS_OF_PROJECT,
} from "./actionsTypes";

export const createProjectsLoading = () => {
  return {
    type: CREATE_PROJECTS_LOADING,
  };
};

export const createProjectsError = () => {
  return {
    type: CREATE_PROJECTS_ERROR,
  };
};

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

export const createAllProjects = (createData) => async (dispatch) => {
  createProjectsLoading();

  try {
    await createProjects(createData);
    const {data} = await getAllProjects();
    console.log(data);
    dispatch({
      type: SET_ALL_PROJECTS,
      payload: data,
    });
  } catch (error) {
    dispatch(createProjectsError());
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
