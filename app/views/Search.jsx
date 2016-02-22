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
  NavigatorIOS,
  Image,
} from 'react-native';

import { BackButton, TopBar }  from '../components';

type Props = {
  pop: Function,
  push: Function,
};

class Search extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    let { pop } = this.props;

    return (
      <View>
        <TopBar
          title='Search'
          leftButton={<BackButton onPress={pop} />}
        />

        <ScrollView
          contentInset={{ bottom: 49 }}
          automaticallyAdjustContentInsets={false}
          style={styles.scrollView}
        >

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

export { Search };
