import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, nome: 'Matheus' , idade: 50, email: 'matheus@matheus.com' },
        { id: 2, nome: 'Joao' , idade: 22, email: 'joao@joao.com' },
        { id: 3, nome: 'Henrique' , idade: 39, email: 'henrique@henrique.com' },
        { id: 4, nome: 'Paulo' , idade: 15, email: 'paulo@paulo.com' },
        { id: 4, nome: 'Jose' , idade: 12, email: 'jose@jose.com' },
      ]
    };
  }

  render() {
    const { feed } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={feed}
          renderItem={({ item }) => <Pessoa data={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
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

class Pessoa extends Component {
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