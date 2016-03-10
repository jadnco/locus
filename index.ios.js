/* @flow */

import React, {
  AppRegistry,
  Component,
  Navigator,
  TabBarIOS,
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Store from 'react-native-simple-store';

import {
  Camera,
  Feed,
  Messages,
  NewSpotSource,
  Notifications,
  Profile,
  UserToggle,
} from './app/views';

type State = {
  selectedTab: string,
};

class locus extends Component {
  USER_KEY: string = '@Locus:user';

  constructor(props: Object): void {
    super(props);

    this.state = {

      // Default selected tab
      selectedTab: 'camera',
      me: {},
    };
  }

  componentDidMount(): void {
    Store.get(this.USER_KEY)
      .then(user => {

        // No current user so we need to fetch one
        if (!user._id) {
          this.setState({ selectedTab: 'toggleUser' });
        }


        this.setState({ me: user });
      });
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

  changeUser(user): void {
    this.setState({ me: user });

    Store.save(this.USER_KEY, user);

    alert('Now logged in as ' + this.state.me.name);
  }

  getUser(): void {
    Store.get(this.USER_KEY)
      .then(user => alert(user.handle));
  }

  render(): ReactElement {
    return (
      <View style={{ flex: 1 }}>
      <Text onPress={this.getUser.bind(this)} style={{ textAlign: 'center', marginTop: 24 }}>Logged in as {this.state.me.name}</Text>

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
          title="Switch User"
          iconName="redo"
          selected={this.state.selectedTab === 'toggleUser'}
          onPress={() => this.tabChange('toggleUser')}
        >

          <UserToggle toggle={this.changeUser.bind(this)} />

        </Icon.TabBarItem>

        {/* <Icon.TabBarItem
          title="Notifications"
          iconName="bell"
          badge={3}
          selected={this.state.selectedTab === 'notifications'}
          onPress={() => this.tabChange('notifications')}
        >

          <Notifications />
        </Icon.TabBarItem> */}

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

          <Messages />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Profile"
          iconName="user"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => this.tabChange('profile')}
        >

          <Navigator
            initialRoute={{ component: Profile, ...this.state.me }}
            renderScene={this.renderScene.bind(this)}
          />

        </Icon.TabBarItem>
      </TabBarIOS>
      </View>
    );
  }
}

AppRegistry.registerComponent('locus', () => locus);
