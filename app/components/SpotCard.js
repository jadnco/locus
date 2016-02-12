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
    let {data, onPress, push, style, ...other} = this.props;
    let {title, spotter} = data;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.wrapper, style]}
        onPress={() => push({component: SpotView, data})}>

        <ResponsiveImage source={data.img} style={styles.image} />

        <View style={{padding: 10, flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={data => push({component: ProfileView, data})}>

            <Avatar size={40} />
          </TouchableOpacity>
          <Text style={{marginTop: 11, marginLeft: 20}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 8,
    backgroundColor: '#FFFFFF',
  },
});

export default SpotCard;
