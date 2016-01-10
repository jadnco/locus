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
} from 'react-native';

import TopBar from '../components/TopBar';

import BackButton from '../components/BackButton';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <TopBar
          title='Search'
          leftButton={
            <BackButton onPress={() => this.props.navigator.pop()} />
          } />

        <ScrollView
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}
          style={styles.scrollView}>

          <View style={styles.container}>
            <Text>This is the Search view</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    height: 900,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});

module.exports = Search;
