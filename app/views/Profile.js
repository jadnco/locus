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
  TouchableOpacity,
} from 'react-native';

import TopBar from '../components/TopBar';

import FollowButton from '../components/FollowButton';

import CarOne from '../images/car-1.jpeg';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar
          title='oscar'
          rightButton={<FollowButton />} />

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
