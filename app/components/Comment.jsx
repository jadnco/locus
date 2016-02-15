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

import Avatar from './Avatar';

type Props = {
  content: string,
  author: Object,
  created: string,
};

class Comment extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);
  }

  render(): ReactElement {
    let { content, author, created, ...other } = this.props;

    return (
      <View
        style={{ flexDirection: 'row', padding: 8, borderTopWidth: 1, borderColor: '#dadbdb' }}
      >

        <Avatar
          size={40}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Futurama_106_-_A_Fishful_of_Dollars.jpg' }}
        />

        <View style={{ marginLeft: 8, flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{author.name}</Text>
          <Text style={{ color: 'grey' }}>@{author.handle}</Text>
          <Text style={{ marginTop: 8 }}>{content}</Text>
          <Text style={{ color: 'grey', marginTop: 8 }}>{created}</Text>
        </View>
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
