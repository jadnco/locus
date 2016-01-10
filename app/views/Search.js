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

import NavigationBar from 'react-native-navbar';

import BackButton from '../components/BackButton';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <NavigationBar
          title={{title: 'Search'}}
          leftButton={
            <BackButton onPress={() => this.props.navigator.pop()} />
          } />

        <ScrollView
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

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
});

module.exports = Search;
