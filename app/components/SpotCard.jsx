/* @flow */

'use strict';

import React, {
  ActionSheetIOS,
  AlertIOS,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Avatar,
  LocationMap,
  ResponsiveImage,
} from '.';

import {
  Profile,
  Spot,
  Likes,
} from '../views';

import { formatNumber, formatTime } from '../utils';

import Icon from 'react-native-vector-icons/EvilIcons';

import Store from 'react-native-simple-store';

import config from '../config';

type Props = {
  style: Object,
  size: number,
  push: Function,
  pop: ?Function,
  data: Object,
};

type State = {
  liked: boolean,
};

class SpotCard extends Component {
  props: Props;
  state: State;
  USER_KEY: string = '@Locus:user';

  constructor(props: Props): void {
    super(props);

    // This should send a request and check if the
    // authed user liked this Spot

    this.state = {
      liked: false,
    };
  }

  componentWillMount(): void {
    this.setState({ likesCount: this.props.data.likesCount });
  }

  componentDidMount(): void {
    // TODO: Check if this Spot is liked by the authed user
  }

  toggleLike() {

    // TODO: Like should send request of authed users
    
    Store.get(this.USER_KEY)
      .then(user => {
        let me = this.props.data;

        return fetch(`http://${config.address}:1998/api/spots/${me._id}/likes`, {
          method: this.state.liked ? 'DELETE' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: user._id }),
        });
      })
      .then(() => {
        this.setState({
          liked: !this.state.liked,
          likesCount: this.state.likesCount + (this.state.liked ? -1 : 1),
        });
      });
  }

  showShareActionSheet(): void {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://google.ca',
      message: this.props.data.title,
      tintColor: 'black',
    }, (error) => {
      console.log(error);
    }, (success, method) => {
      console.log(`Shared with ${method}`);
    });
  }

  delete(): void {
    AlertIOS.alert('Delete this Spot?', this.props.data.title, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => {
        fetch(`http://${config.address}:1998/api/spots/${this.props.data._id}`, {
          method: 'DELETE',
        })
        .then(AlertIOS.alert('Spot has been deleted.'))
        .catch(error => console.log(error));
      },
    }]);
  }

  render(): ReactElement {
    let { push, pop, style, data } = this.props;
    let visual;

    if (data.type === 'location') {
      visual = (
        <LocationMap
          data={data.location}
          zoomEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          style={{ height: 200 }}
        />
      );
    } else {
      visual = (
        <ResponsiveImage
          source={{ uri: `http://${config.address}:1998/uploads/${data.photo.source}` }}
          style={styles.image}
        />
      );
    }

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.wrapper, style]}
        onPress={() => push({ component: Spot, data })}
        onLongPress={this.delete.bind(this)}
      >
        <View style={{ padding: 14, flexDirection: 'row' }}>

          <View>
            <Text>{data.title}</Text>

            <Text style={{textAlign: 'left'}}>
              <Icon name="location" size={17} color="grey" style={{  }} />
              <Text style={{ color: 'grey' }}>{data.location.city || 'null'}, {data.location.country || 'null'}</Text>
            </Text>
          </View>

          <Text style={{ color: 'grey', textAlign: 'right', flex: 1 }}>{formatTime(data.created)}</Text>
        </View>

        {visual}

        <View style={{ flexDirection: 'column' }}>

          <View style={{ flexDirection: 'column', padding: 14 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => push({ component: Profile, data: data.spotter })}
              >

                <Avatar size={40} />
              </TouchableOpacity>

              <View>
                <Text style={styles.spotterName}>{data.spotter.name}</Text>
                <Text style={styles.timestamp}>@{data.spotter.handle}</Text>
              </View>
            </View>

            <View style={{ paddingTop: 14 }}>
              <Text>{data.caption}</Text>
            </View>
          </View>

          <View style={{ padding: 14, borderTopWidth: 1, borderColor: '#EEE', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.toggleLike.bind(this)}>
                <Icon name="star" size={30} color={this.state.liked ? '#E26C23' : '#AAA'} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => push({ component: Likes, data })}>
                <Text style={{ marginLeft: 8, marginTop: 4, color: '#AAA' }}>{formatNumber(this.state.likesCount)}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 16, flexDirection: 'row' }}>
              <Icon name="comment" size={30} color="#AAA" />
              <Text style={{ marginLeft: 8, marginTop: 4, color: '#AAA' }}>{formatNumber(data.commentsCount)}</Text>
            </View>

            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={this.showShareActionSheet.bind(this)}
            >

              <Icon
                name="share-apple"
                size={30}
                color="#AAA"
                style={{ textAlign: 'right' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 6,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0.8,
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  spotterName: {
    marginLeft: 8,
    marginTop: 2,
  },
  timestamp: {
    color: 'grey',
    marginLeft: 8,
  },
});

export { SpotCard };
