'use strict';

import React, {
  Component,
  TouchableOpacity,
} from 'react-native';

import NavigationBar from 'react-native-navbar';

class SearchButton extends Component {
  render() {
    let {title, ...other} = this.props;

    return (
      <NavigationBar
        tintColor='white'
        title={{title: title}} {...other} />
    );
  }
}

module.exports = SearchButton;
