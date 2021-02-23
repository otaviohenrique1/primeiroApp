import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#222' }}>
        <View style={{
          // flex: 1,
          height: 65,
          backgroundColor: '#222',
          // backgroundColor: 'red',
        }}>
          {/* <Text>Meu primeiro texto aqui</Text> */}
        </View>
        <View style={{
          flex: 1,
          backgroundColor: 'green',
        }}></View>
        <View style={{
          // flex: 2,
          height: 65,
          backgroundColor: '#222',
          // backgroundColor: 'yellow',
        }}></View>
        {/* <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'red'}}></View> */}
        {/* <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'green'}}></View> */}
        {/* <Text>Olá mundo!!!!</Text> */}
        {/* <Text>Olá mundo!!!!</Text> */}
      </View>
    );
  }
}
