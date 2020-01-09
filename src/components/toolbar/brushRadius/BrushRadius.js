import {useDispatch} from "react-redux";
import React from "react";
import {changeBrushRadius} from "../../../actions/changeBrushRadius";

const BrushRadius = props => {

    let handleChange = (val) => {
        dispatch(changeBrushRadius(parseInt(val)));
    };

    let dispatch = useDispatch();
    return <>
        <div>
        <p>Brush Size:</p>
        <input type = "number" min = "1" max = "10" defaultValue={1} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    </>
};

export default BrushRadius;