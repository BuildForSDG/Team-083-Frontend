import { combineReducers } from 'redux';
import dashboardReducer from './dashboard_reducer';
import resizeReducer from './resize_reducer';

const rootReducer = combineReducers({ dashboardReducer, resizeReducer });
export default rootReducer;
