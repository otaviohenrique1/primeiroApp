import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Picker from './src/Picker';
import Slider from './src/Slider';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Picker />
        <Slider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
