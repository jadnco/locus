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
    let { style, source, size, ...other } = this.props;

    return (
      <Image
        source={{
          uri: source,
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

export { Avatar };
