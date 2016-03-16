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
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Avatar,
  BackButton,
  Comment,
  List,
  TopBar,
  ResponsiveImage,
  StatBar,
  LocationMap,
} from '../components';

import { Profile } from '.';

import config from '../config';

type Props = {
  navigator: Object,
  pop: Function,
  push: Function,
};

class Spot extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};

    this.comments = [
      {
        content: 'That clover helped my rat-fink brother steal my dream of going into space.',
        created: '2m',
        author: {name: 'Fry', handle: 'fry'},
      },
      {
        content: 'Muy macho. Hey, gringos, here comes El Zoido to ruin your drinking water!',
        created: '8d',
        author: {name: 'Zoidberg', handle: 'zoidberg'},
      },
      {
        content: 'Bender, you should be more ashamed of yourself than usual.',
        created: '4h',
        author: {name: 'Amy', handle: 'amy'},
      },
      {
        content: 'Those delightful birds with their chirp chirp chirp and their tweet tweet splat.',
        created: '6m',
        author: {name: 'Professor', handle: 'professor'},
      },
      {
        content: 'Now, be careful, Fry. And if you kill anyone, make sure to eat their heart to gain their courage. Their rich tasty courage.',
        created: '58s',
        author: {name: 'Professor', handle: 'professor'},
      },
    ];
  }

  render(): ReactElement {
    let { push, pop, data } = this.props;
    let visual;

    if (data.type === 'location') {
      visual = (
        <LocationMap
          data={data.location}
          zoom={true}
          style={{ height: 300 }}
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
      <View style={styles.container}>
        <TopBar
          title={data.title}
          style={{ borderBottomWidth: 0 }}
          leftButton={<BackButton onPress={pop} />}
        />

        <StatBar />

        <ScrollView
          contentContainerStyle={styles.scroll}
          contentInset={{ bottom: 49 }}
          automaticallyAdjustContentInsets={false}
        >

          <View>
            {visual}
          </View>

          <View style={{ padding: 10 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => push({ component: Profile, data: data.spotter })}
            >

              <Avatar size={40} />
              <Text>{data.spotter.name}</Text>
              <Text>@{data.spotter.handle}</Text>

            </TouchableOpacity>
          </View>

          <View>
            <List
              items={this.comments}
              style={styles.container}
              scrollEnabled={false}
              contentInset={{ bottom: 49 }}
              automaticallyAdjustContentInsets={false}
              row={comment => <Comment {...comment} />}
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
  },
});

export { Spot };
