import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, Text, View } from 'react-native';
import { getData } from './src/data/getData';
import {datamock } from './src/data/mockupdata';
import { Card } from './src/components/Card';
export default function App() {
  const [data, setData]= useState([])
  useEffect(() => {
      async function fetchData() {
        const response = await getData()
        setData(datamock)
      }
      fetchData()
  },[])
  return (
    <View style={{flex:1, maxHeight:'auto'}}>
    <StatusBar/>
    <ScrollView>
      {data.map(card => {
        return (
          <Card key={card.autorizado.codigo} name={card.aluno.nome} auth={card.responsavel_autorizador.nome} resp={card.autorizado}/>
        )
      })}
    </ScrollView>
    </View>
  );
}

