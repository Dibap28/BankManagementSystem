import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import loanReducer from "./store/loanReducer";
import registrationReducer from "./store/registrationReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  loanReducer,
  registrationReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Middleware Dispatching", action);
      const result = next(action);
      console.log("Middleware next state", store.getState());
      return result;
    };
  };
};
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
