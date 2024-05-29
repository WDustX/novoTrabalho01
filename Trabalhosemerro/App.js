import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Alert , FlatList} from 'react-native';

import textoss from './Texto/ATV1';
import CampoTexto from './Texto/ATV2';
import Lista from './Texto/ATV4';

export default function App(){
  const [itens, setItens] = useState([]);
  const[nun1 , setNun1] = useState (0.0)
  const[nun2, setNun2]= useState (0.0)
  const[mensagem, setmensagem]= useState ("")

  function mostrarMensagem(){
    var peso = parseFloat(nun1) 
    var altura = parseFloat(nun2) 
    var IMC = peso + (altura * altura)
    setmensagem("Peso "+ peso + " Altura " + altura + " ́IMC " +IMC)
    setItens([...itens,mensagem])
  }
  return (
    <View style={styles.container}> 
       <View style={styles.buttonContainer}>
          <Button
            color='#000'
            style={styles.botao} 
            title='Calcular'
            onPress={mostrarMensagem} >
          </Button>
          </View>
          <CampoTexto
            funcao={setNun1}
            titulo = "1.85" 
            sugestao = 'ex 1.80'
            TipoDoTeclado = 'numeric'
            
          />
           
            <CampoTexto
            funcao={setNun2}
            titulo = "1.85" 
            sugestao = '1.85'
            TipoDoTeclado = 'numeric'
            
          />
          <FlatList
        data={itens}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      /> 
          
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    width: '100%'
  },
  title: {
    marginTop: '10%',
    fontSize: 20
  },
  logo: {
    width: 50,
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width:'70%'
  },
  buttonContainer:{
    marginTop: '5%', 
    width: '70%',
  },
  list:{
    width:'70%',
  },
  item:{
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    borderColor: 'black',
    borderBottomWidth: 1
  }
});
