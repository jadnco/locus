'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
} from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Profile View with some more test</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 1,
    backgroundColor: '#AAAAAA',
  },
  image: {
    backgroundColor: '#CCCCCC',
    flex: 1,
    resizeMode: 'cover',
  },
});

module.exports = Profile;/*= {
  title: 'Feed View Title',
  component: Feed,
};*/
