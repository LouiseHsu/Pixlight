let initialState = [];

const canvasReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CANVAS_MODEL':
            state = action.pixelArray;
            return state;
        default:
            return state
    }
};

export default canvasReducer;