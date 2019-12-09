import React, {useState, useEffect} from 'react';
import './Pixel.css'
import {useSelector} from "react-redux";

const Pixel = React.memo(props => {
    const [colour, setColour] = useState('#000000');
    const isClicked = useSelector(state => state.mouseState);
    const currBrushColour = useSelector(state => state.brushState.colour);

    function handleClick () {
        setColour(currBrushColour);
    }

    const onHover = () => {
        if (isClicked) {
            handleClick();
        }
    };

    return <div className = "Pixel" style={{backgroundColor: colour}}
                id={props.id}
                onMouseEnter={onHover}
                onMouseDown={handleClick}
            />
}, true);

export default Pixel;