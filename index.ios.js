/* @flow */

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

import FeedView from './app/views/Feed';
import ProfileView from './app/views/Profile';
import CameraView from './app/views/Camera';
import NotificationsView from './app/views/Notifications';
import MessagesView from './app/views/Messages';

type State = {
  selectedTab: string,
};

class locus extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {

      // Default selected tab
      selectedTab: 'feed',
    };
  }

  _tabChange(tab: string): void {
    this.setState({
      selectedTab: tab,
    });
  }

  _renderScene(route: {component: ReactElement, data: Object}, navigator: Object): ReactElement {
    return (
      <route.component
        data={route.data}
        route={route}
        navigator={navigator} />
    );
  }

  render(): ReactElement {
    return (
      <TabBarIOS
        tintColor='#CC9B47'
        barTintColor='black'>

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
          badge={3}
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

          <Navigator
            initialRoute={{component: ProfileView}}
            renderScene={this._renderScene} />

        </Icon.TabBarItem>

      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('locus', () => locus);
