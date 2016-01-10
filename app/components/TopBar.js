'use strict';

import React, {
  Component,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import NavigationBar from 'react-native-navbar';

import {navigationBar} from '../styles';

class SearchButton extends Component {
  render() {
    let {title, ...other} = this.props;

    return (
      <NavigationBar
            barTintColor='white'
            title={{title: title}} {...other} />
    );
  }
}

module.exports = SearchButton;
