import {store} from './../store';

export const updateCanvasModel = (clickedPixel) => {
    let updatedPixel = [];
    let brushState = store().getState().brushState;

    let startY = clickedPixel.y - brushState.radius;
    let endY = clickedPixel.y + brushState.radius;
    let startX = clickedPixel.x - brushState.radius;
    let endX = clickedPixel.x + brushState.radius;

    for (let x = startX; x < endX; x++) {
        for (let y = startY; y < endY; y++) {
            updatedPixel.push(
                {
                    x,
                    y
                }
            )
        }
    }
    return {
        type: 'UPDATE_CANVAS_MODEL',
        updatedPixels: updatedPixel,
        currBrushColour: brushState.colour
    }
};