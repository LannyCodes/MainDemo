/**
 * 开屏页
 * Created by LannyCodes on 2019/5/8
 */

import React from 'react';
import {View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import CommonUtils from '../Utils/commonUtils';//公用的工具类


export default class SplashPage extends React.PureComponent {


    constructor(props) {
        super(props);
        this.state = {};
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
                    <Text style={styles.text}>首页</Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        const {replace} = this.props.navigation;
        setTimeout(() => {
            replace("LoginPage")//2秒后跳转到首页

        }, 2000)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    text: {
        fontSize: 16,
        color: '#fa0'
    },
    paddingTopBar: {
        paddingTop: CommonUtils.paddingTopBarH,

    }
});