import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './state/reducers';
import "./index.css";
import App from "./components/App";

const rootReducer = combineReducers({
    smurfs: reducers.smurfsReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
