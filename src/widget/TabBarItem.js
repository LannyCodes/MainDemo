/**
 * Created by LannyCodes on 2019/5/9
 */

import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
// import Message from './MessagePoint'
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class TabBarItem extends Component {

    // static propTypes = {
    //     messageCount: PropTypes.number,
    //     showMessage: PropTypes.bool,
    // };
    //
    // static defaultProps = {
    //     messageCount: 0,
    //     showMessage: false
    // };

    render() {
        let selectedImage = this.props.selectedImage
            ? this.props.selectedImage
            : this.props.normalImage;

        return (
            <View>
                <Image
                    resizeMode={'contain'}
                    source={this.props.focused
                        ? selectedImage
                        : this.props.normalImage}
                    style={styles.image}/>
                {/*<Message
                    isShow={this.props.showMessage}
                    contentStyle={{position: 'absolute', marginLeft: 15, marginTop: -5}}
                    mesCount={this.props.msgCount}
                />*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 26,
        height: 24
    }
});

export default TabBarItem;