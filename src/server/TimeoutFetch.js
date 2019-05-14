/**
 *
 * 超时处理
 * Created by LannyCodes on 2019/5/9
 */
/**
 * Post方法请求
 * @param url
 * @param body
 */

import Config from '../config/Config'


function fetchPost(url, body = {}) {
    let path = `${Config.BASE_URL}${url}`;
    return new Promise((resolve, reject) => {
        fetch(`${Config.BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                credentials: 'include',//
                mode: 'cors',
            },
            // 使用 JSON.stringify 方法
            body: JSON.stringify(body)
        }).then((responseText) => {
            return responseText.text();//转换成文本
        }).then((responseStr) => {
            return JSON.parse(responseStr);//转换成JSon

        }).then((response) => {
            return handleResult(response, resolve, reject);
        }).catch((error) => {
            //错误处理
            reject(error);
        })
    });

}

/**
 * Get方法请求
 * @param url
 */
function fetchGet(url) {
    return new Promise((resolve, reject) => {
        fetch(`${Config.BASE_URL}${url}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                credentials: 'include',//
            },
        }).then((response) => {
            return response.text();

        }).then((responseText) => {
            return JSON.parse(responseText);

        }).then((response) => {
            return handleResult(response, resolve, reject);
        }).catch((error) => {
            //错误处理
            reject(error);
        })
    });
}

/**
 *
 * @param response
 * @param resolve
 * @param reject
 */
function handleResult(response, resolve, reject) {
    if (response.errorCode === Config.SUCCESS_CODE) {//0 成功
        return resolve(response.data);
    } else if (response.errorCode === Config.RELOGIN_CODE) {//-1001  重新登录
        //清除本地缓存,
        return reject('请重新登录');
    }
    else {
        return reject(response.errorMsg);
    }

}

/**
 *
 * @param fetchPromise
 * @param timeout
 */
function fetchRace(fetchPromise, timeout) {

    //模拟超时的Promise
    let abort_promise = new Promise((resolve, reject) => {

        //timeout秒后超时，抛出reject()错误
        setTimeout(() => {
            reject('abort promise');
        }, timeout)
    });

    return Promise.race([fetchPromise, abort_promise]);

}

const TimeoutFetch = {

    post: (url, body = {}) => {
        return fetchRace(fetchPost(url, body), 20000);
    },
    get: (url) => {
        return fetchRace(fetchGet(url), 20000);
    }
};
export default TimeoutFetch;