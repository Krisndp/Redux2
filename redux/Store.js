import {createStore} from 'redux';

const defaultState = {
    arrWords: [
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
  
    ],
    filterStatus: 'MEMORIZED',
    isAdding: false,
  };
  //reducer=> action
  const reducers = (state = defaultState, action) => {
    switch (action.type) {
      case 'FILTER_SHOW_ALL':
        return { ...state, filterStatus: 'SHOW_ALL' };
      case 'FILTER_MEMORIZED':
        return { ...state, filterStatus: 'MEMORIZED' };
      case 'FILTER_NEED_PRACTICE':
        return { ...state, filterStatus: 'NEED_PRACTICE' };
      case 'TOGGLE_MEMORIZED':
        return {
          ...state,
          arrWords: state.arrWords.map(e => {
            if (e.id !== action.id) {
              return e;
            } else {
              return { ...e, memorized: !e.memorized }
            }
          })
        };
        case 'TOGGLE_SHOW':
        return {
          ...state,
          arrWords: state.arrWords.map(e => {
            if (e.id !== action.id) {
              return e;
            } else {
              return { ...e, isShow: !e.isShow }
            }
          })
        };
      case 'TOGGLE_ISADDING':
        return {
          ...state,
          isAdding: !state.isAdding,
        };
      case 'ADD_WORD':
        return {
          ...state,
          arrWords: [{
            id: state.arrWords.length + 1,
            en: action.en,
            vn: action.vn,
            memorized: false,
            isShow: true
          }].concat(state.arrWords)
        };
      default:
        return state;
    }
  };
  //CreatStore
  const store = createStore(reducers);
  //Provider
  export default store;