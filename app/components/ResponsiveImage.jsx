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
    let _window: { width: number } = Dimensions.get('window');
    let ratio: number;

    Image.getSize(this.props.source.uri, (width, height) => {
      ratio = width / height;

      this.props.getSize &&
      this.props.getSize.call(null, this.props.width || _window.width, this.props.height || (_window.width / ratio) );

      this.setState({
        width: this.props.width || _window.width,
        height: this.props.height || (_window.width / ratio),
      });
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
