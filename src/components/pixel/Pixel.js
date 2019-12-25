import React, {useState} from 'react';
import './Pixel.css'
import {useDispatch, useSelector} from "react-redux";
import globalMouseState from "../../util/globalMouseState";
import {setCanvasModel} from "../../actions/setCanvasModel";
import {updateCanvasModel} from "../../actions/updateCanvasModel";


const Pixel = React.memo(props => {
    const [colour, setColour] = useState('#000000');
    const test = useSelector(state => state.canvasState[props.x - 1][props.y - 1]);
    const currCanvas = useSelector(state => state.canvasState);
    const currBrushColour = useSelector(state => state.brushState.colour);
    const dispatch = useDispatch();

    // off by 1 error
    function handleClick () {
        let test = {
            x : props.x,
            y : props.y,
            colour : currBrushColour
        };
        dispatch(updateCanvasModel([test]));
    }

    const onHover = () => {
        let state = new globalMouseState();
        if (state.mouseState.leftClick) {
            handleClick();
        }
    };

    return <div className = "Pixel" style={{backgroundColor: test}}
                id={props.id}
                onMouseEnter={onHover}
                onMouseDown={handleClick}
            />
}, true);

export default Pixel;