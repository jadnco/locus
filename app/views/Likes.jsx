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

import { Profile } from '.';

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
    fetch(`http://${config.address}:1998/api/spots/${this.props.data._id}/likes`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      let users = res.likes.users;

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
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => push({ component: Profile, data })}
                style={{ flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#CCC' }}
              >

                <Avatar source={data.avatar} size={40} />

                <View>
                  <Text style={{ marginLeft: 8, marginTop: 2 }}>{data.name}</Text>
                  <Text style={{ color: 'grey', marginLeft: 8 }}>@{data.handle}</Text>
                </View>
              </TouchableOpacity>
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
