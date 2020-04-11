import { combineReducers } from 'redux';
import { clickReducer } from './clickReducer';
import { counterReducer } from './counterReducer';

export default combineReducers({ clickReducer, counterReducer });
