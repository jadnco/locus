/* @flow */

'use strict';

import React, {
  Component,
  CameraRoll,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  NavigatorIOS,
  Image,
} from 'react-native';

import Cam from 'react-native-camera';

type Props = {};

class Camera extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};
    this.camera = null;
    this.photo = '';
  }

  capture(): void {

    // This will capture the image an save to the camera roll
    this.camera.capture((error, photo) => {
      console.log('Photo -->', photo);

      this.photo = photo;

      this.getPhoto();
    });
  }

  getPhoto(): void {
    console.log('Getting photos');
    CameraRoll.getPhotos({ first: 1 }, (a) => {
      console.log(a);
    }, () => {

    });
  }

  upload(): void {

  }

  render(): ReactElement {
    return (
      <View style={{flex: 1}}>
        <Cam
          ref={cam => this.camera = cam}
          captureTarget={Cam.constants.CaptureTarget.disk}
          style={{alignItems: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>

          <Text
            style={{marginTop: 50, padding: 10, color: 'black', backgroundColor: 'white'}}
            onPress={this.capture.bind(this)}
          >
            [CAPTURE]
          </Text>
        </Cam>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: 300,
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
  },
});

export { Camera };
