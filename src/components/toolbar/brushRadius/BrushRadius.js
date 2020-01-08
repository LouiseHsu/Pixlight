import {useDispatch} from "react-redux";
import React from "react";
import {changeBrushRadius} from "../../../actions/changeBrushRadius";

const BrushRadius = props => {

    let handleChange = (val) => {
        // dispatch(changeBrushRadius(3));
        dispatch(changeBrushRadius(parseInt(val)));
    };

    let dispatch = useDispatch();
    return <>
        <button onClick={() => dispatch(changeBrushRadius(3))}>Change Brush Radius to 3</button>
        <input type = "number" min = "1" onChange={(e) => handleChange(e.target.value)}/>
    </>
};

export default BrushRadius;