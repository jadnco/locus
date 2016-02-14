/* @flow */

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

type Props = {
  tabs: Array<string>,
  containerWidth: number,
  scrollValue: Object,
  activeTab: number,
  goToPage: Function,
}

class ProfileTabBar extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.labels = [];
  }

  _renderTab(label: string, page: number): ReactElement {
    let isActive: boolean = (this.props.activeTab === page);

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

  render(): ReactElement {
    let {tabs, containerWidth, scrollValue} = this.props;

    let tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / tabs.length,
      height: 1,
      backgroundColor: 'black',
      bottom: 0,
    };

    let left = scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / tabs.length],
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
    borderColor: '#dadbdb',
    backgroundColor: '#FFFFFF',
  },
});

export default ProfileTabBar;
