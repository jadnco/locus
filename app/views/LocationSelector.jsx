/* @flow */

'use strict';

import React, {
  CameraRoll,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  NavigatorIOS,
  Image,
  StatusBarIOS,
} from 'react-native';

import {
  BackButton,
  NextButton,
  TopBar,
  PhotoCropper,
  PhotoGrid,
  LocationMap,
}  from '../components';

import { SpotEditor } from '.';

import Icon from 'react-native-vector-icons/EvilIcons';

class LocationSelector extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      location: {},
    };
  }

  componentWillMount(): void {
    let location;

    navigator.geolocation.getCurrentPosition(loc => {
        location = loc.coords;

        this.setState({ location });
      },

      error => this.toEditor(),

      { enableHighAccuracy: true });
  }

  render(): ReactElement {
    let { closeModal, push, pop } = this.props;

    return (
      <View style={styles.container}>
        <TopBar
          title='Select Location'
          leftButton={
            <Icon
              name="close"
              size={26}
              color="black"
              onPress={closeModal}
              style={{ marginLeft: 8 }}
            />
          }
          rightButton={
            <NextButton
              onPress={() => push({
                component: SpotEditor,
                type: 'location',
                location: this.state.location,
                closeModal,
              })}
            />
          }
        />

        <LocationMap data={this.state.location} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { LocationSelector };
