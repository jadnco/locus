/* @flow */

'use strict';

import React, {
  ActivityIndicatorIOS,
  Animated,
  Component,
  CameraRoll,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Modal,
  ScrollView,
  NavigatorIOS,
  Image,
  TouchableOpacity,
  StatusBarIOS,
} from 'react-native';

import Cam from 'react-native-camera';

import Store from 'react-native-simple-store';

import Icon from 'react-native-vector-icons/EvilIcons';

import { CaptureButton, GridOverlay } from '../components';

import { PhotoEditor } from '.';

import config from '../config';

type Props = {};

type State = {
  photo: Object,
  isGridVisible: boolean,
  gridOverlayOpacity: number,
};

class Camera extends Component {
  props: Props;
  state: State;
  USER_KEY: string = '@Locus:user';

  constructor(props: Props): void {
    super(props);

    this.state = {
      isGridVisible: false,
      gridOverlayOpacity: new Animated.Value(0),
      photo: {},
    };

    this.camera = null;
  }

  componentDidMount(): void {
    StatusBarIOS.setHidden(true, 'slide');
  }

  componentWillReceiveProps(props): void {
    let { visible } = props;

    visible && StatusBarIOS.setHidden(true, 'slide');
  }

  toEditor(): void {
    this.props.push({ component: PhotoEditor, photo: this.state.photo });
  }

  capture(): void {
    let photo = {};

    console.log('CAPTURE');

    // This will capture the image and save to the camera roll
    this.camera.capture({ location: true }, (error, uri) => {
      console.log('Photo -->', uri);

      photo = { uri };

      this.setState({ photo });

      navigator.geolocation.getCurrentPosition(loc => {
        console.log('LOCATION:', loc);

        photo = { uri, location: loc.coords };

        this.setState({ photo });

        this.toEditor();
      },

      error => this.toEditor(),

      {
        enableHighAccuracy: true,
      });
    });
  }

  toggleGridOverlay(): void {
    Animated.timing(this.state.gridOverlayOpacity, {
      toValue: this.state.isGridVisible ? 0 : 1,
      duration: 25,
    }).start();

    this.setState({ isGridVisible: !this.state.isGridVisible });
  }

  render(): ReactElement {
    let { closeModal } = this.props;

    return (
      <View>

        <Cam
          ref={cam => this.camera = cam}
          aspect="fill"

          // We want a default 4:3 aspect ratio
          style={[styles.container, {width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.33 }]}>

          <GridOverlay
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').width * 1.33}
            stroke="white"
            style={{ position: 'absolute', left: 0, top: 0, opacity: this.state.gridOverlayOpacity }}
          />
        </Cam>

        <View style={{ alignSelf: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'row' }}>

          <TouchableOpacity
            onPress={closeModal}
            style={{ marginRight: 16, backgroundColor: 'transparent' }}
          >

            <Icon name="close" size={32} color="black" />
          </TouchableOpacity>

          <CaptureButton
            onPress={this.capture.bind(this)}
            style={styles.captureButton}
          />

          <TouchableOpacity
            onPress={() => this.toggleGridOverlay()}
            style={{ marginLeft: 16, backgroundColor: 'transparent' }}
          >

            <Icon name="navicon" size={32} color="black" />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: 'transparent',
  },
});

export { Camera };
