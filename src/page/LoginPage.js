/**
 * 开屏页
 * Created by LannyCodes on 2019/5/8
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform,
    TextInput,
    TouchableOpacity
} from 'react-native';
import CommonUtils from '../Utils/commonUtils';//公用的工具类
import ScreenUtils from '../Utils/ScreenUtils';//公用的工具类
import Toast from "teaset/components/Toast/Toast";
import {connect} from "react-redux";
// import * as loginModules from '../redux/actions/loginModule'
import {beginLogin} from '../redux/actions/loginModule'
import {bindActionCreators} from 'redux';

class LoginPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: '709282865@qq.com',
            password: 'wanandroid',
        };

        this._login = this._login.bind(this);
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                    hidden={false}
                    translucent={true}/>
                <View style={styles.paddingTopBar}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="用户名"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => {
                            this.setState({username: text})
                        }}
                    />

                    <TextInput
                        style={styles.textPassWord}
                        placeholder="密码"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => {
                            this.setState({password: text})
                        }}
                    />
                    {/*登录*/}
                    <TouchableOpacity
                        onPress={this._login}
                        style={styles.loginButton}
                    >
                        <Text allowFontScaling={false} style={styles.loginText}>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    componentDidMount() {
        // const {replace} = this.props.navigation;
        // setTimeout(() => {
        //     replace("MainScreen")//2秒后跳转到首页
        //
        // }, 2000)
    }

    /**
     * 登录
     * @private
     */
    _login() {
        const {username, password} = this.state;
        if (username === null || username === '' ||
            password === null || password === '') {
            Toast.message('用户名和密码不能为空');
            return;
        }
        // const {beginLogin} = this.props.loginModules;
        this.props.beginLogin(username, password);

    }
}

function mapDispatchToProps(dispatch) {
    return {
        // beginLogin: (username, password) => beginLogin(username, password)(dispatch),//redux-promise
        // beginLogin: (username, password) => dispatch(beginLogin(username, password)),
        beginLogin: bindActionCreators(beginLogin, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4682B4',

    },
    text: {
        fontSize: 16,
        color: '#fa0'
    },
    paddingTopBar: {
        paddingTop: CommonUtils.paddingTopBarH,

    },
    textInput: {
        marginTop: 30,
        backgroundColor: '#7FFFAA',
        width: ScreenUtils.rScreenWidth(612),
        height: ScreenUtils.rScreenWidth(106),
        marginLeft: ScreenUtils.rScreenWidth(69),
        paddingLeft: ScreenUtils.rScreenWidth(34),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        color: 'black',
        fontSize: ScreenUtils.rScreenWidth(30),
    }, textPassWord: {
        marginTop: 10,
        backgroundColor: '#7FFFAA',
        width: ScreenUtils.rScreenWidth(612),
        height: ScreenUtils.rScreenWidth(106),
        marginLeft: ScreenUtils.rScreenWidth(69),
        paddingLeft: ScreenUtils.rScreenWidth(34),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        color: 'black',
        fontSize: ScreenUtils.rScreenWidth(30),
    },

    loginButton: {
        marginTop: 10,
        width: ScreenUtils.rScreenWidth(612),
        height: ScreenUtils.rScreenWidth(106),
        backgroundColor: 'rgb(255, 144, 0)',
        borderRadius: ScreenUtils.rScreenWidth(69),
        marginLeft: ScreenUtils.rScreenWidth(69),
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: 'rgb(255,255,255)',
        fontSize: ScreenUtils.rScreenWidth(36),
    },
});