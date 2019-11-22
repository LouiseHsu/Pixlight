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

    let {brushColour} = props;

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
                               brushColour={brushColour}/>)
        }

        setCanvasPixels(pixels);
    };

    useEffect(() => {
        handleSize();
    }, [canvasSize]);

    useEffect(() => {
        handleSize();
    }, [props.brushColour]);

    return (
        <div className="Canvas">
            {canvasPixels}
        </div>);
};



export default Canvas;