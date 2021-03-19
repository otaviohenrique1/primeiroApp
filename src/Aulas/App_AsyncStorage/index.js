import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App_AsyncStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: '',
    };
    this.gravaNome = this.gravaNome.bind(this);
  }

  // componentDidMount -> quando o elemento é montado em tela
  async componentDidMount() {
    // Busca itens
    // alert('Ola');
    await AsyncStorage.getItem('nome')
      .then((value) => {
        this.setState({
          nome: value
        });
      });
  }

  // componentDidUpdate -> toda vez que um state é atualizado fazer algo
  async componentDidUpdate(_, prevState) {
    // Insere itens
    const nome = this.state.nome;
    if (prevState !== nome) {
      await AsyncStorage.setItem('nome', this.state.nome);
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input,
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }

  render() {
    const { input, nome } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={(text) => this.setState({ input: text })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.botao}
            onPress={this.gravaNome}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>{nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    // flex: 1,
    width: 350,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
    // margin: 10,
  },
  botao: {
    backgroundColor: '#222222',
    color: '#ffffff',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome: {
    fontSize: 30,
    textAlign: 'center',
  },
});
