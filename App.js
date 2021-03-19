import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import InstaSujeito from './src/InstaSujeito';
// import AppDesafio from './src/AppDesafio';
// import PickerExemplo from './src/PickerExemplo';
// import SliderExemplo from './src/SliderExemplo';
// import SwitchExemplo from './src/SwitchExemplo';
// import App_modal from "./src/Aulas/App_modal";
// import App_AsyncStorage from "./src/Aulas/App_AsyncStorage";
import App_RequisicoesHTTP from "./src/Aulas/App_RequisicoesHTTP";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Picker /> */}
        {/* <Slider /> */}
        {/* <Switch /> */}
        {/* <AppDesafio /> */}
        {/* <InstaSujeito /> */}
        {/* <App_modal /> */}
        {/* <App_AsyncStorage /> */}
        <App_RequisicoesHTTP />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
