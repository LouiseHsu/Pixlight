import React, {useState} from 'react';
import Pixel from '../pixel/Pixel';

const canvasSize = Object.freeze({
    TEST: {width: 2, height: 1},
    SMALL: {width: 50, height: 50},
    MEDIUM: {width: 100, height: 100},
    LARGE: {width: 250, height: 250}
});
const Canvas = props => {

    const [canvasPixels, setCanvasPixels] = useState([]);

    return (<div className = "Canvas"><Pixel/><Pixel/><Pixel/><Pixel/><Pixel/><Pixel/></div>);
};

export default Canvas;