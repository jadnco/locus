/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  NavigatorIOS,
  Image,
} from 'react-native';

import Spot from './Spot';

import TopBar from '../components/TopBar';
import SearchButton from '../components/SearchButton';

class Notifications extends Component {
  constructor(props: Object) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar title='Notifications' />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <Text>This is the Notifications view</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: 300,
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
  },
});

module.exports = Notifications;
