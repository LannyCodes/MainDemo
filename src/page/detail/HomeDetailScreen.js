/**
 * 开屏页
 * Created by LannyCodes on 2019/5/8
 */

import React from 'react';
import {View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import CommonUtils from '../../Utils/commonUtils';//公用的工具类
import TopNavigateBar from '../../widget/TopNavigateBar' ;

export default class HomeDetailScreen extends React.PureComponent {


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <TopNavigateBar navigation={this.props.navigation}
                                title={'详情页'}/>
                <Text style={styles.text}>详情页</Text>
            </View>
        )
    }

    componentDidMount() {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aac',

    },
    text: {
        fontSize: 16,
        color: '#fa0'
    },
    paddingTopBar: {
        paddingTop: CommonUtils.paddingTopBarH,

    }
});