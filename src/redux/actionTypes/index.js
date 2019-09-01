/**
 * Created by LannyCodes on 2019/5/12
 */
const REQUEST = {
    REQUEST_STATUS: Symbol(),
    FETCH_START: Symbol(),
    FETCH_SUCCESS: Symbol(),
    REQUEST_ERROR: Symbol(),
};

const USER = {
    LOGIN_START: Symbol(),
    LOGIN: Symbol(),//登录
    LOGIN_SUCCESS: Symbol(),
    LOGIN_ERORR: Symbol(),

};
const HOME = {
    HOME_LIST: Symbol(),//首页列表数据
};

const COMMUNITY = {
    COMM_ADD: Symbol(),//加一
    COMM_SUB: Symbol(),
};

const actionTypes = {
    ...REQUEST,
    ...USER,
    ...HOME,
    ...COMMUNITY,
};

export default actionTypes;