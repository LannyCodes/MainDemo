/**
 * Created by LannyCodes on 2019/5/12
 */

import ActionType from '../actionTypes';
import {combineReducers} from 'redux';
import {fromJS} from 'immutable'

const defaultState = fromJS({//把初始值转换为immutable类型的数据
    isFetching: false,
    data: {}
});

function userLogin(state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOGIN_START:
            return {
                ...state,
                isFetching: true,
                data: action.data
            };
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case ActionType.LOGIN_ERORR:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
    }
}

export default combineReducers({
    userLogin,
})

