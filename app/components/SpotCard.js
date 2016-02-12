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
  navigator: Object,
};

class SpotCard extends Component {
  props: Props;

  _isNestedRoute(): boolean {
    return this.props.navigator.getCurrentRoutes().length > 1;
  }

  _toProfileView(data: Object): void {
    !this._isNestedRoute() && this.props.navigator.push({component: ProfileView, data});
  }

  render(): ReactElement {
    let {data, onPress, navigator, style, ...other} = this.props;
    let {title, spotter} = data;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.wrapper, style]}
        onPress={() => {
          navigator.push({component: SpotView, data});
        }}>

        <ResponsiveImage source={data.img} style={styles.image} />

        <View style={{padding: 10, flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={data => this._toProfileView(data)}>

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
