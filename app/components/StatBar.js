/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from 'react-native';

import NavigationBar from 'react-native-navbar';

class StatBar extends Component {
  render() {
    let {title, ...other} = this.props;

    return (
      <View>
        <ScrollView
          horizontal={true}
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.container}>

          <View style={styles.stat}>
            <Text>560hp</Text>
          </View>
          <View style={styles.stat}>
            <Text>305km/h</Text>
          </View>
          <View style={styles.stat}>
            <Text>0-100km/h 3.8s</Text>
          </View>
          <View style={styles.stat}>
            <Text>3.0L TT</Text>
          </View>
          <View style={styles.stat}>
            <Text>1,510kg</Text>
          </View>
          <View style={styles.stat}>
            <Text>CTY 1.11L/100km</Text>
          </View>
          <View style={styles.stat}>
            <Text>HWY 6.7L/100km</Text>
          </View>
          <View style={[styles.stat, styles.lastStat]}>
            <Text>USD$68,335</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  stat: {
    paddingHorizontal: 10,
    borderColor: '#EEEEEE',
    borderRightWidth: 1,
  },
  lastStat: {
    borderRightWidth: 0,
  },
});

module.exports = StatBar;
