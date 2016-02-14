/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  ListView,
  Text,
} from 'react-native';

import ListItem from './ListItem';

type Props = {
  items: Array<Object>,
  row: ?Function,
  style: Object,
};

type State = {
  data: Array<Object>,
};

class List extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    let dataSource = new ListView.DataSource({
      rowHasChanged: (first, second) => first !== second,
    });

    this.state = {
      data: dataSource.cloneWithRows(this.props.items),
    };
  }

  render(): ReactElement {
    let {row, ...other} = this.props;

    return (
      <ListView
        dataSource={this.state.data}
        renderRow={row || (data => <ListItem data={data} />)}
        {...other} />
    );
  }
}

export default List;
