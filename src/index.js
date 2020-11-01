import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Posts from "./components/Posts.jsx";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Posts />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
