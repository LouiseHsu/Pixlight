const mouseReducer =  (state = false, action) => {
    if (action.type === 'MOUSE_CLICK') {
        // console.log(!state);
        return !state;
    } else {
        return state
    }
};

export default mouseReducer;