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

import Store from 'react-native-simple-store';

import { CaptureButton } from '../components';

import config from '../config';

type Props = {};

class Camera extends Component {
  props: Props;
  USER_KEY: string = '@Locus:user';

  constructor(props: Props): void {
    super(props);

    this.state = {
      loading: null,
    };
    this.camera = null;
    this.photo = '';
  }

  capture(): void {
    console.log('CAPTURE');

    // This will capture the image and save to the camera roll
    this.camera.capture({ location: true }, (error, photo) => {
      console.log('Photo -->', photo);

      this.photo = photo;

      this.getPhoto();
    });
  }

  getPhoto(): void {
    CameraRoll.getPhotos({ first: 1 }, (a) => {
      console.log('Took photo', a);
    }, () => {
      console.log('Error uploading file');
    });
  }

  upload(photo: Object): void {
    let data = new FormData();
    let node = photo.edges[0].node;

    console.log('PHOTO:::', photo);

    node.location = {
      longitude: 1234,
      latitude: 9873,
    };

    // Create a new fieldname
    data.append('spot', { ...node.image, name: 'spot' });

    // TODO: Send location and dimension data alongside the photo
    // data.append('location', JSON.stringify({ ...node.location }));

    //data.append('dimensions', { width: 'test', height: 123 });

    console.log('DATA --> ', data);

    this.setState({loading: <Text style={{color: 'black', padding: 20, borderWidth: 1, borderColor: 'white'}}>Uploading...</Text>})

    // Send the request to the server
    fetch(`http://${config.address}:1998/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    .then(res => {
      this.setState({loading: null});

      return res.json();
    })
    .then(u => this.saveSpot(u))
    .catch(e => console.error(e));
  }

  render(): ReactElement {
    return (
      <View style={{flex: 1}}>

        {this.state.loading && this.state.loading}

        <Cam
          ref={cam => this.camera = cam}
          style={[styles.container, {width: Dimensions.get('window').width, height: Dimensions.get('window').height}]}>

          <CaptureButton
            onPress={this.capture.bind(this)}
            style={styles.captureButton}
          />
        </Cam>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    flex: 1,
    //flexDirection: 'column',
    resizeMode: 'cover',
  },
  captureButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
});

export { Camera };
