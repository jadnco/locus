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
  data: Object,
  style: Object,
};

class ListItem extends Component {
  props: Props;

  render(): ReactElement {
    let {data, style, ...other} = this.props;

    return (
      <TouchableHighlight
        onPress={() => alert('List item pressed')}>

        <View>
        <Text>{data.title}</Text>
        </View>

      </TouchableHighlight>
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

export default ListItem;
