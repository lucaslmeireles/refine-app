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
    <>
  <StatusBar/>
    <View className="flex-1 bg-white mt-8 items-center justify-center flex">
    <ScrollView className="w-full h-full">
      {data.map(card => {
        return (
          <Card key={card.autorizado.codigo} name={card.aluno.nome} auth={card.responsavel_autorizador.nome} resp={card.autorizado}/>
        )
      })}
    </ScrollView>
    </View>
    </>
  );
}

