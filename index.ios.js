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
  Animated,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import FeedView from './app/views/Feed';
import ProfileView from './app/views/Profile';
import CameraView from './app/views/Camera';
import NotificationsView from './app/views/Notifications';
import MessagesView from './app/views/Messages';

import Avatar from './app/components/Avatar';

import TabBar from 'react-native-tab-navigator';

let AnimatedAvatar = Animated.createAnimatedComponent(Avatar);

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

    this.height = new Animated.Value(0);

    this.scrollValue = 0;
  }

  componentDidMount(): void {
    Animated.timing(this.height, {
      duration: 100,
      toValue: 49,
    }).start();
  }

  _tabChange(tab: string): void {
    this.setState({
      selectedTab: tab,
    });
  }

  _renderScene(route: {component: ReactElement, data: Object}, navigator: Navigator): ReactElement {
    let _isInitialRoute = Object.is(navigator.props.initialRoute.component, route.component);

    return (
      <route.component
        data={route.data}
        pop={!_isInitialRoute && navigator.pop}
        push={navigator.push}
        _onScroll={this._setOffsetValue.bind(this)} />
    );
  }

  _setOffsetValue(event) {
    let offset = event.nativeEvent.contentOffset.y;

    //Animated.event([{nativeEvent: {contentOffset: {y: this._scrollY}}}]);

    if (offset < 0) offset = 0;

    this.height.setValue((offset <= this.scrollValue ? 0 : 49));

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
