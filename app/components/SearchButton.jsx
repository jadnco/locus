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

class SearchButton extends Component {
  props: Props;

  render(): ReactElement {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name="search" color="#E26C23" style={navigationBar.iconRight} />
      </TouchableOpacity>
    );
  }
}

export { SearchButton };
