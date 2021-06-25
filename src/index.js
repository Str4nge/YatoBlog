import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// render(WHAT_TO_RENDER, WHERE_TO_RENDER);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// //You cannot two tags adjacent to each other in first parameter, in order to
// //use adjacent JSX elements, you have to wrapp them one enclosing tag (div/span/or any other tag)
