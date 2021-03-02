import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Matheus'
    };
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto) {
    if (texto.lenght > 0) {
      this.setState({
        nome: `Bem vindo ${texto}`,
      });
    } else {
      this.setState({
        nome: '',
      });
    }
  }

  render() {
    let { nome } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
           style={styles.input}
           placeholder="Digite seu nome?"
           underlineColorAndroid="transparent"
           onChangeText={this.pegaNome}
        />
        <Text
          style={styles.texto}
        >{nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});