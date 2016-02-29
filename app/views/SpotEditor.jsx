/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

import { NextButton, TopBar } from '../components';

import { Search } from '.';

class SpotEditor extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    let { push, ...other } = this.props;

    return (
      <View style={styles.container}>

        <TopBar
          title='Spot Editor'
          rightButton={
            <NextButton onPress={() => push({ component: Search })} />
          }
        />

        <ScrollView
          style={styles.container}
          automaticallyAdjustContentInsets={false}
        >

          <Text>New Spot Editor</Text>
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
});

export { SpotEditor };