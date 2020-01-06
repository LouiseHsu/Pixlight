import {store} from './../store';

export const updateCanvasModel = (clickedPixel) => {
    // TODO change to brush DIAMETER instead of radius

    // to make round brushes, maybe calculate distance from center?
    // do we even need round brushes?
    let updatedPixel = [];
    let brushState = store().getState().brushState;

    let startY = clickedPixel.y - brushState.radius + 1;
    let endY = clickedPixel.y + brushState.radius - 1;
    let startX = clickedPixel.x - brushState.radius + 1;
    let endX = clickedPixel.x + brushState.radius - 1;

    for (let x = startX; x <= endX; x++) {
        for (let y = startY; y <= endY; y++) {
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