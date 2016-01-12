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

    Image.getSize(this.props.source, (width, height) => {
      ratio = width / height;

      this.setState({
        width: this.props.width || _window.width,
        height: this.props.height || (_window.width / ratio),
      });
    });
  }

  render() {
    let {source, style, children, ...other} = this.props;
    let {width, height} = this.state;

    return (
      <View style={{overflow: 'hidden'}}>
        <Image
          source={{uri: source}}
          style={[{width, height}, style]}
          {...other}>

          {children}

        </Image>
      </View>
    );
  }
}

module.exports = ResponsiveImage;
