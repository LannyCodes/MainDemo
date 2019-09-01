/**
 * Created by LannyCodes on 2019/5/9
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import CommonUtils from '../Utils/commonUtils';//公用的工具类
import ScreenUtils from '../Utils/ScreenUtils';//公用的工具类
import {bindActionCreators} from 'redux';
import {addOne, subOne} from '../redux/actions/communityModule'
import {connect} from "react-redux";
import {fromJS, is, List} from 'immutable'

class CommunityScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        nextState = nextState || {};
        nextProps = nextProps || {};
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }

        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
        for (const key in nextState) {
            if (!is(thisState[key], nextState[key])) {
                return true;
            }
        }
        return false;
        // let rusult1 = !is(List(thisProps.homeListData), List(nextProps.homeListData));
        // let rusult2 = !is(Immutable.Map(this.props.item[0]), Immutable.Map(nextProps.item[0]));
        // return rusult1 || rusult2;
    }

    render() {

        const {number} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                    hidden={false}
                    translucent={true}/>
                <View style={styles.paddingTopBar}>
                    <Text style={[styles.text, {marginTop: 30}]}>{number}</Text>
                    <TouchableOpacity
                        onPress={() => this.props.addNum()}
                        style={styles.loginButton}
                    >
                        <Text allowFontScaling={false} style={styles.loginText}>增加1个</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.subNum()}
                        style={styles.loginButton}
                    >
                        <Text allowFontScaling={false} style={styles.loginText}>减去1个</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }


}


function mapStateToProps(state) {
    return {
        number: state.getIn(['communityNum']).toJS(),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // setHomeList: (lists) => setHomeList(lists)(dispatch),//Promise的写法
        addNum: bindActionCreators(addOne, dispatch),
        subNum: bindActionCreators(subOne, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bac'
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red'
    },
    paddingTopBar: {
        paddingTop: CommonUtils.paddingTopBarH,
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
