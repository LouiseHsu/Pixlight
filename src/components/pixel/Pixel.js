import React, {useState} from 'react';
import './Pixel.css'
import {useDispatch, useSelector} from "react-redux";
import globalMouseState from "../../util/globalMouseState";
import {setCanvasModel} from "../../actions/setCanvasModel";
import {updateCanvasModel} from "../../actions/updateCanvasModel";


const Pixel = React.memo(props => {
    const pixelState = useSelector(state => state.canvasState[props.x - 1][props.y - 1]);
    const dispatch = useDispatch();
    function handleClick () {
        let test = {
            x : props.x,
            y : props.y,
        };
        dispatch(updateCanvasModel([test]));
    }

    const onHover = () => {
        let state = new globalMouseState();
        if (state.mouseState.leftClick) {
            handleClick();
        }
    };

    return <div className = "Pixel" style={{backgroundColor: pixelState}}
                id={props.id}
                onMouseEnter={onHover}
                onMouseDown={handleClick}
            />
}, true);

export default Pixel;