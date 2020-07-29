import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routes";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
}

export default App;
