/* @flow */

'use strict';

import React, {
  Animated,
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
  stroke: string,

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
    let { width, height, stroke, rows, cols, ...other } = this.props;
    //let { width, height } = this.state;
    let content = <View></View>;

    if (width && height) {
      content = (
        <Surface width={width} height={height}>
          
          {/* Vertical/cols lines */}
          
          {/* Dark shadow */}
          <Shape
            d={new Path().move(width / 3, 0).line(0, height)}
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth={2}
          />
          <Shape
            d={new Path().move(width / 3, 0).line(0, height)}
            stroke={stroke}
            strokeWidth={0.5}
          />

          <Shape
            d={new Path().move(width / 3 * 2, 0).line(0, height)}
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth={2}
          />
          <Shape
            d={new Path().move(width / 3 * 2, 0).line(0, height)}
            stroke={stroke}
            strokeWidth={0.5}
          />

          {/* Horizonral/cols lines */}

          <Shape
            d={new Path().move(0, height / 3).line(width, 0)}
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth={2}
          />
          <Shape
            d={new Path().move(0, height / 3).line(width, 0)}
            stroke={stroke}
            strokeWidth={0.5}
          />

          <Shape
            d={new Path().move(0, height / 3 * 2).line(width, 0)}
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth={2}
          />
          <Shape
            d={new Path().move(0, (Math.round(height) / 3 * 2)).line(width, 0)}
            stroke={stroke}
            strokeWidth={0.5}
          />
        </Surface>
      );
    }

    return (
      <Animated.View {...other}>
        {content}
      </Animated.View>
    );
  }
}

export { GridOverlay };
