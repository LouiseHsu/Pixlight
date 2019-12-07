import brushReducer from './brushReducer'
import {combineReducers} from "redux";
import mouseReducer from "./mouseReducer";

const allReducers = combineReducers({
    brushState : brushReducer,
    mouseState : mouseReducer
});

export default allReducers;