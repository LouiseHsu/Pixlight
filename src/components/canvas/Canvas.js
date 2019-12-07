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
    };

    const handleMouseUp = () => {
        setClicked(false);
    };

    const getDimensions = () => {
        let total;
        let width;
        let height;
        switch (canvasSize) {
            case 'Large':
                width = canvasSizeEnum.LARGE.width;
                height = canvasSizeEnum.LARGE.height;
                total = canvasSizeEnum.LARGE.width * canvasSizeEnum.LARGE.height;
                break;
            case 'Medium':
                width = canvasSizeEnum.MEDIUM.width;
                height = canvasSizeEnum.MEDIUM.height;
                total = canvasSizeEnum.MEDIUM.width * canvasSizeEnum.MEDIUM.height;
                break;
            case 'Small':
                width = canvasSizeEnum.SMALL.width;
                height = canvasSizeEnum.SMALL.height;
                total = canvasSizeEnum.SMALL.width * canvasSizeEnum.SMALL.height;
                break;
            default:
                total = 1;
        }

        return {
            total, width, height
        };
    };

    const handleSize = () => {
        let dimensions = getDimensions();
        let pixelWidth = dimensions.width;

        let pixels = [];

        for (let x = 0; x < dimensions.width; x++) {
            for (let y = 0; y < dimensions.height; y++) {
                pixels.push(<Pixel key={x + " " + y}
                                   brushColour={brushColour}
                                   clicked={clicked}/>)
            }
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
             onMouseUp={handleMouseDown}
             onMouseDown={handleMouseUp}>
            {canvasPixels}
        </div>);

    // handle click in canvas instead?
};

export default Canvas;