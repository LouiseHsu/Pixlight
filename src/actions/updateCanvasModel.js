import {store} from './../store';

export const updateCanvasModel = (updatedPixels) => {
    return {
        type: 'UPDATE_CANVAS_MODEL',
        updatedPixels : updatedPixels,
        currBrushColour: store().getState().brushState.colour
    }
};