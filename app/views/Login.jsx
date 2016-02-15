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

class Login extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>

        <ScrollView
          style={styles.container}
          automaticallyAdjustContentInsets={false}
        >

          <Text>Login with Twitter or Facebook.</Text>
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

export default Login;
