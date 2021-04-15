import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./home/homeReducer";
import { projectsReducer } from "./projects/projectsReducer";
import timeReducer from "./time/timeReducer";
import {teamReducer} from "./Team/teamReducer"

const rootReducer = combineReducers({
  projects: projectsReducer,
  time: timeReducer,
  team:teamReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store };
