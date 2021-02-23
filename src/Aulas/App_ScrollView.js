import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          // showsVerticalScrollIndicator={false}
          // scrollEnabled={false}
          // scrollEnabled={true}
          // horizontal={true}
        >
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    // width: 150,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
    // width: 150,
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
    // width: 150,
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
    // width: 150,
  },
});