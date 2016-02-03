/* @flow */

'use strict';

import React, {
  Component,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {navigationBar} from '../styles';

type Props = {
  onPress: Function,
};

class BackButton extends Component {
  props: Props;

  render(): ReactElement {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name='chevron-left' size={100} style={navigationBar.iconLeft} />
      </TouchableOpacity>
    );
  }
}

module.exports = BackButton;
