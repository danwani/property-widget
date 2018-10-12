import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const initialState = {
  currentlyOpen: 'details',
  currentProperty: {
    isInCrm: false,
    image:
      "https://www.endlesssummerresort.com.au/assets/cache/endless-summer-1120269w-2000x1000pcy.jpg",
    address: "Unit 1 9-21 Frank St Coolum Beach 4573",
    plan: "L5, RP720278",
    type: "Apartment",
    area: 200,
    lastSaleValue: 670000,
    lastSaleDate: new Date("02/04/2017"),
    title: "",
    comments: ""
  }
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
