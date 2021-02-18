import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    let nome = "Matheus";
    // let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Text>Olá Mundo!!!!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{
          color: '#FF0000',
          fontSize: 25,
          margin: 15,
        }}>
          Sujeito Programador
        </Text>
        {/* <Image
          source={{ uri= img}}
          style={{
            width: 300,
            height: 300
          }}
        /> */}
        <Jobs
          largura={500}
          altura={200}
          fulano={'Steve Jobs'}
        />
        <Text
          style={{
            fontSize: 30
          }}
        >
          {nome}
        </Text>
      </View>
    );
  }
}

class Jobs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { largura, altura, fulano } = this.props;
    let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Image
          source={{ uri= img}}
          style={{
            width: largura,
            height: altura
          }}
        />
        <Text>{fulano}</Text>
      </View>
    );
  }
}

// export default App;