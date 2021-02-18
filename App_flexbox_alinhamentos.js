import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'green',
        }}></View>
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'red',
        }}></View>
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'yellow',
        }}></View>
      </View>
    );
  }
}
