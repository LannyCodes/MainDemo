/**
 * Created by LannyCodes on 2019/5/12
 */
import ActionType from '../actionTypes';
import TimeoutFetch from "../../server/TimeoutFetch";
import Urls from '../../server/urls';


// export const beginLogin = (username, password) =>
//     (dispatch, getState) => new Promise((resolve, reject) => {
//         //开始登录（一般展示正在加载菊花）
//         dispatch({type: ActionType.LOGIN_START});
//         //执行登录请求
//         return TimeoutFetch.post(Urls.LOGIN.Login, {username, password})
//             .then((response) => {
//                 dispatch({
//                     type: ActionType.LOGIN_SUCCESS,
//                     data: response
//                 })
//
//             }).catch(error => {
//                 dispatch({
//                     type: ActionType.LOGIN_ERORR,
//                     data: error
//                 })
//             })
//
//     });

//react-redux的写法
export const beginLogin = (username, password) => (dispatch, getState) => {
    //开始登录（一般展示正在加载菊花）
    dispatch({type: ActionType.LOGIN_START});
    //执行登录请求
    return TimeoutFetch.post(Urls.LOGIN.Login, {username, password})
        .then((response) => {
            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                data: response
            })

        }).catch(error => {
            dispatch({
                type: ActionType.LOGIN_ERORR,
                data: error
            })
        })

};




