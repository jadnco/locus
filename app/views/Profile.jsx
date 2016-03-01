/* @flow */

'use strict';

import React, {
  AsyncStorage,
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

import {
  Avatar,
  BackButton,
  FollowButton,
  List,
  ProfileTabBar,
  TopBar,
  ResponsiveImage,
  SpotCard,
} from '../components';

import Icon from 'react-native-vector-icons/EvilIcons';

import ScrollableTabView from 'react-native-scrollable-tab-view';

type Props = {
  push: Function,
  pop: Function,

  // From response
  name: string,
  handle: string,
  description: string,
  location: string,
  likesCount: number,
  spotsCount: number,
  followersCount: number,
  followingCount: number,
};

class Profile extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      loaded: false,
      spots: [],
    };
  }

  componentDidMount() {

    // TODO: Get user spots
    fetch(`http://10.28.163.16:1998/api/users/${this.props._id}/spots`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      let spots = res.spots;

      this.setState({ spots, loaded: true });
    })
    .catch(err => alert(err));
  }

  render(): ReactElement {
    let { push, pop, ...data } = this.props;
    let spots = <Text>Loading...</Text>;

    if (this.state.loaded) {
      spots = (
        <List
          tabLabel="Spots"
          items={this.state.spots}
          scrollEnabled={false}
          row={data => <SpotCard {...data} push={push} />}
          style={styles.listView}
          contentInset={{ bottom: 49 }}
          automaticallyAdjustContentInsets={false}
        />
      );
    }

    return (
      <View style={styles.container}>
        <TopBar
          title={data.name}
          rightButton={<FollowButton />}
          style={{ backgroundColor: 'transparent' }}
          leftButton={pop && <BackButton onPress={pop} />}
        />

        <ScrollView
          style={styles.container}
          contentInset={{ bottom: 49 }}
          automaticallyAdjustContentInsets={false}
        >

            <ResponsiveImage
              source='http://community.carfax.com/t5/image/serverpage/image-id/48i3E88DE49FA11E2E2?v=mpbl-1'
              style={styles.image}
              height={200}
            >

              <View style={styles.overlay}></View>
            </ResponsiveImage>

            <View style={styles.top}>

              <View style={styles.user}>
                <Avatar size={80} style={styles.avatar} />

                <View>
                  <Text style={styles.name}>{data.name}</Text>
                  <Text style={styles.handle}>@{data.handle}</Text>

                  <View style={styles.countItems}>
                    <View style={styles.info}>
                      <Text style={styles.infoNumber}>{data.spotsCount}</Text>
                      <Text style={styles.infoTitle}>Spots</Text>
                    </View>

                    <View style={styles.info}>
                      <Text style={styles.infoNumber}>{data.followingCount}</Text>
                      <Text style={styles.infoTitle}>Following</Text>
                    </View>

                    <View style={styles.info}>
                      <Text style={styles.infoNumber}>{data.followersCount}</Text>
                      <Text style={styles.infoTitle}>Followers</Text>
                    </View>
                  </View>
                </View>
              </View>

              <Text style={styles.bio}>{data.description}</Text>
              <Text style={styles.location}>{data.location}</Text>
            </View>

            <ScrollableTabView renderTabBar={() => <ProfileTabBar />}>
              <View tabLabel={`Spots (${data.spotsCount})`}>
                {spots}
              </View>

              <View height={100} tabLabel={`Likes (${data.likesCount})`}>
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
    borderWidth: 2,
    borderColor: 'white',
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

export { Profile };
