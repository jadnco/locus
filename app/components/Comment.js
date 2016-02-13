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

import user from 'image!user';

class Comment extends Component {
  constructor(props: Object): void {
    super(props);
  }

  render(): ReactElement {
    let {...other} = this.props;
    let {content, author, created} = this.props.data;

    return (
      <View>
        <Text>{author.name}</Text>
        <Text>{content}</Text>
        <Text>{created}</Text>
      </View>
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

export default Comment;
