/**
 * After a photo is selected and edited, this view
 * allows the Spot to be edited with a title description etc.
 * This is where the Spot can finally be publishe
 *
 * @flow
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { BackButton, NextButton, TopBar } from '../components';

import Store from 'react-native-simple-store';

import { Search } from '.';

import config from '../config';

class SpotEditor extends Component {
  USER_KEY: string = '@Locus:user';

  constructor(props: Object): void {
    super(props);

    this.state = {
      caption: '',
      title: '',
    };
  }

  upload(): void {
    let data = new FormData();
    let photo = this.props.photo;

    // Create a new fieldname
    data.append('photo', { uri: photo.uri, name: 'photo' });

    this.setState({ uploading: true });

    // Send the request to the server
    fetch(`http://${config.address}:1998/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    .then(res => res.json())
    .then(res => this.savePhoto(res.upload, photo.location))
    .catch(e => console.error(e));
  }

  savePhoto(upload, location): void {
    let photo = {
      source: upload.filename,
      location: location,
    };

    console.log('Save photo called');

    fetch(`http://${config.address}:1998/api/photos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photo }),
    })
    .then(res => res.json())
    .then(res => this.publish(res.photo))
    .catch(e => console.log(e));
  }

  publish(photo): void {
    console.log('CALLED publish');

    let spot = {
      type: 'photo',
      title: this.state.title,
      caption: this.state.caption,
      photo: photo._id,
    };

    console.log('Spot', spot);

    // Get reference to current logged in user
    Store.get(this.USER_KEY)
      .then(me => {
        spot.spotter = me._id;

        console.log('Got user', me.name);

        fetch(`http://${config.address}:1998/api/users/${me._id}/spots`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ spot }),
        })
        .then(() => this.props.closeModal())
        .catch(e => console.error(e));
      }).catch(() => alert('cant find user'));
  }

  render(): ReactElement {
    let { photo, push, pop, ...other } = this.props;

    return (
      <View style={styles.container}>

        <TopBar
          title='Spot Editor'
          leftButton={<BackButton onPress={pop} />}
        />

        <ScrollView
          style={styles.container}
          automaticallyAdjustContentInsets={false}
        >

          {this.state.uploading && <Text>UPLOADING...</Text>}

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Title"
            keyboardAppearance="light"
            returnKeyType="next"
            onChangeText={title => this.setState({ title })}
          />

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Caption"
            keyboardAppearance="light"
            onChangeText={caption => this.setState({ caption })}
          />

          <TouchableOpacity
            onPress={this.upload.bind(this)}
            style={{ marginTop: 20, paddingVertical: 10, paddingHorizontal: 30, alignSelf: 'center', backgroundColor: '#CC9B47' }}
          >
            <Text style={{ color: 'white' }}>Publish</Text>
          </TouchableOpacity>
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
});

export { SpotEditor };
