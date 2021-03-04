import React, { Component } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

export default class SwitchExemplo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    };
  }

  render() {
    const { status } = this.state;

    return (
      <View style={styles.container}>
        <Switch
          value={status}
          onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
        />
        <Text style={styles.texto}>
          {(status) ? "Ativo" : "Inativo"}
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
  },
});
