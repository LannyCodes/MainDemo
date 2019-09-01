/**
 * Created by LannyCodes on 2019/5/12
 */
// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'//immutable的combineReducers
import loginReducer from './loginReducer';
import {homeListData} from './homeReducer';
import {communityNum} from './communityReducer';

export default combineReducers({
    loginReducer,
    homeListData,
    communityNum,
})