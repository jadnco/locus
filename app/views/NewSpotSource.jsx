/* @flow */

'use strict';

import React, {
  CameraRoll,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  ImageEditor,
  NextButton,
  TopBar,
  ResponsiveImage,
} from '../components';

import { SpotEditor } from '.';

class NewSpotSource extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      photo: null,
    };
  }

  componentDidMount(): void {
    this.getLastPhoto();
  }

  getLastPhoto(): void {
    console.log('Getting photos');
    CameraRoll.getPhotos({ first: 1 }, photo => {
      console.log(photo);

      this.setState({ photo });
    }, () => {
      console.log('Error getting latest photo.');
    });
  }

  render(): ReactElement {
    let { push, ...other } = this.props;
    let content = <Text>Loading image...</Text>;

    if (this.state.photo) {
      content = (
        <ImageEditor
          source={this.state.photo.edges[0].node.image} />
      );
    }

    return (
      <View style={styles.container}>

        <TopBar
          title='New Spot'
          rightButton={
            <NextButton onPress={() => push({ component: SpotEditor })} />
          }
        />

        <ScrollView
          style={styles.container}
          automaticallyAdjustContentInsets={false}
        >
          {content}
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
});

export { NewSpotSource };
