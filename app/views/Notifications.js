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
import List from '../components/List';

class Notifications extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <TopBar title='Notifications' />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <Text>This is the Notifications view</Text>
          <List items={[
            {
              title: 'row 1'
            },
            {
              title: 'row 2'
            },
            {
              title: 'row 3',
            }
          ]} />
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
