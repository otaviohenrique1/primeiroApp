import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    }
  }

  render() {
    const { nome, descricao, imgperfil, imgPublicacao, likeada, likers } = this.state.feed;
    
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            source={{ uri: imgperfil }}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}>{nome}</Text>
          <Image
            source={{ uri: imgPublicacao }}
            style={styles.fotoPublicacao}
          />
          <Text>{descricao}</Text>
          <Text>{likeada}</Text>
          <Text>{likers}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {
    flex: 1,
    margin: 10,
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  viewPerfil: {},
  fotoPublicacao: {},
});