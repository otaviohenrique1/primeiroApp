import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slider from "@react-native-community/slider";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
    };
  }

  render() {
    const { valor } = this.state;

    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
          valor={valor}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />
        <Text style={styles.texto}>
          Você tem {valor.toFixed(1)} Kg
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 15,
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
  }
});
