/* @flow */

'use strict';

import React, {
  Component,
  Image,
  Dimensions,
  View,
} from 'react-native';

type Props = {
  source: string,
  style: Object,
  children: Array<ReactElement> | ReactElement,
};

type State = {
  width: number,
  height: number,
};

class ResponsiveImage extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount(): void {
    ResponsiveImage.getScaledSize(this.props.source.uri)
      .then(({ width, height }) => {
        this.setState({
          width: this.props.width || width,
          height: this.props.height || height,
        });
      })
      .catch(error => console.log(error));
  }

  static getScaledSize(uri): Object<number, number> {
    let _window: { width: number } = Dimensions.get('window');
    let ratio: number;
    let scaled: { width: number, height: number } = { width: 0, height: 0 };

    return new Promise((resolve, reject) => {
      Image.getSize(uri, (width, height) => {
        ratio = width / height;

        scaled.width = _window.width;
        scaled.height = (_window.width / ratio);

        resolve({ width: scaled.width, height: scaled.height });
      }, reject);
    });
  }

  render(): ReactElement {
    let { source, style, children, ...other } = this.props;
    let { width, height } = this.state;

    return (
      <View style={{ overflow: 'hidden' }}>
        <Image
          source={source}
          style={[{ width, height }, style]}
          {...other}
        >

          {children}
        </Image>
      </View>
    );
  }
}

export { ResponsiveImage };
