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
  TouchableHighlight,
} from 'react-native';

import { BackButton, TopBar, List }  from '../components';

import config from '../config';

type Props = {
  pop: Function,
  push: Function,
};

class Likes extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount(): void {
    fetch(`http://${config.address}:1998/api/spots/${this.props._id}/likes`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      let users = res.likes.users;

      console.log('USERs', users);

      this.setState({ users, loading: false });
    })
    .catch(err => console.log(err) && alert(err));
  }

  render(): ReactElement {
    let { toggle, pop, push } = this.props;
    let content = <Text>Loading...</Text>;

    if (!this.state.loading) {
      content = (
        <List
          items={this.state.users}
          style={styles.container}
          contentInset={{ bottom: 49 }}
          automaticallyAdjustContentInsets={false}
          row={data => {
            return (
              <TouchableHighlight
                style={{ padding: 12, borderBottomWidth: 1, borderColor: '#CCC' }}
                onPress={() => {}}
              >
                <View>
                  <Text>{data.name}</Text>
                  <Text style={{ color: '#aaa' }}>{data.handle}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
        />
      );
    }

    return (
      <View style={styles.container}>
        <TopBar title='Likes' leftButton={<BackButton onPress={pop} />} />

        <View style={styles.container}>

          {content}
        </View>

        
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
  scrollView: {
    backgroundColor: 'white',
  },
});

export { Likes };
