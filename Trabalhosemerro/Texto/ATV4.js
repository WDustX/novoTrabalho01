import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Lista() {
  const [itens, setItens] = useState([]);
  const [novaLista, setNovaLista] = useState('');

  const handleAddItem = () => {
    setItens([...itens, novaLista]);
    setNovaLista('');
  };

  return (
    <View>
      <TextInput
        value={novaLista}
        onChangeText={text => setNovaLista(text)}
        placeholder="Nova lista"
      />
      <Button title="Adicionar" onPress={handleAddItem} />
      {itens.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}