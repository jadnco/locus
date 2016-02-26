/* @flow */

import React, {
  AppRegistry,
  Component,
  Dimensions,
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
} from './app/views';

import { Avatar, Text } from './app/components';

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

    this.offset = new Animated.Value(0);

    this.scrollValue = 0;
  }

  componentDidMount(): void {
    // Animated.timing(this.height, {
    //   duration: 100,
    //   toValue: 49,
    // }).start();
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
    let height = Dimensions.get('window').height;

    if (offset > 0) {
      this.offset.setValue(offset);
    } else if (offset < 1) {
      this.offset.setValue(0);
    }

    //this.height.setValue((offset <= this.scrollValue ? 0 : 49));

    // Animated.timing(this.height, {
    //   duration: 100,
    //   toValue: (offset <= this.scrollValue ? 0 : 49),
    // }).start();

    this.scrollValue = offset;
  }

  render(): ReactElement {
    return (
      <TabBar
        tabBarStyle={{transform: [{translateY: this.offset}], overflow: 'hidden'}}
        sceneStyle={{paddingBottom: 20}}
      >
        <TabBar.Item
          title='Some'
          selected={this.state.selectedTab === 'feed'}
          badgeText='5'
          renderIcon={() => <Icon name='location' color='green' size={30} />}
          onPress={() => this.tabChange('feed')}>

          <Navigator
            initialRoute={{component: Feed}}
            renderScene={this.renderScene.bind(this)} />
        </TabBar.Item>
        <TabBar.Item
          title='another'
          onPress={() => this._setOffsetValue()}>

          <Text>The next tab</Text>
        </TabBar.Item>
      </TabBar>
    );
  }
}

AppRegistry.registerComponent('locus', () => locus);
