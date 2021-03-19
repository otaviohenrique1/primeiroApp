import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Entrar extends Component {
  render() {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>Modal</Text>
        <Button
          title="Fechar"
          onPress={this.props.fechar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#292929',
    width: '100%',
    height: 350,
    borderRadius: 15,
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 15,
    textAlign: 'center',
  }
});