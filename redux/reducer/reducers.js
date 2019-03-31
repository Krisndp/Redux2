import {combineReducers} from 'redux'
import arrWordsReducer from './arrWordsReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';

const reducers = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer,
});

export default reducers;