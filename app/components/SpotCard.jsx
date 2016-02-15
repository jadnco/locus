/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import ResponsiveImage from './ResponsiveImage';

import Avatar from './Avatar';

import ProfileView from '../views/Profile';
import SpotView from '../views/Spot';

type Props = {
  data: Object,
  onPress: Function,
  style: Object,
  size: number,
  push: Function,
};

class SpotCard extends Component {
  props: Props;

  render(): ReactElement {
    let { data, onPress, push, style, ...other } = this.props;
    let { title, spotter, created } = data;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.wrapper, style]}
        onPress={() => push({ component: SpotView, data })}
      >

        <View style={{ padding: 14, flexDirection: 'row' }}>
          <Text>{title}</Text>
          <Text style={{ color: 'grey', textAlign: 'right', flex: 1 }}>{created}</Text>
        </View>

        <ResponsiveImage source={data.img} style={styles.image} />

        <View style={{ padding: 10, flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={data => push({ component: ProfileView, data })}
          >

            <Avatar size={40} />
          </TouchableOpacity>
          <View>
            <Text style={styles.spotterName}>{spotter.name}</Text>
            <Text style={styles.timestamp}>@{spotter.handle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 8,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 2,
  },
  spotterName: {
    marginLeft: 8,
    marginTop: 2,
  },
  timestamp: {
    color: 'grey',
    marginLeft: 8,
  },
});

export default SpotCard;
