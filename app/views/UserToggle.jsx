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
  TouchableOpacity,
} from 'react-native';

import { Avatar, BackButton, TopBar, List }  from '../components';

import config from '../config';

type Props = {
  pop: Function,
  push: Function,
};

class UserToggle extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount(): void {
    fetch(`http://${config.address}:1998/api/users`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      let users = res.users;

      this.setState({ users, loading: false });
    })
    .catch(err => alert(err));
  }

  render(): ReactElement {
    let { toggle, current, pop, push } = this.props;
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
              <TouchableOpacity
                style={[
                  { padding: 12, borderBottomWidth: 1, borderColor: '#CCC' },
                  current._id === data._id && { backgroundColor: '#efefef' }
                ]}
                onPress={() => toggle(data)}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Avatar size={40} source={data.avatar} />

                  <View style={{ marginLeft: 8 }}>
                    <Text>{data.name}</Text>
                    <Text style={{ color: '#aaa' }}>{data.handle}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      );
    }

    return (
      <View style={styles.container}>
        <TopBar title='User Toggle' />

        <View style={styles.container}>
          <Text style={{ padding: 16 }}>Select a user to act as.</Text>

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

export { UserToggle };
