/**
 * Created by LannyCodes on 2019/5/12
 */

import ActionType from '../actionTypes';
// import {combineReducers} from 'redux';

import {fromJS} from 'immutable'

const defaultState = fromJS([1]);

//初始
export function communityNum(state = defaultState, action) {
    switch (action.type) {
        case ActionType.COMM_ADD:
            return state.push(1);//增加一个
        case ActionType.COMM_SUB:
            return state.slice(1);//删除一个
        default:
            return state;
    }
}


