/* @flow */

'use strict';

import React, {
  Animated,
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
      markerScaleValue: new Animated.Value(1),
    };
  }

  componentWillMount(): void {
    let location = this.props.location || null;

    if (!location) {
      navigator.geolocation.getCurrentPosition(loc => {
        location = loc.coords;

        this.setState({ location });
      },

      error => console.log(error),

      { enableHighAccuracy: true });
    } else {
      this.setState({ location });
    }
  }

  dragMarkerStart(): void {
    this.setState({ location: { accuracy: 0 } });

    Animated.spring(this.state.markerScaleValue, {
      toValue: 5,
      stiffness: 300,
      damping: 50,
      duration: 25,
    }).start();
  }

  dragMarkerEnd(coordinate): void {

    // Update the location
    this.setState({
      location: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      },
    });

    Animated.spring(this.state.markerScaleValue, {
      toValue: 1,
      stiffness: 300,
      damping: 50,
      duration: 25,
    }).start();
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

        <LocationMap
          data={this.state.location}
          draggableMarker={true}
          onDragStart={this.dragMarkerStart.bind(this)}
          onDragEnd={(e) => this.dragMarkerEnd(e.nativeEvent.coordinate)}
          scaleValue={this.state.markerScaleValue}
        />
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
