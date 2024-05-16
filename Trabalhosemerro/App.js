import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';

import PrimeiroComponente from './Texto/ATV1';
import CampoTexto from './Texto/ATV2';
import CampoTextoComRetorno from './Texto/ATV3';

export default function App() {
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [mensagem, setMensagem] = useState("")  

  function mostrarMensagem(){
    var imc = peso / (altura * altura )
    setMensagem( "Peso: " + peso + "\nAltura: " + altura + "\nIMC: " + imc.toFixed(2) )
  }
  return (
    <View style={styles.view}>
      
      <CampoTextoComRetorno 
        funcao={setPeso}
        titulo="Peso"
        sugestao='Ex 75.3'
        tipoTeclado='numeric'/>
      <CampoTextoComRetorno 
        funcao={setAltura}
        titulo="Altura"
        sugestao='Ex 1.85'
        tipoTeclado='numeric'/>
      <Button
          color='#000'
          title='Calcular'
          onPress={mostrarMensagem} />
        <Text>{mensagem}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    width:'100%',
    marginTop: 40,
    flex:1,

    alignItems: 'center'
  }
})