import React, {useState} from 'react';
import Pixel from '../pixel/Pixel';
const Canvas = props => {
    const canvasSize = Object.freeze({
        TEST : {width : 2, height : 1},
        SMALL: {width: 50, height: 50},
        MEDIUM : {width: 100, height: 100},
        LARGE : {width: 250, height: 250}
    })

    const [canvasPixels, setCanvasPixels] = useState([]);

    



};