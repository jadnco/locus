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

import TopBar from '../components/TopBar';

import CarOne from '../images/car-1.jpeg';

class Spot extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TopBar title='Post' />
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

module.exports = Spot;
