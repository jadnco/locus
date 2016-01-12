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

import Icon from 'react-native-vector-icons/EvilIcons';
import TopBar from '../components/TopBar';

import FollowButton from '../components/FollowButton';
import ResponsiveImage from '../components/ResponsiveImage';
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar
          title='Oscar Isaac'
          rightButton={<FollowButton />}
          style={{backgroundColor: 'transparent'}}
          leftButton={
            this.props.navigator && <BackButton onPress={() => this.props.navigator.pop()} />
          }  />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

            <ResponsiveImage
              source='http://community.carfax.com/t5/image/serverpage/image-id/48i3E88DE49FA11E2E2?v=mpbl-1'
              style={styles.image}
              height={160}>

              <View style={styles.overlay}></View>
            </ResponsiveImage>

            <View style={styles.top}>

              <Avatar size={80} style={styles.avatar} />

              <View style={{backgroundColor: 'transparent'}}>
                <Text style={styles.name}>Oscar Isaac</Text>
                <Text style={styles.handle}>@oscar</Text>

                <Text style={styles.bio}>This is the bio, it shouldn't be too long. This should be good.</Text>
                <Text style={styles.location}>Winnipeg, Canada</Text>
              </View>

              <View style={styles.countItems}>

                <View style={styles.info}>
                  <Text style={styles.infoNumber}>156</Text>
                  <Text style={styles.infoTitle}>Spots</Text>
                </View>

                <View style={styles.info}>
                  <Text style={styles.infoNumber}>869</Text>
                  <Text style={styles.infoTitle}>Following</Text>
                </View>

                <View style={styles.info}>
                  <Text style={styles.infoNumber}>896.2K</Text>
                  <Text style={styles.infoTitle}>Followers</Text>
                </View>
              </View>
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
    backgroundColor: 'white',
  },
  top: {
    backgroundColor: 'transparent',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  info: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoNumber: {
    fontSize: 17,
    color: 'black',

  },
  infoTitle: {
    color: 'grey',
  },
  avatar: {
    marginTop: -26,
    alignSelf: 'center',
    // position: 'absolute',
    // bottom: -26,
    // left: 16,
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'visible',
    //maxHeight: 100,
  },

  // TODO: Add linear gradient
  overlay: {
    width: 414,
    backgroundColor: 'black',
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  name: {
    fontSize: 17,
    color: 'black',
    alignSelf: 'center',
    marginTop: 8,
  },

  handle: {
    color: 'grey',
    alignSelf: 'center',
  },

  location: {
    color: 'grey',
    alignSelf: 'center',
    marginTop: 17,
  },

  bio: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 17,
    width: 260,
  },

  countItems: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

module.exports = Profile;
