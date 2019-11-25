import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let brush = {
  color: '#ffffff',
  size: 1
};

export default function configureStore(initialState = brush) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}