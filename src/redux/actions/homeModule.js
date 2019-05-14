/**
 * Created by LannyCodes on 2019/5/13
 */
import ActionType from '../actionTypes';
import TimeoutFetch from "../../server/TimeoutFetch";
import Urls from '../../server/urls';

/**
 * 首页列表数据
 * @param listData
 */
/*export const setHomeList = (listData) => (dispatch) => {
    dispatch({
        type: ActionType.HOME_LIST,
        listData: listData
    })

};*/

export const setHomeList = (listData) => (dispatch) => new Promise((resolve, reject) => {
    dispatch({
        type: ActionType.HOME_LIST,
        listData: listData
    })

});

