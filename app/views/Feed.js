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

import TopBar from '../components/TopBar';
import SearchButton from '../components/SearchButton';
import ResponsiveImage from '../components/ResponsiveImage';
import Avatar from '../components/Avatar';

import SpotView from './Spot';
import SearchView from './Search';
import ProfileView from './Profile';

import SpotCard from '../components/SpotCard';

import List from '../components/List';

type Props = {
  push: Function,
  pop: Function,
};

class Feed extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};

    this.spots = [
      {
        img: 'http://grantandgreen.de/wp-content/uploads/2015/04/1-Jaguar-F-type-Coupe-main-image-large.jpg',
        title: '2016 Jaguar F-Type R AWD',
        created: '12h',
        spotter: {name: 'Jaden Dessureault', handle: 'jadnco'},
      },
      {
        img: 'http://images.car.bauercdn.com/pagefiles/20741/mercedes-amg-gts-091.jpg',
        title: 'Mercedes-AMG GT S',
        created: '5h',
        spotter: {name: 'Jaden Dessureault', handle: 'jadnco'},
      },
      {
        img: 'https://s-media-cache-ak0.pinimg.com/736x/ca/05/fe/ca05fe5f23a2b3470bc82582e2e52d0a.jpg',
        title: '2015 Lamborghini Aventador Roadster',
        created: '1d',
        spotter: {name: 'Jaden Dessureault', handle: 'jadnco'},
      },
      {
        img: 'http://image.motortrend.ca/f/89683392+w640/2016-Mclaren-675LT-rear-end.jpg',
        title: 'McLaren 675LT',
        created: '65d',
        spotter: {name: 'Jaden Dessureault', handle: 'jadnco'},
      },
      
      {
        img: 'http://www.foundonthestreet.net/wp-content/uploads/2014/08/Ferrari-458-Italia-Portrait-Detail-Front.jpg',
        title: 'Ferrari 458 Italia',
        created: '2y',
        spotter: {name: 'Jaden Dessureault', handle: 'jadnco'},
      },
    ];
  }

  render(): ReactElement {
    let {push, pop} = this.props;

    return (
      <View style={styles.container}>
        <TopBar
          title='L O C U S'
          rightButton={
            <SearchButton onPress={() => push({component: SearchView})} />
          } />

          <List
            items={this.spots}
            style={styles.container}
            contentInset={{bottom: 49}}
            automaticallyAdjustContentInsets={false}
            row={data =>
              <SpotCard data={data} push={push} pop={pop} />
            } />

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

export default Feed;
