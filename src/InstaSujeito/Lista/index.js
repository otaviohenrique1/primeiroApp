import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import likePng from "../img/like.png";
import sendPng from "../img/send.png";

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
        </View>
        <Image
          resizeMode='cover'
          source={{ uri: imgPublicacao }}
          style={styles.fotoPublicacao}
        />
        <View style={styles.areaBtn}>
          <TouchableOpacity>
            <Image
              source={likePng}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={sendPng}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{descricao}</Text>
          <Text style={styles.descRodape}>{nome}</Text>

        </View>
        {/* <Text>{likeada}</Text> */}
        {/* <Text>{likers}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {
    // flex: 1,
    // margin: 10,
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
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 33,
    height: 33,
  },
  btnSend: {
    paddingLeft: 5,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
});