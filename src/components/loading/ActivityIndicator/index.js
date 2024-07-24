import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

import LoadingManager from './LoadingManager';
/**
 * To display Loading indicator
 * @param {*} [cancelable] Allow hide loading when press backdrop
 * @param {*} [message] Message show
 * @param {*} [hideAfter] Hide loading after show
 */
export function showLoading(message, cancelable = false, hideAfter) {
  const ref = LoadingManager.getDefault();

  if (!!ref) {
    ref.showLoading(message, cancelable);
  }

  if (hideAfter && hideAfter > 0) {
    setTimeout(() => {
      hideLoading();
    }, hideAfter);
  }
}

/**
 * To hide Loading
 */
export function hideLoading() {
  const ref = LoadingManager.getDefault();

  if (!!ref) {
    ref.hideLoading();
  }
}

/**
 * Loading helper make UI same on Android and iOS
 */

export class Loading extends Component {
  _id = 'Loading';
  type = '';
  cancelable = false;

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      message: null,
    };
  }

  componentDidMount() {
    this._id = this.props.id ?? 'Loading';
    LoadingManager.register(this);
  }

  componentWillUnmount() {
    LoadingManager.unregister(this);
  }

  showLoading = (message, cancelable) => {
    this.cancelable = cancelable;
    this.setState({ modalVisible: true, message });
  };

  hideLoading = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible } = this.state;

    return modalVisible ? (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.touch}
          onPress={() => this.cancelable && this.hideLoading()}>
          <Text style={styles.text}>{this.state.message}</Text>
          <ActivityIndicator color={'#0068FF'} />
        </TouchableOpacity>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99999,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Lexend-SemiBold',
    paddingBottom: 12,
    color: 'white',
    paddingHorizontal: 24,
    textAlign: 'center',
  },
});
