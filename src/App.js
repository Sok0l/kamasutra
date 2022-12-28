import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Nav/Friends/Friends";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <NavBar sidebar="" />

        <div className="app-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  postData={props.state.profilePage.postData}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="dialogs/*"
              element={
                <Dialogs
                  dialogsData={props.state.dialogsPage.dialogsData}
                  messages={props.state.dialogsPage.messages}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
