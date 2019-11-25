import React, {useState, useEffect} from 'react';
import Pixel from '../pixel/Pixel';
import './Canvas.css';

const canvasSizeEnum = Object.freeze({
    TEST: {width: 5, height: 5},
    SMALL: {width: 50, height: 50},
    MEDIUM: {width: 100, height: 100},
    LARGE: {width: 250, height: 250}
});
const Canvas = props => {

    const [canvasSize, setCanvasSize] = useState(props.size);
    const [canvasPixels, setCanvasPixels] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [brushColour, setBrushColour] = useState(props.brushColour);

    const handleMouseDown = () => {
        setClicked(true);
    }

    const handleMouseUp = () => {
        setClicked(false);
    }

    const handleSize = () => {
        let pixelNum;

        switch (canvasSize) {
            case 'Large':
                pixelNum = canvasSizeEnum.LARGE.width * canvasSizeEnum.LARGE.height;
                break;
            case 'Medium':
                pixelNum = canvasSizeEnum.MEDIUM.width * canvasSizeEnum.MEDIUM.height;
                break;
            case 'Small':
                pixelNum = canvasSizeEnum.SMALL.width * canvasSizeEnum.SMALL.height;
                break;
            case 'Test':
                pixelNum = canvasSizeEnum.TEST.width * canvasSizeEnum.TEST.height;
                break;
            default:
                pixelNum = 1;
        }

        let pixels = [];
        for (let i = 0; i < pixelNum; i++) {
            pixels.push(<Pixel key={i}
                               brushColour={brushColour}
                               clicked = {clicked}/>)
        }

        setCanvasPixels(pixels);
    };

    useEffect(() => {
        handleSize();
    }, [canvasSize]);

    useEffect(() => {
        setBrushColour(props.brushColour);
        handleSize();
    }, [props.brushColour]);

    useEffect(() => {
        setClicked(clicked)
    }, [clicked]);

    return (
        <div className="Canvas"
             onMouseUp = {handleMouseDown}
             onMouseDown = {handleMouseUp}>
            {canvasPixels}
        </div>);
};



export default Canvas;