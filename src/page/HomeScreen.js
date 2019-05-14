/**
 * Created by LannyCodes on 2019/5/9
 */

import React, {Component} from 'react';

import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    StatusBar,
    Image,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import CommonUtils from '../Utils/commonUtils';//公用的工具类
import Urls from '../server/urls';
import TimeoutFetch from "../server/TimeoutFetch";
import {setHomeList} from '../redux/actions/homeModule'
import {connect} from "react-redux";

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,//当前页
            allowLoadMore: true,//可以加载更多
        };
        this._renderItem = this._renderItem.bind(this);//Item的唯一标志，优化性能
    }


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        //请求数据
        this._fetchServer();

    }

    _fetchServer() {
        const {currentPage, allowLoadMore} = this.state;
        let url = `${Urls.HOME.homelist}${currentPage}/json`;//拼接页码

        TimeoutFetch.get(url)
            .then((response) => {
                if (response.datas.length > 0) {
                    if (currentPage < response.pageCount - 1) {

                        //还有更多
                        this.setState({
                            currentPage: currentPage + 1,
                            allowLoadMore: true,
                        })
                    } else {
                        //没有更多
                        this.setState({
                            allowLoadMore: false,
                        })
                    }
                    this.props.setHomeList(response.datas);
                    //
                } else {
                    //没有更多
                    this.setState({
                        allowLoadMore: false,
                    })
                }

            }).catch(error => {
            console.error(error)
        })
    }

    render() {

        const {homeListData} = this.props;
        const {allowLoadMore} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                    hidden={false}
                    translucent={true}/>
                {
                    homeListData.length > 0 &&
                    <FlatList
                        ref={flatList => this._flatList = flatList}
                        style={styles.paddingTopBar}
                        data={homeListData}
                        extraData={this.state}
                        keyExtractor={(item, index) => (item.id)}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={{flex: 1, height: 10, backgroundColor: 'transparent'}}/>
                            )
                        }}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => {

                            if (allowLoadMore) {
                                this._homeLoadMore();
                            }

                        }}
                    />
                }
            </View>
        )
    }


    _renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                {/*item的标题部分*/}
                <View style={styles.itemTop}>
                    <Image style={{width: 20, height: 20, borderRadius: 10}}
                           source={require('../assets/home/smileChild.jpeg')}/>
                    <Text style={{fontSize: 14, color: '#778899', flex: 1, marginLeft: 5}}>{item.author}</Text>
                    <Text style={{fontSize: 14, color: '#00BFFF'}}>{item.superChapterName} / {item.author}</Text>
                </View>
                {/*文本*/}
                <Text style={{fontSize: 14, color: 'black', textAlign: 'center', marginTop: 10}}>{item.title}</Text>
                {/*收藏、发布时间*/}
                <View style={styles.item_bottom}>
                    <Image style={{width: 25, height: 25,}}
                           source={require('../assets/home/un_select.png')}/>
                    <Image style={{width: 20, height: 20, marginLeft: 10}}
                           source={require('../assets/home/publish_time.png')}/>
                    <Text style={{fontSize: 14, color: '#778899', flex: 1, marginLeft: 5}}>{item.niceDate}</Text>
                    <Text style={{fontSize: 14, color: '#32CD32'}}> {item.type}</Text>
                </View>
            </View>
        )
    };

    /**
     * 加载更多
     * @private
     */
    _homeLoadMore() {
        this._fetchServer();
    }


    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        //必须是在首页时才监听物理返回键
        if (this.props.navigation.isFocused()) {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                BackHandler.exitApp();
                return;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }

    }

}

function mapStateToProps(state) {
    return {
        homeListData: state.homeReducer.homeListData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setHomeList: (lists) => setHomeList(lists)(dispatch),
        // setHomeList: (lists) => dispatch(setHomeList(lists)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cca'
    },
    text: {
        fontSize: 30,
        color: 'red'
    },
    paddingTopBar: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        backgroundColor: '#DCDCDC',
        paddingTop: CommonUtils.paddingTopBarH,
        flexDirection: 'column',
    },
    itemContainer: {
        borderRadius: 5,
        padding: 15,
        height: 110,
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',

    },
    //Item的顶部
    itemTop: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    item_bottom: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }

});

