/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import NavigationBar from 'react-native-navbar';

type Props = {
  title: string,
  style: Object,
};

class TopBar extends Component {
  props: Props;

  render(): ReactElement {
    let {title, style, ...other} = this.props;

    return (
      <View style={[styles.topBar, style]}>
        <NavigationBar
          tintColor='white'
          title={{title}} {...other} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    borderColor: '#dadbdb',
    borderBottomWidth: 1,
  },
});

export default TopBar;
