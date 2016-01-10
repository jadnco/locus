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
  TouchableHighlight,
  Image,
  NavigatorIOS,
} from 'react-native';

import TestImage from '../images/test-post.jpeg';
import Spot from './Spot';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavigatorIOS initialRoute={{title: 'yolo', component: Spot}}></NavigatorIOS>
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
