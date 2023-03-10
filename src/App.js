import React, { Suspense } from "react";
import NavBar from "./components/Nav/Nav";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Nav/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/react-store";
import { Provider } from "react-redux";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  catchAllUnhanlesErrors = (promiseRejectionEvent) => {
    alert("Some error occured");
    console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.promiseRejectionEvent);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.promiseRejectionEvent
    );
  }
  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />

          <NavBar sidebar="" />

          <div className="app-content">
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route
                path="/profile/:userId?"
                element={
                  <Suspense fallback={<Preloader />}>
                    <ProfileContainer />
                  </Suspense>
                }
              />
              <Route
                path="dialogs/*"
                element={
                  <Suspense fallback={<Preloader />}>
                    <DialogsContainer />
                  </Suspense>
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={
                  <div>
                    <h1>404 NOT FOUND</h1>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const MainApp = (props) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default MainApp;
