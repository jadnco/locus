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

import Icon from 'react-native-vector-icons/EvilIcons';

import SpotView from './app/views/Spot';
import FeedView from './app/views/Feed';
import ProfileView from './app/views/Profile';

import ScrollableTabView from 'react-native-scrollable-tab-view';

class locus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'profile',
    };
  }

  tabChange(tab) {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    return (
      <TabBarIOS tintColor='#E3453D' barTintColor='black'>
        <Icon.TabBarItem
          title='Search'
          iconName='search'
          selected={this.state.selectedTab === 'search'}
          onPress={() => this.tabChange('search')}>

          <FeedView />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title='Profile'
          iconName='user'
          selected={this.state.selectedTab === 'profile'}
          onPress={() => this.tabChange('profile')}>

          <ProfileView />
        </Icon.TabBarItem>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('locus', () => locus);
