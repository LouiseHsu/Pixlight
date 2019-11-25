import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './components/app/App.js';
ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);