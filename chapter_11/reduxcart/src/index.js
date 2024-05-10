import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
let destination = document.querySelector("#container");
// Create a store with createStore and takes cartReducer as an argument
let store = createStore(cartReducer);
ReactDOM.render(
    // use the provider component as a prop
    <Provider store={store}>
        <App />
    </Provider>,
    destination
);