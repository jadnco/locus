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
} from 'react-native';

import TopBar from '../components/TopBar';
import SearchButton from '../components/SearchButton';
import ResponsiveImage from '../components/ResponsiveImage';

import Search from './Search';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar
          title='L O C U S'
          rightButton={
            <SearchButton onPress={() => {
              this.props.navigator.push({
                component: Search,
              });
            }} />
          } />

        <ScrollView
          style={styles.container}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <View>
            <ResponsiveImage
              source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/ca/05/fe/ca05fe5f23a2b3470bc82582e2e52d0a.jpg'}}
              style={styles.image} />
              <Text>These are the comments.</Text>
          </View>
          <View>
            
            <ResponsiveImage
              source={{uri: 'http://image.motortrend.ca/f/89683392+w640/2016-Mclaren-675LT-rear-end.jpg'}}
              style={styles.image} />
              <Text>These are the comments.</Text>
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
  },
  image: {
    flex: 1,
    flexDirection: 'row',
  },
});

module.exports = Feed;
