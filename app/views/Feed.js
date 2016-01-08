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

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Feed View</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Feed;/*= {
  title: 'Feed View Title',
  component: Feed,
};*/
