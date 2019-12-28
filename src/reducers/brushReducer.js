let initialState = {
    colour : '#ffffff',
    radius : 1
};

const brushReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BRUSH_COLOUR':
            state.colour = action.colour;
            return state;
        case 'CHANGE_BRUSH_RADIUS':
            state.radius = action.radius;
            return state;
        default:
            return state
    }
};

export default brushReducer;