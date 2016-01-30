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

import NavigationBar from 'react-native-navbar';
import SearchButton from '../components/SearchButton';

type Props = {};

class Camera extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    return (
      <Text>This is the camera view</Text>
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

module.exports = Camera;
