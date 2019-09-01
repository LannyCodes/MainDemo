/**
 * Created by LannyCodes on 2019/5/12
 */

import ActionType from '../actionTypes';
// import {combineReducers} from 'redux';

import {fromJS} from 'immutable'

const defaultState = fromJS([]);

//初始值
export function homeListData(state = defaultState, action) {
    switch (action.type) {
        case ActionType.HOME_LIST:
            return state.concat(action.listData);
        default:
            return state;
    }
}


