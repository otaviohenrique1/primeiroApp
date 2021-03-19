import React, { Component } from 'react';
import { View, Modal, Button, StyleSheet } from 'react-native';
import Entrar from "./components/Entrar";

export default class App_modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    }

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({ modalVisible: true });
  }

  sair(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.container}>
        <Button
          title="Entrar"
          onPress={this.entrar}
        />
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <Entrar fechar={() => this.sair(false)} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 25,
  },
  modalContainer: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
