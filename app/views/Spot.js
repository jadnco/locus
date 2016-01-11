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
import BackButton from '../components/BackButton';
import StatBar from '../components/StatBar';

import ResponsiveImage from '../components/ResponsiveImage';

import CarOne from 'image!car-1';

class Spot extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {title, img} = this.props.data;

    return (
      <View style={styles.container}>
        <TopBar
          title={title}
          style={{borderBottomWidth: 0}}
          leftButton={
            <BackButton onPress={() => this.props.navigator.pop()} />
          } />

        <StatBar />

        <ScrollView
          contentContainerStyle={styles.scroll}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <View>
            <ResponsiveImage
              source={{uri: img}}
              style={styles.image} />
          </View>

          <Text style={{padding: 20}}>Some text</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
  },
});

module.exports = Spot;
