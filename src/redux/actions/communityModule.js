/**
 * Created by LannyCodes on 2019/5/13
 */
import ActionType from '../actionTypes';
import TimeoutFetch from "../../server/TimeoutFetch";
import Urls from '../../server/urls';

export const addOne = () => (dispatch) => (
    dispatch({
        type: ActionType.COMM_ADD,
    })

);
export const subOne = () => (dispatch) => (
    dispatch({
        type: ActionType.COMM_SUB,
    })
);





