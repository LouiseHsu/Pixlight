import {useDispatch, useSelector} from "react-redux";
import {changeBrushColour} from "../../../actions/changeBrushColour";
import {TwitterPicker} from 'react-color'
import "./BrushPalette.css";
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
    let currBrushColour = useSelector(state => state.brushState.colour);

    let handleColourChange = (colour, event) => {
        dispatch(changeBrushColour(colour.hex));
    };

    let dispatch = useDispatch();
    return <>
        <div id = "brush-colour" style={{backgroundColor: currBrushColour}}/>
        < TwitterPicker onChangeComplete = {(c, e) => handleColourChange(c, e)}/>
        {/*<button onClick={() => dispatch(changeBrushColour(getRandomColor()))}>Generate Random Brush</button>*/}
    </>
};

export default BrushPalette;