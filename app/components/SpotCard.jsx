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

import ResponsiveImage from './ResponsiveImage';
import Icon from 'react-native-vector-icons/EvilIcons';

import Avatar from './Avatar';

import ProfileView from '../views/Profile';
import SpotView from '../views/Spot';

type Props = {
  style: Object,
  size: number,
  push: Function,
  pop: ?Function,

  title: string,
};

class SpotCard extends Component {
  props: Props;

  showShareActionSheet(): void {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://google.ca',
      message: this.props.title,
      tintColor: 'black',
    }, (error) => {
      console.log(error)
    }, (success, method) => {
      console.log(`Shared with ${method}`);
    });
  }

  render(): ReactElement {
    let { push, pop, style, ...data } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.wrapper, style]}
        onPress={() => push({ component: SpotView, ...data })}
      >

        <View style={{ padding: 14, flexDirection: 'row' }}>
          <Text>{data.title}</Text>
          <Text style={{ color: 'grey', textAlign: 'right', flex: 1 }}>{data.created}</Text>
        </View>

        <ResponsiveImage source={data.img} style={styles.image} />

        <View style={{ flexDirection: 'column' }}>

          <View style={{ flexDirection: 'column', padding: 14 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => push({ component: ProfileView, ...data.spotter })}
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
              <Icon name="star" size={30} color="#AAA" />
              <Text style={{ marginLeft: 8, marginTop: 4, color: '#AAA' }}>{data.likesCount}</Text>
            </View>
            <View style={{ marginLeft: 16, flexDirection: 'row' }}>
              <Icon name="comment" size={30} color="#AAA" />
              <Text style={{ marginLeft: 8, marginTop: 4, color: '#AAA' }}>{data.commentsCount}</Text>
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

export default SpotCard;
