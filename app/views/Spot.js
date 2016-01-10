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
  Image,
} from 'react-native';

import TestImage from '../images/test-post.jpeg';

class Spot extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>This is the post title</Text>
        </View>
        <View style={styles.main}>
          <Image source={TestImage} style={styles.image} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  main: {
    flex: 1,
  },
  image: {
    backgroundColor: '#CCCCCC',
    resizeMode: 'cover',
    height: 400,
    width: null,
  },
});

module.exports = Spot;/*= {
  title: 'Feed View Title',
  component: Feed,
};*/
