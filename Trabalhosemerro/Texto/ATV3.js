import React from 'react';
import { View , Botao} from 'react-native';


export default function Botao(props) {
  const handleButtonClick = () => {
    console.log('Apertou o Botao');
  };
  return (
    <View>
      <Botao
        funcao={handleButtonClick}
        texto="Meu Botao"
        largura={250}
        tamanhoFonte={25}
        cor="red"
      />
    </View>
  );
};


/*att5*/