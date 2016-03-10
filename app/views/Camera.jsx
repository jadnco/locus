/* @flow */

'use strict';

import React, {
  Animated,
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
  TouchableOpacity,
} from 'react-native';

import Cam from 'react-native-camera';

import Store from 'react-native-simple-store';

import Icon from 'react-native-vector-icons/EvilIcons';

import { CaptureButton, GridOverlay } from '../components';

import config from '../config';

type Props = {};

class Camera extends Component {
  props: Props;
  USER_KEY: string = '@Locus:user';

  constructor(props: Props): void {
    super(props);

    this.state = {
      loading: null,
      isGridVisible: false,
      gridOverlayOpacity: new Animated.Value(0),
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

  toggleGridOverlay(): void {
    Animated.timing(this.state.gridOverlayOpacity, {
      toValue: this.state.isGridVisible ? 0 : 1,
      duration: 25,
    }).start();

    this.setState({ isGridVisible: !this.state.isGridVisible });
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

          <GridOverlay
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').height}
            stroke="white"
            style={{ position: 'absolute', left: 0, top: 0, opacity: this.state.gridOverlayOpacity }}
          />

          <View style={{ alignSelf: 'flex-end', alignItems: 'center', marginBottom: 50, flexDirection: 'row' }}>

            <CaptureButton
              onPress={this.capture.bind(this)}
              style={styles.captureButton}
            />

            <TouchableOpacity
              onPress={() => this.toggleGridOverlay()}
              style={styles.toggleOverlayButton}
            >

              <Icon name="navicon" size={32} color="white" />
            </TouchableOpacity>

          </View>
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
    //alignSelf: 'flex-end',
    //marginBottom: 30,
  },
  toggleOverlayButton: {
    marginLeft: 16,
  },
});

export { Camera };
