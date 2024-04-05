import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Context/Situation #1
// We are running this file in development andin isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// Context/Situation #2
// We are running this file in develpment or production
export { mount };
