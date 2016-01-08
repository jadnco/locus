'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
} from 'react-native';

import SpotView from './app/views/Spot';
import FeedView from './app/views/Feed';
import ProfileView from './app/views/Profile';

import ScrollableTabView from 'react-native-scrollable-tab-view';

class locus extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollableTabView tabBarPosition='bottom'>
        <FeedView tabLabel='Feed' />
        <SpotView tabLabel='Post' />
        <ProfileView tabLabel='Profile' />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('locus', () => locus);
