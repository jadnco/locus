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
      selected: null,
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
    console.log('Getting photos');
    CameraRoll.getPhotos({ first: 1 }, photo => {
      console.log(photo);

      this.setState({ selected: photo.edges[0].node.image });
    }, () => {
      console.log('Error getting latest photo.');
    });
  }

  render(): ReactElement {
    let { closeModal, pop } = this.props;
    let editor = <View></View>;

    if (this.state.selected) {
      editor = (
        <PhotoCropper
          source={this.state.selected}
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
            <NextButton onPress={() => push({ component: SpotEditor })} />
          }
        />

        <ScrollView
          style={styles.container}
          automaticallyAdjustContentInsets={false}
        >
          {editor}

          <PhotoGrid />
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
