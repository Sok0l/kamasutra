import { combineReducers, legacy_createStore as createStore } from "redux";
import sidebarReduser from "./sidebar-reduser";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reducer";
import usersReduser from "./users-reduser";
let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
});
let store = createStore(redusers);

window.store = store;

export default store;
