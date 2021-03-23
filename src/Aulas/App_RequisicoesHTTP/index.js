import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import api from './services/api';

export default class App_RequisicoesHTTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true,
    };
  }

  // componentDidMount -> quando o elemento é montado em tela
  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
      loading: false,
    });
  }

  // componentDidUpdate -> toda vez que um state é atualizado fazer algo
  componentDidUpdate(_, prevState) {
    // 
  }

  render() {
    const { filmes, loading } = this.state;
    
    if (loading) {
      return (
        <View style={styles.containerLoad}>
          <ActivityIndicator
            color='#09A6FF'
            size={40}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={filmes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoad: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
