'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import user from 'image!user';

class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  _toggleActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    let {style, ...other} = this.props;
    return (
      <Image
        source={{
          uri: 'http://www.canalnoticias.com/wp-content/uploads/2015/01/Oscar-Isaac.jpg',
        }}
        style={[styles.avatar, style]}
        width={80}
        height={80}
        {...other} />
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'cover',
  },
});

module.exports = Avatar;
