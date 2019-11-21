import React, {useState, useEffect} from 'react';
import Pixel from '../pixel/Pixel';
import './Canvas.css';

const canvasSizeEnum = Object.freeze({
    TEST: {width: 2, height: 1},
    SMALL: {width: 50, height: 50},
    MEDIUM: {width: 100, height: 100},
    LARGE: {width: 250, height: 250}
});
const Canvas = props => {

    const [canvasSize, setCanvasSize] = useState('Medium');
    const [canvasPixels, setCanvasPixels] = useState([]);

    const handleSize = (size) => {
        setCanvasSize(size);
        let pixelNum;

        switch (canvasSize) {
            case 'Large':
                pixelNum = canvasSizeEnum.LARGE.width * canvasSizeEnum.LARGE.height;
                break;
            case 'Medium':
                pixelNum = canvasSizeEnum.MEDIUM.width * canvasSizeEnum.MEDIUM.height;
                break;
            default:
                pixelNum = 1;
        }

        let pixels = [];
        for (let i = 0; i < pixelNum; i++) {
            pixels.push(<Pixel key={i} />)
        }

        setCanvasPixels(pixels);
    };

    useEffect(() => {
        handleSize(canvasSize);
    }, [props.size]);

    return (
        <div className="Canvas">
            {canvasPixels}
        </div>);
};



export default Canvas;