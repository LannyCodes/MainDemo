/**
 * Created by LannyCodes on 2019/5/8
 */
import {StackNavigator} from 'react-navigation';

import SplashPage from '../page/SplashPage';
import LoginPage from '../page/LoginPage';
import TabNavigator from './TabNavigator';
import HomeDetailScreen from '../page/detail/HomeDetailScreen'

/**
 * 全部页面的集合
 * @type {"react-navigation".NavigationContainer}
 */
const Navigator = StackNavigator(
    {
        /**
         * 开屏页
         */
        // SplashPage: {
        //     screen: SplashPage,//开屏广告页
        //     navigationOptions: {
        //         header: null
        //     }
        // },
        // LoginPage: {
        //     screen: LoginPage,
        //     navigationOptions: {
        //         header: null
        //     }
        // },

        MainScreen: {
            screen: TabNavigator,//主页
            navigationOptions: {
                header: null
            }
        },
        HomeDetailScreen: {
            screen: HomeDetailScreen,//详情页
            navigationOptions: {
                header: null
            }
        }
    }, {
        navigationOptions: {
            header: null,
        }
    }
);

export default Navigator;