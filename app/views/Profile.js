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

import TestImage from '../images/test-post.jpeg';

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
            <Image source={TestImage} style={styles.image} />
          </View>
          <View>
            <Text>This is the image title</Text>
          </View>
          <View>
            <Text>These are the comments.</Text>
            <Image source={TestImage} style={styles.image} />
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

module.exports = Profile;/*= {
  title: 'Feed View Title',
  component: Feed,
};*/
