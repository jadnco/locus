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

import CarOne from '../images/car-1.jpeg';

import NavigationBar from 'react-native-navbar';
import SearchButton from '../components/SearchButton';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          barTintColor='white'
          title={{title: 'L O C U S'}}
          rightButton={<SearchButton onPress={() => alert('search clicked')} />} />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <View>
            <Image source={CarOne} style={styles.image} />
          </View>
          <View>
            <Text>This is the image title</Text>
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
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
  },
});

module.exports = Profile;
