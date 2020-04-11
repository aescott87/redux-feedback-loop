import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Bring in Redux Logger
import logger from 'redux-logger';
import { HashRouter as Router } from 'react-router-dom';
// Bring in Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Reducer to store feedback state
const feedback = (state = {feeling: 0, understanding: 0, support: 0, comments: ''}, action) => {
    console.log('Action is', action);
    console.log('State is', state);
    if (action.type === 'ADD_FEEDBACK') {
        return {...state, ...action.payload}
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger) //Add our middleware logger
);

ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
