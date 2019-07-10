import { combineReducers } from 'redux';
import randomReducer from './randomReducer';
import todoReducer from './todoReducer';

 export default combineReducers({ todoReducer, randomReducer });
