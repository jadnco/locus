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

class Avatar extends Component {
  constructor(props: Object): void {
    super(props);
  }

  render(): ReactElement {
    let {data, onPress, style, size, ...other} = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}>

        <ResponsiveImage source={data.img} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
});

module.exports = Avatar;
