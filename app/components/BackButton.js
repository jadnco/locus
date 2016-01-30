/* @flow */

'use strict';

import React, {
  Component,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {navigationBar} from '../styles';

class BackButton extends Component {
  render(): ReactElement {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name='chevron-left' style={navigationBar.iconLeft} />
      </TouchableOpacity>
    );
  }
}

module.exports = BackButton;
