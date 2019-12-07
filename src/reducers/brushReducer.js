let initialState = {
    colour : '#ffffff'
};

const brushReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BRUSH':
            state.colour = action.colour;
            return state;
        default:
            return state
    }
};

export default brushReducer;