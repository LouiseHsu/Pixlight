const mouseReducer =  (state = false, action) => {
    if (action.type === 'MOUSE_CLICK') {
        return !state;
    } else {
        return state
    }
};

export default mouseReducer;