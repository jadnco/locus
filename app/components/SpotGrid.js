'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import ResponsiveImage from './ResponsiveImage';

const values = [5,6,66,44,33,7755,4,34,342,7,56];
class SpotGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
    };
  }

  componentDidMount() {
    let rows = this._getRows(values, 2);

    this.setState({rows});

    this.imgs = [<ResponsiveImage
                  source='http://www.carpixel.net/w/f945eb65154e8e0f99df09e9daf0cee1/jaguar-c-x75-007-spectre-car-wallpaper-34872.jpg' />,
                  <ResponsiveImage
                  source='https://s-media-cache-ak0.pinimg.com/236x/98/e9/4c/98e94c5cc565f74b32317a65900c9059.jpg' />, ];
  }

  _getRows(array, length) {
    var res = [];

    while (array.length) {
      res.push(array.splice(0, length));
    }

    return res;
  }

  render() {
    let {style, ...other} = this.props;
    

    let grid = this.state.rows.map((v, i) => {
      return (
        <View key={i} style={styles.row}>
          {v.map((b, j) => {
            return (
              <View key={j} style={styles.thumbnail}>
                {this.imgs[Math.floor(Math.random()*this.imgs.length)]}
              </View>
            );
          })}
        </View>
      );
    });

    return (
      <View>
        {grid}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    //flexDirection: 'row',
  },
  thumbnail: {
    flex: 1,
    marginBottom: 8,
    flexDirection: 'column',
  },
});

module.exports = SpotGrid;