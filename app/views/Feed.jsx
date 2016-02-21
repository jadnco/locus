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

    this.state = {
      spots: [],
      loading: true,
    };
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
