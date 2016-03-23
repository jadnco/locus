/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Store from 'react-native-simple-store';

import config from '../config';

type State = {
  active: boolean,
};

class FollowButton extends Component {
  state: State;
  USER_KEY: string = '@Locus:user';

  constructor(props: Object): void {
    super(props);

    this.state = {

      // false: not following
      // true: following
      active: false,
    };
  }

  componentDidMount(): void {
    let user = this.props.user;

    Store.get(this.USER_KEY)
      .then(me => {
        return fetch(`http://${config.address}:1998/api/users/${user._id}/followers/${me._id}`, {
          method: 'GET',
        });
      })
      .then(res => res.json())
      .then(res => this.setState({ active: res.following }))
      .catch(error => console.error(error));
  }

  toggle(): void {
    let user = this.props.user;

    Store.get(this.USER_KEY)
      .then(me => {
        return fetch(`http://${config.address}:1998/api/users/${user._id}/followers`, {
          method: this.state.active ? 'DELETE' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: me._id }),
        });
      })
      .then(res => {
        this.setState({ active: !this.state.active});

        this.props.onToggle(this.state.active);
      })
      .catch(error => console.error(error));
  }

  render(): ReactElement {
    let { ...props } = this.props;
    return (
      <TouchableHighlight
        onPress={this.toggle.bind(this)}
        style={[styles.unactive, this.state.active && styles.active]}
      >

        <Text style={this.state.active && styles.activeText}>
          {this.state.active && 'Following' || 'Follow'}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  unactive: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginRight: 8,
  },
  active: {
    backgroundColor: 'black',
  },
  activeText: {
    color: 'white',
  },
});

export { FollowButton };
