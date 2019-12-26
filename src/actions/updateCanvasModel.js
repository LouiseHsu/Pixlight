import {store} from './../store';

export const updateCanvasModel = (clickedPixel) => {
    let updatedPixel = [clickedPixel];
    return {
        type: 'UPDATE_CANVAS_MODEL',
        updatedPixels : updatedPixel,
        currBrushColour: store().getState().brushState.colour
    }
};