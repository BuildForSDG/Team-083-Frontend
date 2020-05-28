import { combineReducers } from 'redux';
import dashboardReducer from './dashboard_reducer';
import resizeReducer from './resizeReducer';

const rootReducer = combineReducers({ dashboardReducer, resizeReducer });
export default rootReducer;
