/**
 * Created by LannyCodes on 2019/5/12
 */

import ActionType from '../actionTypes';
import {combineReducers} from 'redux';

//初始值
function homeListData(state = [], action) {
    switch (action.type) {
        case ActionType.HOME_LIST:
            return state.concat(action.listData);
        default:
            return state;
    }
}

export default combineReducers({
    homeListData,
})

