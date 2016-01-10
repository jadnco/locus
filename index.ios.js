'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import SpotView from './app/views/Spot';
import FeedView from './app/views/Feed';
import ProfileView from './app/views/Profile';
import CameraView from './app/views/Camera';
import NotificationsView from './app/views/Notifications';
import MessagesView from './app/views/Messages';

class locus extends Component {
  constructor(props) {
    super(props);

    this.state = {

      // Default selected tab
      selectedTab: 'profile',
    };
  }

  _tabChange(tab) {
    this.setState({
      selectedTab: tab,
    });
  }

  _renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator} />;
  }

  render() {
    return (
      <TabBarIOS tintColor='white' barTintColor='black'>
        <Icon.TabBarItem
          title='Home'
          iconName='location'
          selected={this.state.selectedTab === 'feed'}
          onPress={() => this._tabChange('feed')}>

          <Navigator
            initialRoute={{component: FeedView}}
            renderScene={this._renderScene} />

        </Icon.TabBarItem>

        <Icon.TabBarItem
          title='Notifications'
          iconName='bell'
          selected={this.state.selectedTab === 'notifications'}
          onPress={() => this._tabChange('notifications')}>

          <NotificationsView />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title='Camera'
          iconName='camera'
          selected={this.state.selectedTab === 'camera'}
          onPress={() => this._tabChange('camera')}>

          <CameraView />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title='Messages'
          iconName='comment'
          selected={this.state.selectedTab === 'messages'}
          onPress={() => this._tabChange('messages')}>

          <MessagesView />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title='Profile'
          iconName='user'
          selected={this.state.selectedTab === 'profile'}
          onPress={() => this._tabChange('profile')}>

          <ProfileView />
        </Icon.TabBarItem>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('locus', () => locus);
