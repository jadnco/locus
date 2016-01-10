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
import CameraView from './app/views/Camera';

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
      <TabBarIOS tintColor='white' barTintColor='black'>
        <Icon.TabBarItem
          title='Camera'
          iconName='camera'
          selected={this.state.selectedTab === 'camera'}
          onPress={() => this.tabChange('camera')}>

          <CameraView />
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
