import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import sidebarReduser from "./sidebar-reduser";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reducer";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reducer";
import appReduser from "./app-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)));

export default store;
