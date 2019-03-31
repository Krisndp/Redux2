const defaultState = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
    { id: 2, en: 'action1', vn: 'hành động', memorized: false, isShow: true },
    { id: 3, en: 'action2', vn: 'hành động', memorized: true, isShow: false },
    { id: 4, en: 'action3', vn: 'hành động', memorized: false, isShow: false },
    { id: 5, en: 'action4', vn: 'hành động', memorized: false, isShow: true },
    { id: 6, en: 'action5', vn: 'hành động', memorized: true, isShow: true },
    { id: 7, en: 'action6', vn: 'hành động', memorized: true, isShow: false },
    { id: 8, en: 'action7', vn: 'hành động', memorized: false, isShow: false },
    { id: 9, en: 'action8', vn: 'hành động', memorized: true, isShow: false },
    { id: 10, en: 'action9', vn: 'hành động', memorized: true, isShow: true },
    { id: 11, en: 'action10', vn: 'hành động', memorized: true, isShow: false },
    { id: 12, en: 'action11', vn: 'hành động', memorized: false, isShow: true },
    { id: 13, en: 'action12', vn: 'hành động', memorized: false, isShow: false },

];

const arrWordsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_MEMORIZED':
            return state.map(e => {
                if (e.id !== action.id) {
                    return e;
                } else {
                    return { ...e, memorized: !e.memorized }
                }
            })
        case 'TOGGLE_SHOW':
            return state.map(e => {
                if (e.id !== action.id) {
                    return e;
                } else {
                    return { ...e, isShow: !e.isShow }
                }
            })

        case 'ADD_WORD':
            return [{
                id: state.length + 1,
                en: action.en,
                vn: action.vn,
                memorized: false,
                isShow: true
            }].concat(state);
        default:
            return state;
    };

}
export default arrWordsReducer;