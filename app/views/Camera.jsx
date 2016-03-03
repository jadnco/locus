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
    fetch('http://10.28.163.16:1998/upload', {
      method: 'POST',
      body: data,
    })
    .then(res => {
      this.setState({loading: null});

      return res.json();
    })
    .then(u => this.saveSpot(u))
    .catch((e) => console.error(e));
  }

  saveSpot(upload): void {
    console.log(upload.upload.filename);
    let spot = {
      title: 'Some new spot title ' + (Math.random() * 100).toFixed(2),
      photo: upload.upload.filename,
    };

    Store.get(this.USER_KEY)
      .then(user => {
        fetch('http://10.28.163.16:1998/api/users/56d3bfe0f2654f377cf5de92/spots', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ spot: { spotter: user._id, ...spot } }),
        })
        .then(() => alert('New spot saved'))
        .catch((e) => console.error(e));
      });
  }

  render(): ReactElement {
    return (
      <View style={{flex: 1}}>

        {this.state.loading && this.state.loading}

        <Cam
          ref={cam => this.camera = cam}
          style={[styles.container, {width: Dimensions.get('window').width, height: Dimensions.get('window').height}]}>

          <CaptureButton
            onPress={this.getPhoto.bind(this)}
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
