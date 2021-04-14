import { SET_CURRENT_PROJECT, SET_CURRENT_TASK } from "./actionTypes";

export const setCurrentProject = (currentProject) => {
  console.log(currentProject);
  return {
    type: SET_CURRENT_PROJECT,
    payload: currentProject,
  };
};

export const setCurrentTask = (currentTask) => {
  console.log(currentTask);
  return {
    type: SET_CURRENT_TASK,
    payload: currentTask,
  };
};
