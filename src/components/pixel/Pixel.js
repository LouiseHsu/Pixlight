import React, {useState, useEffect} from 'react';
import './Pixel.css'
import {useSelector} from "react-redux";

const Pixel = props => {
    const [colour, setColour] = useState('#000000');
    const [brushColourState, setBrushColour] = useState(props.brushColour);
    const [isHovered, setHovered] = useState(false);
    const [isClicked, setClicked] = useState(props.clicked);
    const currBrushColour = useSelector(state => state.brushState.colour);


    function handleClick (e) {
        setColour(currBrushColour);
        // console.log(useSelector(state => state));
        console.log(currBrushColour);
    }

    const onHover = () => {
        if (isClicked) {
            handleClick();
        }
    };

    return <div className = "Pixel" style={{backgroundColor: colour}}
                key = {props.key}
                onMouseEnter={onHover}
                onMouseDown={handleClick}
            />


};

export default Pixel;