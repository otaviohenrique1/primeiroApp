import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default class PickerExemplo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: "Strogonoff", valor: 35.90},
        {key: 2, nome: "Calabresa", valor: 59},
        {key: 3, nome: "Quatro queijos", valor: 37},
        {key: 4, nome: "Brigadeiro", valor: 25.70},
        {key: 5, nome: "Portuguesa", valor: 70},
      ]
    };
  }

  render() {
    const { pizza, pizzas } = this.state;

    let pizzasItem = pizzas.map((value, key) => {
      return <Picker.Item key={key} value={key} label={`${value.nome}`}/>
    });

    return (
    <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={pizza}
          onValueChange={ (itemValue, itemIndex) => this.setState({ pizza: itemValue }) }
        >
          { pizzasItem }
        </Picker>
        <Text style={styles.pizzas}>Voce escolheu: {pizzas[pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {pizzas[pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center',
  },
});
