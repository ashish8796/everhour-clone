import {
  SET_ALL_PROJECTS,
  SET_PROJECTS_ERROR,
  SET_PROJECTS_LOADING,
  SET_TASKS_OF_PROJECT,
} from "./actionsTypes";

const initState = {
  projects: [],
  isProjectsLoading: false,
  isProjectsError: false,
  tasksOfProject: [],
};

function projectsReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_PROJECTS_LOADING:
      return {
        ...state,
        isProjectsLoading: true,
        isProjectsError: false,
      };

    case SET_PROJECTS_ERROR:
      return {
        ...state,
        isProjectsLoading: false,
        isProjectsError: true,
      };

    case SET_ALL_PROJECTS:
      return {
        ...state,
        projects: payload,
        isProjectsLoading: false,
        isProjectsError: false,
      };

    case SET_TASKS_OF_PROJECT: {
      return {
        ...state,
        tasksOfProject: payload,
      };
    }

    default:
      return state;
  }
}

export { projectsReducer };
