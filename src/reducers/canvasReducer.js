let initialState = {
    pixels: [],
    height: 0,
    width: 0
};

const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CANVAS_MODEL':
            state.pixels = action.pixelArray;
            state.width = action.width;
            state.height = action.height;
            return state;
        case 'UPDATE_CANVAS_MODEL':
            let nextPixels = state.pixels;
            let pixels = action.updatedPixels;
            for (let i = 0; i < pixels.length; i++) {
                nextPixels[pixels[i].x][pixels[i].y] = action.currBrushColour
            }
            return state;
        default:
            return state
    }
};

export default canvasReducer;