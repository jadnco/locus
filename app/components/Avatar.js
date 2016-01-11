'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import user from 'image!user';

class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {style, size, ...other} = this.props;

    return (
      <Image
        source={{
          uri: 'http://www.canalnoticias.com/wp-content/uploads/2015/01/Oscar-Isaac.jpg',
        }}
        style={[
          styles.avatar,
          {borderRadius: size / 2},
          style]}
        width={size}
        height={size}
        {...other} />
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'cover',
  },
});

module.exports = Avatar;
