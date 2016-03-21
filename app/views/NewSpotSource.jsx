/* @flow */

'use strict';

import React, {
  CameraRoll,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBarIOS,
  Navigator,
} from 'react-native';

import {
  PhotoEditor,
  NextButton,
  TopBar,
  ResponsiveImage,
  PhotoGrid,
} from '../components';

import {
  Camera,
  SpotEditor,
  PhotoSelector,
  LocationSelector,
} from '.';

import TabNavigator from 'react-native-tab-navigator';

import Icon from 'react-native-vector-icons/EvilIcons';

var NavigationBarRouteMapper = {

  leftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  rightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} [{index}]
      </Text>
    );
  },

};

class NewSpotSource extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      selectedTab: 'library',
    };
  }

  tabChange(tab: string): void {
    this.setState({
      selectedTab: tab,
    });
  }

  renderScene(route: Object, navigator: Navigator): ReactElement {
    let { component, ...props } = route;
    const isInitialRoute = Object.is(navigator.props.initialRoute.component, component);

    return (
      <route.component
        pop={!isInitialRoute && navigator.pop}
        push={navigator.push}
        navigator={navigator}
        {...props}
      />
    );
  }

  render(): ReactElement {
    let { push, pop, closeModal, ...other } = this.props;

    return (
      <TabNavigator
        sceneStyle={styles.scene}
        tabBarStyle={styles.tabNavigator}
      >

        <TabNavigator.Item
          title="Library"
          titleStyle={styles.tabTitle}
          selectedTitleStyle={styles.selectedTabTitle}
          selected={this.state.selectedTab === 'library'}
          onPress={() => this.tabChange('library')}
        >

          <PhotoSelector
            closeModal={closeModal}
            visible={this.state.selectedTab === 'library'}
            push={push}
            pop={pop}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          title="Photo"
          titleStyle={styles.tabTitle}
          selectedTitleStyle={styles.selectedTabTitle}
          selected={this.state.selectedTab === 'camera'}
          onPress={() => this.tabChange('camera')}
        >

          {/* <Camera
            closeModal={closeModal}
            visible={this.state.selectedTab === 'camera'}
            push={push}
            pop={pop}
          /> */}

          <Navigator
            initialRoute={{
              component: Camera, closeModal, push, pop,
              visible: this.state.selectedTab === 'camera',
            }}
            renderScene={this.renderScene.bind(this)}
            navigationBar={
              <Navigator.NavigationBar
              style={{backgroundColor: 'white'}}
                routeMapper={{
                LeftButton(route, navigator) {
                  return <Text>Back</Text>;
                },
                RightButton(route, navigator) {
                  return <Text>Next</Text>;
                },
                Title(route, navigator) {
                  return <Text>Title</Text>;
                }
              }} />
            }
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          title="Location"
          titleStyle={styles.tabTitle}
          selectedTitleStyle={styles.selectedTabTitle}
          selected={this.state.selectedTab === 'location'}
          onPress={() => this.tabChange('location')}
        >

          <LocationSelector
            closeModal={closeModal}
            push={push}
            pop={pop}
          />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tabNavigator: {
    height: 40,
  },
  tabTitle: {

    // Use the default font size
    fontSize: null,
    marginTop: 0,
    marginBottom: 11,
  },
  selectedTabTitle: {
    color: '#E26C23',
  },
  scene: {
    backgroundColor: 'white',
    paddingBottom: 40,
  },
});

export { NewSpotSource };
