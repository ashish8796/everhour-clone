import {
  SET_ALL_SECTION,
  SET_SECTION_ERROR,
  SET_SECTION_LOADING,
  SET_TASKS_OF_PROJECT,
  SET_SPEC_PROJECT_ERROR,
  SET_SPEC_PROJECT_LOADING,
  SET_ALL_SPEC_PROJECT,
  CREATE_SECTION,
  CREATE_TASK
} from "./actionsTypes";

const initState = {
  sections: [],
  isSectionsLoading: false,
  isSectionsError: false,
  tasksOfProject: [],
  project_name: []
};

function sectionsReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_SECTION_LOADING:
      return {
        ...state,
        isSectionsLoading: true,
        isSectionsError: false,
      };

    case SET_SECTION_ERROR:
      return {
        ...state,
        isSectionsLoading: false,
        isSectionsError: true,
      };

    case SET_ALL_SECTION:
      return {
        ...state,
        sections: payload,
        isSectionsLoading: false,
        isSectionsError: false,
      };

    case SET_TASKS_OF_PROJECT: {
      return {
        ...state,
        tasksOfProject: payload,
      };
    }

    case SET_SPEC_PROJECT_LOADING:
      return {
        ...state,
        isProjectsLoading: true,
        isProjectsError: false,
      };

    case SET_SPEC_PROJECT_ERROR:
      return {
        ...state,
        isProjectsLoading: false,
        isProjectsError: true,
      };

    case SET_ALL_SPEC_PROJECT:
      return {
        ...state,
        project_name: payload,
        isProjectsLoading: false,
        isProjectsError: false,
      };
    
    case CREATE_SECTION:
      return {
        ...state,
        sections: payload,
        isSectionsLoading: false,
        isSectionsError: false,
      }
    
    case CREATE_TASK:
      return {
        ...state,
        sections: payload,
        isSectionsLoading: false,
        isSectionsError: false,
      }

    default:
      return state;
  }
}

export { sectionsReducer };
