/* @flow */

'use strict';

import React, {
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

class LocationMap extends Component {
  constructor(props: Props): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    let { data, zoom, style } = this.props;

    return (
      <View style={styles.container}>
        <RNMap
          style={[{ flex: 1 }, style]}
          showsPointsOfInterest={false}
          zoomEnabled={zoom}
          initialRegion={{
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
        >
          <RNMap.Circle
            center={{ latitude: data.latitude, longitude: data.longitude }}
            radius={data.accuracy}
            fillColor="rgba(204, 155, 71, 0.2)"
            strokeColor="transparent"
          />

          <RNMap.Marker
            coordinate={{ latitude: data.latitude, longitude: data.longitude }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                backgroundColor: 'rgba(204, 155, 71, 1)',
                borderRadius: 6,
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
