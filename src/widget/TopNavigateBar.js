/**
 * Created by LannyCodes on 2018/11/22
 */
import React, {
    Component,
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Utils from '../Utils/commonUtils'


let {width, height} = Dimensions.get("window");
/**
 * 顶部的导航栏，
 */
export default class TopNavigateBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleWidth: 60
        };
        this.textOnLayout = this.textOnLayout.bind(this);

    }

    componentDidMount() {
        StatusBar.setBarStyle('dark-content');
    }

    static propTypes = {
        rightSecondBtnCallback: PropTypes.func,
        rightSecondImg: PropTypes.string,
        rightBtnCallback: PropTypes.func,
        rightBtnText: PropTypes.string,
        rightBtnTextColor: PropTypes.string,
        title: PropTypes.string.isRequired,
        statusbarStyle: PropTypes.string,
        isBarHidden: PropTypes.bool,
        isBarTranslucent: PropTypes.bool,
        statusbarBg: PropTypes.string,
    };

    static defaultProps = {
        rightBtnTextColor: '#2B2B2B',
        statusbarStyle: 'dark-content',
        statusbarBg: '#FFFFFF',

    };

    textOnLayout(event) {
        this.setState({
            titleWidth: event.nativeEvent.layout.width,
        })
    }

    render() {

        const {
            rightBtnTextColor, rightBtnText, rightBtnCallback,
            isBarHidden, statusbarStyle, isBarTranslucent, statusbarBg, title
            , rightSecondImg, rightSecondBtnCallback
        } = this.props;
        return (
            <View
                style={[styles.headertop, {paddingTop: Utils.paddingTopBarH}]}>
                {!isBarHidden && isBarTranslucent &&
                <StatusBar
                    hidden={isBarHidden}
                    barStyle={statusbarStyle}
                    translucent={isBarTranslucent}
                    backgroundColor={statusbarBg}
                />
                }
                <TouchableOpacity onPress={() =>
                    this.props.navigation.goBack()
                }>
                    <Image
                        source={require("../assets/common/icon_return.png")}
                        style={{width: 22, height: 22, marginLeft: 20}}
                    />
                </TouchableOpacity>
                <Text style={{
                    position: 'absolute',
                    fontSize: 18,
                    left: width / 2 - this.state.titleWidth / 2,
                    top: 30,
                }} onLayout={this.textOnLayout}>{title}
                </Text>
                {
                    rightBtnText &&
                    <TouchableOpacity onPress={() => {
                        if (Utils.isFastClick()) {
                            return;
                        }
                        rightBtnCallback && rightBtnCallback()
                    }

                    } sytle={{alignSelf: 'flex-end'}}>
                        <Text style={{fontSize: 15, color: rightBtnTextColor, marginRight: 15}}>
                            {rightBtnText}
                        </Text>
                    </TouchableOpacity>
                }
                {
                    rightSecondImg &&
                    <TouchableOpacity onPress={() =>
                        rightSecondBtnCallback()
                    } sytle={{alignSelf: 'flex-end', marginRight: 15}}>
                        <Image style={{width: 23, height: 23, marginRight: 15}}
                               resizeMode={'stretch'} source={rightSecondImg}/>
                    </TouchableOpacity>
                }


            </View>
        )
    }


}

const styles = StyleSheet.create({
    headertop: {
        position: 'relative',
        paddingBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: Platform.OS == 'ios' ? 30 : 1,
        // height: 50,
        borderBottomColor: '#e8e8e8',  //下边框颜色
        borderBottomWidth: 1,          //下边框宽度
    },
});
