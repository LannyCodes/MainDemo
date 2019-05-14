/**
 * Created by LannyCodes on 2019/5/9
 */

import React from 'react';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import HomeScreen from "../page/HomeScreen";
import CommunityScreen from "../page/CommunityScreen";
import CollegeScreen from "../page/CollegeScreen";
import MineScreen from "../page/MineScreen";
import TabBarItem from '../widget/TabBarItem';

const TabConfig = TabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        showMessage={false}
                        focused={focused}
                        selectedImage={require('../assets/home/icon_home_select.png')}
                        normalImage={require('../assets/home/icon_home.png')}
                    />
                )
            }
        },
        CommunityScreen: {
            screen: CommunityScreen,
            navigationOptions: {
                tabBarLabel: '社区',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        showMessage={false}
                        focused={focused}
                        selectedImage={require('../assets/community/icon_community_select.png')}
                        normalImage={require('../assets/community/icon_community.png')}
                    />
                )
            }

        },
        CollegeScreen: {
            screen: CollegeScreen,
            navigationOptions: {
                tabBarLabel: '学堂',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        showMessage={false}
                        focused={focused}
                        selectedImage={require('../assets/college/icon_college_select.png')}
                        normalImage={require('../assets/college/icon_college.png')}
                    />
                )
            }
        },
        MineScreen: {
            screen: MineScreen,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        showMessage={false}
                        focused={focused}
                        selectedImage={require('../assets/mine/icon_me_select.png')}
                        normalImage={require('../assets/mine/icon_me.png')}
                    />
                )
            }
        }
    }, {
        tabBarPosition: 'bottom',// 设置tabBar的位置
        swipeEnabled: false,//是否允许在标签之间进行滑动
        animationEnabled: false,//是否在更改标签时显示动画。
        backBehavior: 'none',// 按 back 键是否跳转到第一个 Tab， none 为不跳转
        lazy: true,//懒加载

        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            activeBackgroundColor: 'white',
            activeTintColor: '#FF3C29',
            inactiveBackgroundColor: 'white',
            inactiveTintColor: '#9B9B9B',
            showLabel: true,
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            style: {
                backgroundColor: '#FFFFFF', // TabBar 背景色
                height: 50
            },
            labelStyle: {
                fontSize: 12, // 文字大小,
                marginTop: 0,
            },
        },
    }
);

export default TabConfig;