/* @flow */

'use strict';

import React, {
  CameraRoll,
  Component,
  Dimensions,
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

class PhotoGrid extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount(): void {
    let { width } = Dimensions.get('window');

    this.setState({ width });

    CameraRoll.getPhotos({ first: 12 }, photos => {
      this.setState({ photos });
    }, () => {
      console.log('Error getting latest photos.');
    });
  }

  render(): ReactElement {
    let { style, source, ...other } = this.props;
    let { width, height } = this.state;

    let images = [];

    if (this.state.photos) {
        this.state.photos.edges.map((photo, i) => {
          images.push(
            <Image
              key={i}
              height={this.state.width / 4}
              width={this.state.width / 4}
              source={photo.node.image}
              style={{ borderWidth: 0.5, borderColor: 'white' }}
            />
          );
        });
    }

    return (
      <View style={{
        borderTopWidth: 3,
        borderColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}>

        {images}
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

export { PhotoGrid };
