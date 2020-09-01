/**
 * Store creation
 */

import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

// import rootReducer from '../reducers/rootReducers';


const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        () => {},
        composeEnhancers(
        	applyMiddleware(...middleWare)
    	)
    );
    return store;
};
