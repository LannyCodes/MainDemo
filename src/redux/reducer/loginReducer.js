/**
 * Created by LannyCodes on 2019/5/12
 */

import ActionType from '../actionTypes';
import {combineReducers} from 'redux';


function userLogin(state, action) {
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

