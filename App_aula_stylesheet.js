import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.area}>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou texto 1</Text>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou texto 2</Text>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou texto 3</Text>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou texto 4</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  area: {
    marginTop: 100,
  },
  textoPrincipal: {
    fontSize: 25,
    color: '#FF0000'
  },
  alinhaTexto: {
    textAlign: 'center'
  }
});