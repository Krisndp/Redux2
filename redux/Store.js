import { createStore } from 'redux';
import reducers from './reducer/reducers'


//CreatStore
const store = createStore(reducers);
//Provider
export default store;
// const defaultState = {

//     filterStatus: 'MEMORIZED',
//     isAdding: false,
//   };
//   //reducer=> action
//   const reducers = (state = defaultState, action) => {
//     switch (action.type) {
//       case 'FILTER_SHOW_ALL':
//         return { ...state, filterStatus: 'SHOW_ALL' };
//       case 'FILTER_MEMORIZED':
//         return { ...state, filterStatus: 'MEMORIZED' };
//       case 'FILTER_NEED_PRACTICE':
//         return { ...state, filterStatus: 'NEED_PRACTICE' };
//       case 'TOGGLE_MEMORIZED':
//         return {
//           ...state,
//           arrWords: state.arrWords.map(e => {
//             if (e.id !== action.id) {
//               return e;
//             } else {
//               return { ...e, memorized: !e.memorized }
//             }
//           })
//         };
//         case 'TOGGLE_SHOW':
//         return {
//           ...state,
//           arrWords: state.arrWords.map(e => {
//             if (e.id !== action.id) {
//               return e;
//             } else {
//               return { ...e, isShow: !e.isShow }
//             }
//           })
//         };
//       case 'TOGGLE_ISADDING':
//         return {
//           ...state,
//           isAdding: !state.isAdding,
//         };
//       case 'ADD_WORD':
//         return {
//           ...state,
//           arrWords: [{
//             id: state.arrWords.length + 1,
//             en: action.en,
//             vn: action.vn,
//             memorized: false,
//             isShow: true
//           }].concat(state.arrWords)
//         };
//       default:
//         return state;
//     }
//  };





