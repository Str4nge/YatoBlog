// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// // render(WHAT_TO_RENDER, WHERE_TO_RENDER);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// //You cannot two tags adjacent to each other in first parameter, in order to
// //use adjacent JSX elements, you have to wrapp them one enclosing tag (div/span/or any other tag)

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

const title = "Welcome to the yato blog";
const link = "https://noragami.fandom.com/wiki/Yato";

function MyInfo() {
  return (
    <header className="App-header">
      <img src="./yato.png" alt="Yato-logo" className="logo" />
      <h1>Noragami Yato</h1>
      <h3>
        <a href={link}>{title}</a>
      </h3>{" "}
      {/*Use of dynamic data in JSP*/}
      <p>
        This is the land of the rising sun, your desecration shall not be
        allowed. Hear me! I am the god Yato, I now lay the waste with the seki
        and expel thy vast defilement.{" "}
      </p>
      <h5>Regalias</h5>
      <ul type="disc">
        <li>Tomone | Hanki</li>
        <li>Yukine | Sekki</li>
        <li>Nora | Hiki</li>
      </ul>
    </header>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyInfo />
  </React.StrictMode>,
  document.getElementById("root")
);
