import { createProjects, getAllProjects, getTasksOfProject, deleteProjects, getSectionOfProject } from "./../../api/api";

import {
  SET_ALL_SECTION,
  SET_SECTION_ERROR,
  SET_SECTION_LOADING,
  SET_TASKS_OF_PROJECT,
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
