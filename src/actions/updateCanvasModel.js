import {store} from './../store';

export const updateCanvasModel = (clickedPixel) => {
    // TODO change to brush DIAMETER instead of radius

    // to make round brushes, maybe calculate distance from center?
    // do we even need round brushes?
    // dies if brush goes past border
    let updatedPixel = [];
    let brushState = store().getState().brushState;
    let canvasState = store().getState().canvasState;

    let startY = Math.max(clickedPixel.y - brushState.radius + 1, 0 );
    let endY = Math.min(clickedPixel.y + brushState.radius - 1, canvasState.width - 1);
    let startX = Math.max(clickedPixel.x - brushState.radius + 1, 0 );
    let endX = Math.min(clickedPixel.x + brushState.radius - 1, canvasState.width - 1);

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