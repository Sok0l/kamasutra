import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
  { id: 1, messege: "Hi, how are you?", count: 15 },
  { id: 2, messege: "It's my first post", count: 30 },
];
let dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Lev" },
  { id: 3, name: "Marina" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is youe it-kamasutra?" },
  { id: 3, message: "Yo" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
