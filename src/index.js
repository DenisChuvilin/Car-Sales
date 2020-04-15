import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

import 'bulma/css/bulma.css';
import './styles.scss';
import {reducer} from "./reducers/reducer"
//1 create redux store and connect it to our react app
const store = createStore(reducer);
console.log(store.getState());


const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store = {store}><App /></Provider>, rootElement);
