export const setCanvasModel = (canvasState) => {
    return {
        type: 'SET_CANVAS_MODEL',
        pixelArray : canvasState.pixels,
        height: canvasState.height,
        width: canvasState.width
    }
};