import {useDispatch} from "react-redux";
import {changeBrushColour} from "../../../actions/changeBrushColour";
import React from "react";

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const BrushPalette = props => {
    let dispatch = useDispatch();
    return  <button onClick={() => dispatch(changeBrushColour(getRandomColor()))}>Generate Random Brush</button>
};

export default BrushPalette;