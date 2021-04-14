import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./home/homeReducer";
import { projectsReducer } from "./projects/projectsReducer";

const rootReducer = combineReducers({ projects: projectsReducer});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store };
