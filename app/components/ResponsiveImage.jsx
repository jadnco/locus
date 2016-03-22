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

  componentWillMount(): void {
    let { source } = this.props;

    ResponsiveImage.getScaledSize(source.uri)
      .then(({ width, height }) => {
        this.setState({
          width: this.props.width || width,
          height: this.props.height || height,
          source: source,
        });
      })
      .catch(error => {});
  }

  componentWillReceiveProps(props): void {
    let { source, width, height } = props;

    ResponsiveImage.getScaledSize(source.uri)
      .then(({ width, height }) => {
        this.setState({
          width: props.width || width,
          height: props.height || height,
          source: source,
        });
      })
      .catch(error => {});
  }

  static getScaledSize(uri): Promise<Object> {
    let _window: Object = Dimensions.get('window');
    let ratio: number;
    let scaled: Object = { width: 0, height: 0 };

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
    let { style, children, ...other } = this.props;
    let { width, height, source } = this.state;

    return (
      <View style={{ overflow: 'hidden' }}>
        <Image

          // Small hack to make the image isn't cached
          key={JSON.stringify(source)}
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
