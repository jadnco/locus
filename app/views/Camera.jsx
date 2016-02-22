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

    this.state = {
      loading: null,
    };
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

      // This should only get called when the user
      // clicks on a 'Post/Submit' button.
      this.upload(a);
    }, () => {
      console.log('Error uploading file');
    });
  }

  upload(photo: Object): void {
    let data = new FormData();

    // Create a new fieldname
    data.append('spot', { ...photo.edges[0].node.image, name: 'spot' });

    this.setState({loading: <Text style={{color: 'black', padding: 20, borderWidth: 1, borderColor: 'white'}}>Uploading...</Text>})

    // Send the request to the server
    fetch('http://192.168.100.102:1998/upload', {
      method: 'POST',
      body: data,
    })
    .then(() => this.setState({loading: null}));
  }

  render(): ReactElement {
    return (
      <View style={{flex: 1}}>

        {this.state.loading && this.state.loading}

        <Cam
          ref={cam => this.camera = cam}
          style={{alignItems: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>

          <Text
            style={{marginTop: 50, padding: 10, color: 'black', backgroundColor: 'white'}}
            onPress={this.getPhoto.bind(this)}
          >
            [GET LAST PHOTO]
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
