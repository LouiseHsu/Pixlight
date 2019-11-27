export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_BRUSH':
            return {
                colour: action.colour
            };
        default:
            return state
    }
}