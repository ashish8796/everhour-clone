import {
  SET_ALL_SECTION,
  SET_SECTION_ERROR,
  SET_SECTION_LOADING,
  SET_TASKS_OF_PROJECT,
} from "./actionsTypes";

const initState = {
  sections: [],
  isSectionsLoading: false,
  isSectionsError: false,
  tasksOfProject: [],
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

    default:
      return state;
  }
}

export { sectionsReducer };
