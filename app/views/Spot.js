/* @flow */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import TopBar from '../components/TopBar';
import BackButton from '../components/BackButton';
import StatBar from '../components/StatBar';
import Avatar from '../components/Avatar';
import ResponsiveImage from '../components/ResponsiveImage';

import ProfileView from './Profile';

import CarOne from 'image!car-1';

type Props = {
  navigator: Object,
  data: Object,
  pop: Function,
  push: Function,
};

class Spot extends Component {
  props: Props;

  constructor(props: Props): void {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    let {title, img} = this.props.data;
    let {push, pop} = this.props;

    return (
      <View style={styles.container}>
        <TopBar
          title={title}
          style={{borderBottomWidth: 0}}
          leftButton={<BackButton onPress={pop} />}
        />

        <StatBar />

        <ScrollView
          contentContainerStyle={styles.scroll}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}>

          <View>
            <ResponsiveImage
              source={img}
              style={styles.image} />
          </View>

          <View style={{padding: 10}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => push({component: ProfileView})}>

              <Avatar size={40} />

            </TouchableOpacity>
            <Text>{title}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Spot;
