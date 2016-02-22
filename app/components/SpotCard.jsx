/* @flow */

'use strict';

import React, {
  ActionSheetIOS,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Avatar, ResponsiveImage } from '.';
import { Profile, Spot } from '../views';

import { formatNumber, formatTime } from '../utils';

import Icon from 'react-native-vector-icons/EvilIcons';

type Props = {
  style: Object,
  size: number,
  push: Function,
  pop: ?Function,

  title: string,
};

type State = {
  liked: boolean,
};

class SpotCard extends Component {
  props: Props;
  state: State;

  constructor(props: Props): void {
    super(props);

    this.state = {
      liked: false,
    };
  }

  toggleLike() {
    // Send request to server
    this.setState({ liked: !this.state.liked });
  }

  showShareActionSheet(): void {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://google.ca',
      message: this.props.title,
      tintColor: 'black',
    }, (error) => {
      console.log(error);
    }, (success, method) => {
      console.log(`Shared with ${method}`);
    });
  }

  render(): ReactElement {
    let { push, pop, style, ...data } = this.props;

    console.log(data);

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.wrapper, style]}
        onPress={() => push({ component: Spot, ...data })}
      >
        <View style={{ padding: 14, flexDirection: 'row' }}>
          <Text>{data.title}</Text>
          <Text style={{ color: 'grey', textAlign: 'right', flex: 1 }}>{formatTime(data.created)}</Text>
        </View>

        <ResponsiveImage
          source={'http://192.168.100.102:1998/uploads/' + data.photo}
          style={styles.image}
        />

        <View style={{ flexDirection: 'column' }}>

          <View style={{ flexDirection: 'column', padding: 14 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => push({ component: Profile, ...data.spotter })}
              >

                <Avatar size={40} />
              </TouchableOpacity>

              <View>
                <Text style={styles.spotterName}>{data.spotter.name}</Text>
                <Text style={styles.timestamp}>@{data.spotter.handle}</Text>
              </View>
            </View>

            <View style={{ paddingTop: 14 }}>
              <Text>{data.description}</Text>
            </View>
          </View>

          <View style={{ padding: 14, borderTopWidth: 1, borderColor: '#EEE', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.toggleLike.bind(this)}>
                <Icon name="star" size={30} color={this.state.liked ? '#CC9B47' : '#AAA'} />
              </TouchableOpacity>
              <Text style={{ marginLeft: 8, marginTop: 4, color: '#AAA' }}>{formatNumber(data.likesCount)}</Text>
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
    margin: 8,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 2,
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
