/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import NavigationBar from 'react-native-navbar';

class TopBar extends Component {
  render() {
    let {title, style, ...other} = this.props;

    return (
      <View style={[styles.topBar, style]}>
        <NavigationBar
          tintColor='white'
          title={{title: title}} {...other} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    borderColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
});

module.exports = TopBar;
