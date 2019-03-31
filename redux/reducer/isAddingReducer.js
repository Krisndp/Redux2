const isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_ISADDING':
            return !state
        default:
            return state;
    }

}
export default isAddingReducer;