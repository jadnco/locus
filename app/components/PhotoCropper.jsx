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

class PhotoCropper extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      source: {},
    };
  }

  componentWillMount(): void {
    this.setState({ source: this.props.source });
  }

  componentWillReceiveProps(props): void {
    this.setState({ source: props.source });
  }

  render(): ReactElement {
    let { source } = this.state;

    return (
      <View>
        <ResponsiveImage source={source}>

          {/* <GridOverlay
            width={width}
            height={height}
            stroke="white"
          /> */}
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

export { PhotoCropper };
