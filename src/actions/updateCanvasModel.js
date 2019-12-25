export const updateCanvasModel = (updatedPixels) => {
    return {
        type: 'UPDATE_CANVAS_MODEL',
        updatedPixels : updatedPixels
    }
};