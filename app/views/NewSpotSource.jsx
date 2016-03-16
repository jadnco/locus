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

          <Camera
            closeModal={closeModal}
            visible={this.state.selectedTab === 'camera'}
            push={push}
            pop={pop}
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
    color: '#CC9B47',
  },
  scene: {
    backgroundColor: 'white',
    paddingBottom: 40,
  },
});

export { NewSpotSource };
