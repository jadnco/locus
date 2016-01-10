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

import NavigationBar from 'react-native-navbar';
import SearchButton from '../components/SearchButton';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
            barTintColor='white'
            title={{title: 'Messages'}} />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <Text>This is the Messages view</Text>
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

module.exports = Messages;
