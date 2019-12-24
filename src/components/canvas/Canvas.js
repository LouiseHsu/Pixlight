import React, {useState, useEffect} from 'react';
import Pixel from '../pixel/Pixel';
import './Canvas.css';
import {useDispatch} from "react-redux";
import {updateCanvasModel} from "../../actions/updateCanvasModel";

const canvasSizeEnum = Object.freeze({
    TEST: {width: 5, height: 5},
    SMALL: {width: 50, height: 50},
    MEDIUM: {width: 100, height: 100},
    LARGE: {width: 250, height: 250}
});

const Canvas = props => {

    const [canvasSize, setCanvasSize] = useState(props.size);
    const [canvasPixels, setCanvasPixels] = useState([]);
    const dispatch = useDispatch();

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

        let pixels = [];
        for (let x = 1; x <= dimensions.width; x++) {
            let pixelRow = [];
            for (let y = 1; y <= dimensions.height; y++) {

                pixelRow.push(<Pixel key = {x + " " + y}
                                     id = {x + " " + y}
                                     x = {x}
                                     y = {y}/>)
            }
            pixels.push(pixelRow);
        }

        setCanvasPixels(pixels);
        dispatch(updateCanvasModel(pixels));
    };

    useEffect(() => {
        handleSize();
    }, [canvasSize]);

    return (
        <div className="Canvas">
            {canvasPixels}
        </div>);
};

// export default Canvas;
export default React.memo(Canvas, false);