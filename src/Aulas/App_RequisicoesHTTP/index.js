import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import api from './services/api';

export default class App_RequisicoesHTTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  // componentDidMount -> quando o elemento é montado em tela
  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data
    });
  }

  // componentDidUpdate -> toda vez que um state é atualizado fazer algo
  componentDidUpdate(_, prevState) {
    // 
  }

  render() {
    const {} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
