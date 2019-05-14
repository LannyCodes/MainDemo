/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * 有时候遇到包报错的问题，死活不管怎么调都报错，重启电脑，就好了。
 *
 * */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Root from './src/base/StackConfig'
import {Provider} from 'react-redux';
import store from './src/redux/store/configStore';
// import {PersistGate} from 'redux-persist/integration/react'


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Provider store={store}>
                <Root/>
            </Provider>


        );
    }
}

{/*<Provider store={store}>*/
}
{/*<PersistGate loading={null} persistor={persistor}>*/
}
{/*<Root/>*/
}
{/*</PersistGate>*/
}
{/*</Provider>*/
}

