/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

type Props = {
  size: number,
  style: Object,
};

class Avatar extends Component {
  props: Props;

  render(): ReactElement {
    let { style, size, ...other } = this.props;

    return (
      <Image
        source={{
          uri: 'http://www.canalnoticias.com/wp-content/uploads/2015/01/Oscar-Isaac.jpg',
        }}
        style={[styles.avatar, { borderRadius: size / 2 }, style]}
        width={size}
        height={size}
        {...other}
      />
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    resizeMode: 'cover',
  },
});

export default Avatar;
