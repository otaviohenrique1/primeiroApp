import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import InstaSujeito from './src/InstaSujeito';
// import AppDesafio from './src/AppDesafio';
// import PickerExemplo from './src/PickerExemplo';
// import SliderExemplo from './src/SliderExemplo';
// import SwitchExemplo from './src/SwitchExemplo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Picker /> */}
        {/* <Slider /> */}
        {/* <Switch /> */}
        {/* <AppDesafio /> */}
        <InstaSujeito />
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
