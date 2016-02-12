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
  TouchableOpacity,
  SegmentedControlIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import TopBar from '../components/TopBar';

import FollowButton from '../components/FollowButton';
import ResponsiveImage from '../components/ResponsiveImage';
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import SpotCard from '../components/SpotCard';
import List from '../components/List';
import ProfileTabBar from '../components/ProfileTabBar';

type Props = {
  navigator: Object,
};

class Profile extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};

    this.spots = [
    {
        img: 'http://grantandgreen.de/wp-content/uploads/2015/04/1-Jaguar-F-type-Coupe-main-image-large.jpg',
        title: 'Jaguar F-Type R',
      },
      {
        img: 'https://s-media-cache-ak0.pinimg.com/736x/ca/05/fe/ca05fe5f23a2b3470bc82582e2e52d0a.jpg',
        title: 'Aventador',
      },
      {
        img: 'http://image.motortrend.ca/f/89683392+w640/2016-Mclaren-675LT-rear-end.jpg',
        title: 'McLaren 675LT',
      },
      {
        img: 'http://grantandgreen.de/wp-content/uploads/2015/04/1-Jaguar-F-type-Coupe-main-image-large.jpg',
        title: 'Jaguar F-Type R',
      },
      {
        img: 'http://www.foundonthestreet.net/wp-content/uploads/2014/08/Ferrari-458-Italia-Portrait-Detail-Front.jpg',
        title: 'Ferrari 458 Italia',
      },
      {
        img: 'http://images.car.bauercdn.com/pagefiles/20741/mercedes-amg-gts-091.jpg',
        title: 'Mercedes-AMG GT S',
      },
    ];
  }

  render(): ReactElement {
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
              height={200}>

              <View style={styles.overlay}></View>
            </ResponsiveImage>

            <View style={styles.top}>

              

              <View style={styles.user}>
                <Avatar size={80} style={styles.avatar} />

                <View>
                  <Text style={styles.name}>Oscar Isaac</Text>
                  <Text style={styles.handle}>@oscar</Text>

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
                 
              </View>

              <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat mollis dolor.</Text>
              <Text style={styles.location}>Winnipeg, Canada</Text>

              
            </View>

            <ScrollableTabView
              renderTabBar={() => <ProfileTabBar />}>

              <List
                tabLabel='spots'
                items={this.spots}
                scrollEnabled={false}
                row={data => <SpotCard data={data} navigator={this.props.navigator} />}
                style={styles.listView}
                contentInset={{bottom: 49}}
                automaticallyAdjustContentInsets={false} />

              <View height={600} tabLabel='likes'>
                <Text>Likes</Text>
              </View>
            </ScrollableTabView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
    backgroundColor: 'red',
  },
  listView: {
    backgroundColor: '#E4E8EA',
  },
  top: {
    backgroundColor: 'transparent',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  info: {
    marginRight: 20,
  },
  infoNumber: {
    fontSize: 17,
    color: 'black',

  },
  infoTitle: {
    color: 'grey',
  },
  user: {
    flexDirection: 'row',
    marginTop: -50,
  },
  avatar: {
    //marginTop: -26,
    marginLeft: 8,
    marginRight: 14,
    marginTop: 12,
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
    color: 'white',
    //marginTop: 8,
  },

  handle: {
    color: 'grey',
    marginBottom: 7,
  },

  location: {
    color: 'grey',
    marginTop: 14,
    paddingHorizontal: 8,
  },

  bio: {
    color: 'black',
    marginTop: 14,
    paddingHorizontal: 8,
    //width: 220,
  },

  countItems: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
  },

  view: {
    paddingHorizontal: 8,
  },
});

export default Profile;
