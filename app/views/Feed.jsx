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
  Navigator,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Avatar,
  List,
  SpotCard,
  TopBar,
  SearchButton,
  ResponsiveImage,
} from '../components';

import { Search } from '.';

type Props = {
  push: Function,
  pop: Function,
};

class Feed extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    let time = '2016-02-18T15:55:14.876Z';
    let time2 = new Date();

    this.state = {
      spots: [],
      loading: true,
    };

    this.spots = [
      {
        img: 'http://grantandgreen.de/wp-content/uploads/2015/04/1-Jaguar-F-type-Coupe-main-image-large.jpg',
        title: '2016 Jaguar F-Type R AWD',
        created: '12h',
        likesCount: 198,
        commentsCount: 27,
        description: 'A very cool shot I got while hiking up some mountains.',
        spotter: {
          name: 'Oscar Isaac',
          handle: 'oscar',
          description: 'Just a normal dude who is in a few cool movies.',
          location: 'Winnipeg, Canada',
          likesCount: 198,
          spotsCount: 97,
          followersCount: 874,
          followingCount: 12,
        },
      },
      {
        img: 'http://images.car.bauercdn.com/pagefiles/20741/mercedes-amg-gts-091.jpg',
        title: 'Mercedes-AMG GT S',
        created: '5h',
        likesCount: 21,
        commentsCount: 0,
        description: 'I went into a general store, and they wouldn\'t sell me anything specific',
        spotter: {name: 'Jane Bryant', handle: 'jjBryant'},
      },
      {
        img: 'https://s-media-cache-ak0.pinimg.com/736x/ca/05/fe/ca05fe5f23a2b3470bc82582e2e52d0a.jpg',
        title: '2015 Lamborghini Aventador Roadster',
        created: '1d',
        likesCount: 3,
        commentsCount: 1,
        description: 'Eternity is a terrible thought. I mean, where\'s it going to end?',
        spotter: {name: 'Tiffany Fowler', handle: 'tiff'},
      },
      {
        img: 'http://image.motortrend.ca/f/89683392+w640/2016-Mclaren-675LT-rear-end.jpg',
        title: 'McLaren 675LT',
        created: '65d',
        likesCount: 8958,
        commentsCount: 832,
        description: 'Why is the alphabet in that order? Is it because of that song?',
        spotter: {name: 'Carl Gomez', handle: 'CarlGomez'},
      },
      
      {
        img: 'http://www.foundonthestreet.net/wp-content/uploads/2014/08/Ferrari-458-Italia-Portrait-Detail-Front.jpg',
        title: 'Ferrari 458 Italia',
        created: '2y',
        likesCount: 145672,
        commentsCount: 6297,
        description: 'I don\'t kill flies, but I like to mess with their minds. I hold them above globes. They freak out and yell "Whooa, I\'m *way* too high."',
        spotter: {name: 'George Armstrong', handle: 'GArmstrong'},
      },
    ];
  }

  /**
   * TODO: This should load all feed data and the embedded images
   */
  componentDidMount(): void {
    console.log("Feed View Mounted");

    fetch('http://192.168.100.102:1998/api/spots', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      let spots = res.spots;

      this.setState({ spots, loading: false });
    })
    .catch(err => alert(err));
  }

  render(): ReactElement {
    let { push, pop } = this.props;

    let content = <Text>Loading...</Text>;

    if (!this.state.loading) {
      content = (
        <List
          items={this.state.spots}
          style={styles.container}
          contentInset={{ bottom: 49 }}
          automaticallyAdjustContentInsets={false}
          row={data =>
            <SpotCard {...data} push={push} pop={pop} />
          }
        />
      );
    }

    return (
      <View style={styles.container}>
        <TopBar
          title='L O C U S'
          rightButton={
            <SearchButton onPress={() => push({ component: Search })} />
          }
        />

          {content}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E4E8EA',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
  },
});

export { Feed };
