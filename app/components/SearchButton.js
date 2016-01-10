'use strict';

import React, {
  Component,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {navigationBar} from '../styles';

class SearchButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{borderBottomWidth: 3, borderColor: 'green'}}>
        <Icon name='search' style={navigationBar.iconRight} />
      </TouchableOpacity>
    );
  }
}

module.exports = SearchButton;
