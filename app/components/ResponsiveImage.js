'use strict';

import React, {
  Component,
  Image,
  Dimensions,
  View,
} from 'react-native';

class ResponsiveImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    let _window = Dimensions.get('window');
    let ratio;

    Image.getSize(this.props.source.uri, (width, height) => {
      ratio = width / height;

      this.setState({
        width: this.props.width || _window.width,
        height: (this.props.width || _window.width) / ratio,
      });
    });
  }

  render() {
    let {source, style, ...other} = this.props;
    let {width, height} = this.state;

    return (
      <Image
        source={source}
        style={[{width, height}, style]}
        {...other} />
    );
  }
}

module.exports = ResponsiveImage;
