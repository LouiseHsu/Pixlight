import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {changeBrushRadius} from "../../../actions/changeBrushRadius";

const BrushRadius = props => {
    const [inputRadius, setInputRadius] = useState(1);

    const handleChange = (val) => {
        setInputRadius(val);
        dispatch(changeBrushRadius(val));
    };

    let dispatch = useDispatch();
    return <>
        <button onClick={() => dispatch(changeBrushRadius(3))}>Change Brush Radius to 3</button>
        <input type = "number" min = "1" onChange={() => handleChange(3)}/>
    </>
};

export default BrushRadius;