import {combineReducers} from "redux";
import brushReducer from './brushReducer'
import canvasReducer from "./canvasReducer";

const allReducers = combineReducers({
    brushState : brushReducer,
    canvasState : canvasReducer
});

export default allReducers;