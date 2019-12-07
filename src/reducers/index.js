import brushReducer from './brushReducer'
import {combineReducers} from "redux";

const allReducers = combineReducers({
    brushState : brushReducer
});

export default allReducers;