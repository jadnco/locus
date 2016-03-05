/* @flow */

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';

import {
  Path,
  Surface,
  Shape,
} from 'ReactNativeART';

type Props = {
  width: number,
  height: number,

  // TODO: Implement ability to specify count
  // of rows and columns
  rows: ?number,
  cols: ?number,
};

class GridOverlay extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      rows: [],
      cols: [],
    };
  }

  componentWillReceiveProps(props: Props): void {
    let { width, height } = props;

    this.setState({ width, height });
  }

  render(): ReactElement {
    let { rows, cols } = this.props;
    let { width, height } = this.state;
    let content = <View></View>;

    if (width && height) {
      content = (
        <Surface width={width} height={height}>
          
          {/* Vertical/cols lines */}
          <Shape
            d={new Path().move(width / 3, 0).line(0, height)}
            stroke="white"
          />

          <Shape
            d={new Path().move(width / 3 * 2, 0).line(0, height)}
            stroke="white"
          />

          {/* Horizonral/cols lines */}
          <Shape
            d={new Path().move(0, height / 3).line(width, 0)}
            stroke="white"
          />

          <Shape
            d={new Path().move(0, height / 3 * 2).line(width, 0)}
            stroke="white"
          />
        </Surface>
      );
    }

    return content;
  }
}

export { GridOverlay };
