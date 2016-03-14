/**
 * After a photo is selected and edited, this view
 * allows the Spot to be edited with a title description etc.
 * This is where the Spot can finally be publishe
 *
 * @flow
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

import { BackButton, NextButton, TopBar } from '../components';

import { Search } from '.';

class SpotEditor extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    let { push, pop, ...other } = this.props;

    return (
      <View style={styles.container}>

        <TopBar
          title='Spot Editor'
          leftButton={<BackButton onPress={pop} />}
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
    backgroundColor: 'white',
  },
});

export { SpotEditor };
