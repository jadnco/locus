/**
 * This displays an interface where the user can modify
 * a photo by adding filters, cropping, adjustments etc.
 *
 * @flow
 */

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

import { SpotEditor } from '.';

import Icon from 'react-native-vector-icons/EvilIcons';

type Props = {
  pop: Function,
  push: Function,
  visible: boolean,
};

class PhotoEditor extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {
    StatusBarIOS.setHidden(false, 'slide');
  }

  render(): ReactElement {
    let { data, type, closeModal, pop, push } = this.props;

    return (
      <View style={styles.container}>

        <TopBar
          title='Photo Editor'
          leftButton={<BackButton onPress={pop} />}
          rightButton={
            <NextButton onPress={() => push({ component: SpotEditor, type, data, closeModal })} />
          }
        />

        <ScrollView>
          <PhotoCropper source={data} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});

export { PhotoEditor };
