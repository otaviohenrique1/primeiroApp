import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Picker from './src/Picker';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Picker />
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
