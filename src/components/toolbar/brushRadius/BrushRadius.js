import {useDispatch} from "react-redux";
import React from "react";
import {changeBrushRadius} from "../../../actions/changeBrushRadius";

const BrushRadius = props => {
    let dispatch = useDispatch();
    return  <button onClick={() => dispatch(changeBrushRadius(3))}>Change Brush Radius to 3</button>
};

export default BrushRadius;