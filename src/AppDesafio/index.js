import React, { Component } from 'react';
import { Text, View, Switch, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default class AppDesafio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: 0,
      sexo: '',
      sexoLista: [
        { id: 0, item: 'Selecione'},
        { id: 1, item: 'Masculino'},
        { id: 2, item: 'Feminino'},
        { id: 3, item: 'Outro'},
        { id: 4, item: 'Nao quero informar'},
      ],
      limite: 0,
      estudante: false,
    };
  }

  render() {
    const { nome, idade, sexo, sexoLista, limite, estudante, } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Formulario</Text>
        <TextInput
          value={nome}
          onChangeText={(texto) => this.setState({ nome: texto })}
          style={styles.campo}
          placeholder="Nome"
        />
        <TextInput
          value={idade}
          onChangeText={(texto) => this.setState({ idade: parseInt(texto) })}
          keyboardType="numeric"
          style={styles.campo}
          placeholder="Idade"
        />
        <Picker
          selectedValue={sexo}
          onValueChange={(item, index) => this.setState({ sexo: item.item })}
          style={styles.picker}
        >
          {sexoLista.map((item, index) => {
            return (
              <Picker.Item key={index} value={index} label={`${item.item}`} />
            );
          })}
        </Picker>
        <View style={styles.sliderArea}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1000}
            value={limite}
            onValueChange={(valor) => this.setState({ limite: valor.toFixed(2) })}
          />
          <Text style={styles.texto}>
            {limite}
          </Text>
        </View>
        <Switch
          value={estudante}
          onValueChange={(valorSwitch) => this.setState({ estudante: valorSwitch })}
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            if (nome === '' || idade === '') {
              Alert.alert(
                "Alerta",
                "Campos vazios",
                [
                  { text: "Cancelar", },
                ],
                { cancelable: false }
              );
              return;
            } else {
              Alert.alert(
                "Alerta",
                `
                  Nome: ${nome}
                  Idade: ${idade}
                  Sexo: ${sexo}
                  Limite: ${limite}
                  Estudante: ${(estudante) ? "Sim" : "Não"}
                `,
                [
                  { text: "Cancelar", },
                ],
                { cancelable: false }
              );
              return;
            }
          }}
        >
          <Text style={styles.botaoTexto}>Abrir conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  titulo: {
    fontSize: 40,
    marginBottom: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
  },
  campo: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  sliderArea: {
    justifyContent: 'center',
    marginTop: 20,
  },
  slider: {
    width: '100%',
  },
  picker: {
    height: 30,
  },
  botao: {
    backgroundColor: '#00a8f3',
    borderColor: '#00a8f3',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  botaoTexto: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
