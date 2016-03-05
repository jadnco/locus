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

import Icon from 'react-native-vector-icons/EvilIcons';

import { GridOverlay, ResponsiveImage } from '.';

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

  componentDidMount(): void {
    ResponsiveImage.getSize(this.props.source.uri)
      .then(({ width, height }) => {
        console.log('FROM GET SIZE', width, height);

        this.setState({ width, height });
      })
      .catch(error => console.log(error));
  }

  render(): ReactElement {
    let { style, source, ...other } = this.props;
    let { width, height } = this.state;

    return (
      <View>
        <ResponsiveImage source={source}>

          <GridOverlay width={width} height={height} />
        </ResponsiveImage>
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
