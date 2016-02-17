/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

type State = {
  active: boolean,
};

class FollowButton extends Component {
  state: State;

  constructor(props: Object): void {
    super(props);

    this.state = {

      // false: not following
      // true: following
      active: false,
    };
  }

  _toggleActive(): void {
    this.setState({
      active: !this.state.active,
    });
  }

  render(): ReactElement {
    return (
      <TouchableHighlight
        onPress={this._toggleActive.bind(this)}
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
