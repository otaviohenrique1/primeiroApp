import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Filmes extends Component {
  render() {
    const { nome } = this.props.data;
    
    return (
      <View style={styles.container}>
        <Text>{nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});