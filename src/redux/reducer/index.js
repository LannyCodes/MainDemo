/**
 * Created by LannyCodes on 2019/5/12
 */
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';

export default combineReducers({
    loginReducer,
    homeReducer,
})