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
} from 'react-native';

import {
  PhotoEditor,
  NextButton,
  TopBar,
  ResponsiveImage,
  PhotoGrid,
} from '../components';

import { Camera, SpotEditor } from '.';

import TabNavigator from 'react-native-tab-navigator';

class NewSpotSource extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      photo: null,
      selectedTab: 'camera',
    };
  }

  componentDidMount(): void {
    this.getLastPhoto();
  }

  tabChange(tab: string): void {
    this.setState({
      selectedTab: tab,
    });
  }

  getLastPhoto(): void {
    console.log('Getting photos');
    CameraRoll.getPhotos({ first: 1 }, photo => {
      console.log(photo);

      this.setState({ photo });
    }, () => {
      console.log('Error getting latest photo.');
    });
  }

  render(): ReactElement {
    let { push, ...other } = this.props;
    let content = <Text>Loading image...</Text>;

    if (this.state.photo) {
      content = (
        <PhotoEditor
          source={this.state.photo.edges[0].node.image} />
      );
    }

    return (

      <TabNavigator tabBarStyle={styles.tabNavigator}>
        <TabNavigator.Item
          title="Library"
          titleStyle={styles.tabTitle}
          selected={this.state.selectedTab === 'library'}
          onPress={() => this.tabChange('library')}
        >

          <View style={styles.container}>

          <TopBar
            title='New Spot'
            rightButton={
              <NextButton onPress={() => push({ component: SpotEditor })} />
            }
          />

          <ScrollView
            style={styles.container}
            contentInset={{ bottom: 49 }}
            automaticallyAdjustContentInsets={false}
          >
            {content}

            <PhotoGrid />
          </ScrollView>
          </View>
        </TabNavigator.Item>

        <TabNavigator.Item
          title="Photo"
          titleStyle={styles.tabTitle}
          selected={this.state.selectedTab === 'camera'}
          onPress={() => this.tabChange('camera')}
        >

          <Camera />
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
    bottom: 49,
    height: null,
    padding: 8,
  },
  tabTitle: {

    // Use the default font size
    fontSize: null,
  },
});

export { NewSpotSource };
