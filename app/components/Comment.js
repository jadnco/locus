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
      <Text></Text>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: 'white',
    resizeMode: 'cover',
  },
});

module.exports = Comment;