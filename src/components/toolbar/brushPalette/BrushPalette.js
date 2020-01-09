import {useDispatch, useSelector} from "react-redux";
import {changeBrushColour} from "../../../actions/changeBrushColour";
import {TwitterPicker} from 'react-color'
import "./BrushPalette.css";
import React, {useState} from "react";

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
    const [paletteVisibility, setPaletteVisibility] = useState(false);

    let handleColourChange = (colour, event) => {
        dispatch(changeBrushColour(colour.hex));
    };

    let handleClick = () => {
        setPaletteVisibility(!paletteVisibility);
    };

    let dispatch = useDispatch();
    return <>
        <div id = "brush-colour" tabIndex="0" onClick={handleClick} onBlur={handleClick} style={{backgroundColor: currBrushColour}} />
        <div style = {paletteVisibility? {} : {display : 'none'}}>
            < TwitterPicker onChangeComplete = {(c, e) => handleColourChange(c, e)}/>
        </div>
    </>
};

export default BrushPalette;