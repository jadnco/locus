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

import CarOne from '../images/car-1.jpeg';

class Spot extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <TopBar
          title='2016 BMW M4 Coupé'
          style={{borderBottomWidth: 0}}
          leftButton={
            <BackButton onPress={() => alert('BackButton pressed')} />
          } />

        <StatBar />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <View>
            <Image source={CarOne} style={styles.image} />
          </View>
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
    flexDirection: 'row',
    resizeMode: 'cover',
  },
});

module.exports = Spot;
