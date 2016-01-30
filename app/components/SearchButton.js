/* @flow */

'use strict';

import React, {
  Component,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {navigationBar} from '../styles';

class SearchButton extends Component {
  render(): ReactElement {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name='search' style={navigationBar.iconRight} />
      </TouchableOpacity>
    );
  }
}

module.exports = SearchButton;
