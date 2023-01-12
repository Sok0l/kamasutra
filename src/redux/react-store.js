import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import sidebarReduser from "./sidebar-reduser";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reducer";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reducer";
import thunk from "redux-thunk";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
  auth: authReduser,
});
let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;
