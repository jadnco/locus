/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

type Props = {
  size: number,
  style: Object,
};

class CaptureButton extends Component {
  props: Props;

  render(): ReactElement {
    let { style, ...other } = this.props;

    return (
      <TouchableHighlight
        style={[styles.button, style]}
        {...other}
      >
        <Icon name="eye" size={42} color="white" />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E26C23',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { CaptureButton };
