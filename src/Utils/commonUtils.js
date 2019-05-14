/**
 * Created by LannyCodes on 2019/5/9
 */

import {StatusBar, Platform} from 'react-native';


const _IOS_ = Platform.OS === 'ios';

const paddingTopBarH = _IOS_ ? 35 : StatusBar.currentHeight + 8;


/**
 * 防止短时间内重复点击
 */
let pretime = 0;

function isFastClick() {
    let nowtime = new Date().getTime();
    if (nowtime - pretime < 1500) {
        return true;
    }
    pretime = nowtime;
    return false;
}


const CommonUtils = {
    _IOS_,
    paddingTopBarH,
    isFastClick
};

export default CommonUtils;