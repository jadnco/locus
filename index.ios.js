/* @flow */

import React, {
  AppRegistry,
  Component,
  Navigator,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {
  Camera,
  Feed,
  Messages,
  NewSpotSource,
  Notifications,
  Profile,
} from './app/views'

type State = {
  selectedTab: string,
};

class locus extends Component {
  constructor(props: Object): void {
    super(props);

    // This should be cached
    // as the user only logs in once
    this.me = {
      name: "John Smith",
      handle: "smith89",
      location: "Toronto, Canada",
      email: "smith@example.com",
      description: "Just a normal dude with a normal name.",
      _id: "56b95ffa9a663798f7c98330",
      created: "2016-02-09T03:41:46.934Z",
      spotsCount: 26,
      followingCount: 627,
      followersCount: 165,
      likesCount: 938
    };

    this.state = {

      // Default selected tab
      selectedTab: 'feed',
    };
  }

  tabChange(tab: string): void {
    this.setState({
      selectedTab: tab,
    });
  }

  renderScene(route: {component: ReactElement}, navigator: Navigator): ReactElement {
    let { component, ...props } = route;
    const isInitialRoute = Object.is(navigator.props.initialRoute.component, component);

    return (

      // `component` by itself does not work
      <route.component
        pop={!isInitialRoute && navigator.pop}
        push={navigator.push}
        {...props}
      />
    );
  }

  render(): ReactElement {
    return (
      <TabBarIOS tintColor="#CC9B47" barTintColor="black">
        <Icon.TabBarItem
          title="Home"
          iconName="location"
          selected={this.state.selectedTab === 'feed'}
          onPress={() => this.tabChange('feed')}
        >

          <Navigator
            initialRoute={{ component: Feed }}
            renderScene={this.renderScene.bind(this)}
          />

        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Notifications"
          iconName="bell"
          badge={3}
          selected={this.state.selectedTab === 'notifications'}
          onPress={() => this.tabChange('notifications')}
        >

          <Notifications />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="New Spot"
          iconName="camera"
          selected={this.state.selectedTab === 'camera'}
          onPress={() => this.tabChange('camera')}
        >

          <Navigator
            initialRoute={{ component: NewSpotSource }}
            renderScene={this.renderScene.bind(this)}
          />

        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Messages"
          iconName="comment"
          selected={this.state.selectedTab === 'messages'}
          onPress={() => this.tabChange('messages')}
        >

          <Camera />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Profile"
          iconName="user"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => this.tabChange('profile')}
        >

          <Navigator
            initialRoute={{ component: Profile, ...this.me }}
            renderScene={this.renderScene.bind(this)}
          />

        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('locus', () => locus);
