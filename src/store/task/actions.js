import { createProjects, getAllProjects, getTasksOfProject, deleteProjects, getSectionOfProject, getSpecificProject, createSectionProject, createTasks } from "./../../api/api";

import {
  SET_ALL_SECTION,
  SET_ALL_SPEC_PROJECT,
  SET_SECTION_ERROR,
  SET_SECTION_LOADING,
  SET_TASKS_OF_PROJECT,
  SET_SPEC_PROJECT_ERROR,
  SET_SPEC_PROJECT_LOADING,
  CREATE_SECTION,
  CREATE_SECTION_ERROR,
  CREATE_SECTION_LOADING
} from "./actionsTypes";

export const setSectionsLoading = () => {
  return {
    type: SET_SECTION_LOADING,
  };
};

export const setSectionsError = () => {
  return {
    type: SET_SECTION_ERROR,
  };
};

export const createSectionsLoading = () => {
  return {
    type: CREATE_SECTION_LOADING,
  };
};

export const createSectionsError = () => {
  return {
    type: CREATE_SECTION_ERROR,
  };
};

export const setSpecProjectLoading = () => {
  return {
    type: SET_SPEC_PROJECT_LOADING,
  };
};

export const setSpecProjectsError = () => {
  return {
    type: SET_SPEC_PROJECT_ERROR,
  };
};

export const setSpecProjects = (id) => async (dispatch) => {

  try {
    const { data } = await getSpecificProject(id);
    console.log(data);
    dispatch({
      type: SET_ALL_SPEC_PROJECT,
      payload: data,
    });
  } catch (error) {
    dispatch(setSpecProjectsError());
  }
};

export const setAllSections = (project_id) => async (dispatch) => {
  // setSectionsLoading();

  try {
    const { data } = await getSectionOfProject(project_id);
    //console.log(data);
    dispatch({
      type: SET_ALL_SECTION,
      payload: data,
    });
  } catch (error) {
    dispatch(setSectionsError());
  }
};

export const setTasksOfProject = (project_id) => async (dispatch) => {
  try {
    const { data } = await getTasksOfProject(project_id);

    //console.log(data);

    dispatch({ type: SET_TASKS_OF_PROJECT, payload: data });
    return true;
  } catch (error) {
    return error;
  }
};

export const createSection = (id,createData) => async (dispatch) => {

  try {
    await createSectionProject(id,createData);
    const {data} = await getSectionOfProject(id);
    console.log(data);
    dispatch({
      type: SET_ALL_SECTION,
      payload: data,
    });
  } catch (error) {
    dispatch(setSectionsError());
  }
};

export const createTask = (id, sec_id, createData) => async (dispatch) => {

  try {
    await createTasks(id, sec_id, createData);
    const {data} = await getTasksOfProject(id);
    console.log(data);
    dispatch({
      type: SET_TASKS_OF_PROJECT,
      payload: data,
    });
  }catch (error) {
    return error;
  }
};