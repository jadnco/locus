'use strict';

import React, {
  Component,
  TouchableOpacity,
  View,
  Animated,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {navigationBar} from '../styles';

class ProfileTabBar extends Component {
  constructor(props) {
    super(props);

    this.labels = [];
  }

  _renderTab(label, page) {
    let isActive = this.props.activeTab === page;

    return (
      <TouchableOpacity
        key={label}
        style={styles.tab}
        onPress={() => this.props.goToPage(page)}>
        <Text
          style={styles.label}
          ref={(label) => { this.labels[page] = label }}>

          {label.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    let {tabs, containerWidth} = this.props;

    var tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / tabs.length,
      height: 1,
      backgroundColor: 'black',
      bottom: 0,
    };

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, containerWidth / tabs.length],
    });

    return (
      <View>
        <View style={styles.tabs}>
          {tabs.map((tab, i) => this._renderTab(tab, i))}
        </View>
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
});

module.exports = ProfileTabBar;
