import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(nome) {
    this.setState({
      nome: nome,
    });
  }
  
  render() {
    let { nome } = this.state;
    return (
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 23,
            color: 'red',
            textAlign: 'center'
            }}
            >
          {nome}
        </Text>
        <Button
          onPress={() => this.entrar('Matheus')}
        >
          Entrar
        </Button>  
      </View>
    );
  }
}
