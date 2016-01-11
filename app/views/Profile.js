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
import ResponsiveImage from '../components/ResponsiveImage';
import Avatar from '../components/Avatar';

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
            <ResponsiveImage
              source={{uri: 'http://community.carfax.com/t5/image/serverpage/image-id/48i3E88DE49FA11E2E2?v=mpbl-1'}}
              style={styles.image}>

              <View
                style={{position: 'relative', backgroundColor: 'black'}}>

                <View style={styles.overlay}></View>

                <Avatar size={80} style={{position: 'absolute', bottom: -26, left: 16}} />                
              </View>
            </ResponsiveImage>
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
    flex: 1,
    flexDirection: 'row',
    overflow: 'visible',
  },

  // TODO: Add linear gradient
  overlay: {
    width: 414,
    backgroundColor: 'black',
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

module.exports = Profile;
