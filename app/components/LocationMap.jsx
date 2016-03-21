/* @flow */

'use strict';

import React, {
  Animated,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

import RNMap from 'react-native-maps';

import config from '../config';

type Props = {
  data: Object,
};

Animated.createAnimatedComponent(RNMap.Marker);

class LocationMap extends Component {
  constructor(props: Props): void {
    super(props);

    this.state = {
      accuracy: 0,
    };
  }

  componentWillMount(): void {
    this.setState({ accuracy: this.props.data.accuracy });
  }

  componentWillReceiveProps(props): void {
    console.log('Updated accuracy', props.data.accuracy);
    this.setState({ accuracy: props.data.accuracy });
  }

  render(): ReactElement {
    let {
      data,
      style,
      draggableMarker,
      onDragStart,
      onDragEnd,
      scaleValue,
      ...other,
    } = this.props;

    return (
      <View style={styles.container}>
        <RNMap
          style={[{ flex: 1 }, style]}
          showsPointsOfInterest={false}
          initialRegion={{
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          {...other}
        >
          <RNMap.Circle
            center={{ latitude: data.latitude, longitude: data.longitude }}
            radius={this.state.accuracy}
            fillColor="rgba(226, 108, 35, 0.2)"
            strokeColor="transparent"
          />

          <RNMap.Marker
            coordinate={{ latitude: data.latitude, longitude: data.longitude }}
            draggable={draggableMarker}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          >
            <Animated.View
              style={{
                width: 16,
                height: 16,
                backgroundColor: '#E26C23',
                borderRadius: 16 / 2,
                transform: [{
                  scale: scaleValue || 1,
                }],
                shadowColor: "black",
                shadowOpacity: 0.2,
                shadowRadius: 1,
                shadowOffset: {
                  height: 1,
                  width: 0,
                },
              }}
            />
          </RNMap.Marker>
        </RNMap>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { LocationMap };
