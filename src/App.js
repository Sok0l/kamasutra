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

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <NavBar />

        <div className="app-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile postData={props.postData} />}
            />
            <Route
              path="dialogs/*"
              element={
                <Dialogs
                  dialogsData={props.dialogsData}
                  messages={props.messages}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;