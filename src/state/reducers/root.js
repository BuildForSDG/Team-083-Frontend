import { combineReducers } from 'redux';
import dashboard from './dashboard';
import resize from './resize';
import auth from './auth';

const rootReducer = combineReducers({ dashboard, resize, auth });
export default rootReducer;
