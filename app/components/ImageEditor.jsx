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
  Surface,
  Path,
} from 'ReactNativeART';

import Icon from 'react-native-vector-icons/EvilIcons';

import { ResponsiveImage } from '.';

type Props = {
  size: number,
  style: Object,
};

class ImageEditor extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };
  }

  drawGrid(): ReactElement {
    let { width, height } = this.state;
  }

  render(): ReactElement {
    let { style, source, ...other } = this.props;

    return (
      <View>
        <ResponsiveImage
          source={source}
          getSize={(width, height) => {
            console.log('SIZE: ', width, ' - ', height);
            this.setState({ width, height });
          }}
        />

          <Surface
            width={this.state.width}
            height={this.state.height}
          >
            {/* <Path
              x={100}
              y={100}
              stroke='#333333'
              strokeWidth={1}

            /> */}
          </Surface>
          <Text>{this.state.height} - {this.state.width}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { ImageEditor };
