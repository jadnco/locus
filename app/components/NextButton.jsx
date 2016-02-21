/* @flow */

'use strict';

import React, {
  Component,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import { navigationBar } from '../styles';

type Props = {
  onPress: Function,
};

class NextButton extends Component {
  props: Props;

  render(): ReactElement {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name="chevron-right" style={navigationBar.iconRight} />
      </TouchableOpacity>
    );
  }
}

export { NextButton };
