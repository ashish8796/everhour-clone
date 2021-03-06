import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home/homeReducer';
import { projectsReducer } from './projects/projectsReducer';
import timeReducer from './time/timeReducer';
import { teamReducer } from './Team/teamReducer';
import { sectionsReducer } from './task/sectionReducer';
import userReducer from './user/userReducer';
import { authReducer } from './Auth/reducer';
import { invoiceReducer } from './Invoices/reducer';
import { clientReducer } from './Client/clientReducer';


const rootReducer = combineReducers({
  projects: projectsReducer,
  time: timeReducer,
  team: teamReducer,
  sections: sectionsReducer,
  user: userReducer,
  team: teamReducer,
  auth: authReducer,
  invoice: invoiceReducer,
  client:clientReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store };
