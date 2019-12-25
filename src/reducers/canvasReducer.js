let initialState = [];

const canvasReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CANVAS_MODEL':
            state = action.pixelArray;
            return state;
        case 'UPDATE_CANVAS_MODEL':
            let nextState = JSON.parse(JSON.stringify(state));
            let pixels = action.updatedPixels;
            for (let i = 0; i < pixels.length; i ++) {
                nextState[pixels[i].x][pixels[i].y] = [pixels[i].colour]
            }
            // use selector to get colour here instead?
            return nextState;
        default:
            return state
    }
};

export default canvasReducer;