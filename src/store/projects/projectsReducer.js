import {
  SET_ALL_PROJECTS,
  SET_PROJECTS_ERROR,
  SET_PROJECTS_LOADING,
} from "./actionsTypes";

const initState = {
  projects: [],
  isProjectsLoading: false,
  isProjectsError: false,
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
        isProjectsLoading: true,
        isProjectsError: false,
      };

    default:
      return state;
  }
}

export { projectsReducer };
