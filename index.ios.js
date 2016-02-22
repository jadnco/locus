/* @flow */

import React, {
  AppRegistry,
  Component,
  Navigator,
  TabBarIOS,
  Animated,
  ScrollView,
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

import Avatar from './app/components/Avatar';

import TabBar from 'react-native-tab-navigator';

let AnimatedAvatar = Animated.createAnimatedComponent(Avatar);

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

    this.height = new Animated.Value(0);

    this.scrollValue = 0;
  }

  componentDidMount(): void {
    Animated.timing(this.height, {
      duration: 100,
      toValue: 49,
    }).start();
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
        _onScroll={this._setOffsetValue.bind(this)}
        {...props}
      />
    );
  }

  _setOffsetValue(event) {
    let offset = event.nativeEvent.contentOffset.y;

    if (offset < 0) offset = 0;

    //this.height.setValue((offset <= this.scrollValue ? 0 : 49));

    this.scrollValue = offset;
  }

  render(): ReactElement {
    return (
      <TabBar
        tabBarStyle={{transform: [{translateY: this.height}], overflow: 'hidden'}}
        sceneStyle={{paddingBottom: 20}}>
        <TabBar.Item
          title='Some'
          selected={this.state.selectedTab === 'feed'}
          badgeText='5'
          renderIcon={() => <Icon name='location' color='green' size={30} />}
          onPress={() => this._tabChange('feed')}>

          <Navigator
            initialRoute={{component: FeedView}}
            renderScene={this._renderScene.bind(this)} />
        </TabBar.Item>
        <TabBar.Item
          title='another'
          onPress={() => this._value()}>

          <Text>The next rab</Text>
        </TabBar.Item>
      </TabBar>
    );
  }
}

AppRegistry.registerComponent('locus', () => locus);
