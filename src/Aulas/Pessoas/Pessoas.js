import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Pessoa extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nome, idade, email } = this.props.data;

    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {idade}</Text>
        <Text style={styles.textoPessoa}>Email: {email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20,
  },
});

