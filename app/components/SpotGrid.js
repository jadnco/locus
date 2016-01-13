'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

class SpotGrid extends Component {
  render() {
    let {title, style, ...other} = this.props;

    return (
      <View style={[styles.topBar, style, {height: 400, backgroundColor: 'grey'}]}>
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

module.exports = SpotGrid;
