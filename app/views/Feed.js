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

import SpotView from './Spot';

import SearchView from './Search';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.spots = [
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
        img: 'http://images.car.bauercdn.com/pagefiles/20741/mercedes-amg-gts-091.jpg',
        title: 'Mercedes-AMG GT S',
      },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar
          title='L O C U S'
          rightButton={
            <SearchButton onPress={() => {
              this.props.navigator.push({
                component: SearchView,
              });
            }} />
          } />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          {this.spots.map((spot, i) => {
            return (
              <View key={i}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    this.props.navigator.push({
                      component: SpotView,
                      data: spot,
                    });
                  }}>

                  <ResponsiveImage source={{uri: spot.img}} style={styles.image} />
                </TouchableOpacity>

                <View style={{padding: 10}}>
                  <Text>{spot.title}</Text>
                </View>
              </View>
            );
          })}
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
  },
});

module.exports = Feed;
