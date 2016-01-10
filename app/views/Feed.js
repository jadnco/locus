'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  Navigator,
  Image,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import SearchButton from '../components/SearchButton';

import Search from './Search';

import CarOne from '../images/car-1.jpeg';
import CarTwo from '../images/car-2.jpeg';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{title: 'L O C U S'}}
          rightButton={
            <SearchButton onPress={() => {
              this.props.navigator.push({
                component: Search,
              });
            }} />
          } />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <View>
            <Image source={CarTwo} style={styles.image} />
          </View>
          <View>
            <Text>This is the image title</Text>
          </View>
          <View>
            <Text>These are the comments.</Text>
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
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
  },
});

module.exports = Feed;
