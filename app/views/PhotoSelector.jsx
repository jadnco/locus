/* @flow */

'use strict';

import React, {
  CameraRoll,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  NavigatorIOS,
  Image,
  StatusBarIOS,
} from 'react-native';

import {
  BackButton,
  NextButton,
  TopBar,
  PhotoCropper,
  PhotoGrid,
}  from '../components';

import {
  PhotoEditor,
  SpotEditor,
} from '.';

import Icon from 'react-native-vector-icons/EvilIcons';

type Props = {
  pop: Function,
  push: Function,
  visible: boolean,
};

class PhotoSelector extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {
      photo: {},
      location: {},
    };
  }

  componentDidMount(): void {
    this.getLastPhoto();

    StatusBarIOS.setHidden(false, 'slide');
  }

  componentWillReceiveProps(props): void {
    let { visible } = props;

    visible && StatusBarIOS.setHidden(false, 'slide');
  }

  getLastPhoto(): void {
    CameraRoll.getPhotos({ first: 1 }, _photo => {
      console.log(photo);

      let photo = {
        uri: _photo.edges[0].node.image.uri,
      };

      this.setState({ photo, location: _photo.edges[0].node.location });
    }, () => {
      console.log('Error getting latest photo.');
    });
  }

  selectPhoto(_photo: Object): void {
    let photo = {
      uri: _photo.node.image.uri,
    };

    this.setState({ photo, location: _photo.node.location });
  }

  render(): ReactElement {
    let { closeModal, pop, push } = this.props;
    let editor = <View></View>;

    if (this.state.photo) {
      editor = (
        <PhotoCropper
          source={this.state.photo}
        />
      );
    }

    return (
      <View style={styles.container}>

        <TopBar
          title='New Spot'
          leftButton={
            <Icon
              name="close"
              size={26}
              color="black"
              onPress={closeModal}
              style={{ marginLeft: 8 }}
            />
          }
          rightButton={
            <NextButton
              onPress={() => push({
                component: SpotEditor,
                type: 'photo',
                photo: this.state.photo,
                closeModal,
              })}
            />
          }
        />

        <ScrollView
          style={styles.container}
          automaticallyAdjustContentInsets={false}
        >
          {editor}

          <PhotoGrid selected={this.selectPhoto.bind(this)} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});

export { PhotoSelector };
