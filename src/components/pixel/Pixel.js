import React from 'react';
import './Pixel.css'
import {useDispatch, useSelector} from "react-redux";
import globalMouseState from "../../util/globalMouseState";
import {updateCanvasModel} from "../../actions/updateCanvasModel";


const Pixel = React.memo(props => {
    const pixelState = useSelector(state => state.canvasState[props.x][props.y]);
    const dispatch = useDispatch();
    function handleClick () {
        let clickedPixel = {
            x : props.x,
            y : props.y,
        };
        dispatch(updateCanvasModel(clickedPixel));
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