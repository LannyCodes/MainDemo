/**
 * Created by LannyCodes on 2019/5/9
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import CommonUtils from '../Utils/commonUtils';//公用的工具类

class CommunityScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
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
                    <Text style={styles.text}>社区</Text>
                </View>

            </View>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bac'
    },
    text: {
        fontSize: 30,
        color: 'red'
    },
    paddingTopBar: {
        paddingTop: CommonUtils.paddingTopBarH,
    }
});

export default CommunityScreen;