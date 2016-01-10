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
    return (
      <View style={styles.container}>
        <TopBar
          title='2016 Jaguar F-Type R Coupé'
          style={{borderBottomWidth: 0}}
          leftButton={
            <BackButton onPress={() => alert('BackButton pressed')} />
          } />

        <StatBar />

        <ScrollView
          contentContainerStyle={styles.scroll}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <View>
            <ResponsiveImage
              source={{uri: 'http://www.diseno-art.com/news_content/wp-content/uploads/2013/11/Jaguar-F-Type-Coupe-1.jpg'}}
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
