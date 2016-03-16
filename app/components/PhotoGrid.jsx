/* @flow */

'use strict';

import React, {
  CameraRoll,
  Component,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
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
    let { selected, style, source, ...other } = this.props;
    let { width, height } = this.state;

    let images = [];

    if (this.state.photos) {
        this.state.photos.edges.map((photo, i) => {
          images.push(
            <TouchableOpacity onPress={selected.bind(null, photo)}>
              <Image
                key={i}
                height={this.state.width / 4}

                // Subtracting 1.5 from 4 images leaves
                // 6 which can be used as whitespace
                // 6 / 3 margins = 2
                width={(this.state.width / 4) - 1.5}
                style={{ marginBottom: 2 }}

                source={photo.node.image}
              />
            </TouchableOpacity>
          );
        });
    }

    return (
      <View style={{
        borderTopWidth: 2,
        borderColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
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
