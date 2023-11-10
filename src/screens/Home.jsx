import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { ScrollView, View, Text } from "react-native"
import { Card } from "../components/Card"
import {datamock} from '../data/mockupdata'
import { getData } from "../data/getData"
export function Home(){
  const [data, setData]= useState([])
  useEffect(() => {
      async function fetchData() {
        const response = await getData()
        setData(datamock)
      }
      fetchData()
  },[])
  const responsaveis = data.filter(data => data.aluno.nome === 'Luíza Paiva Borges Tamiozzo')
//   const {aluno: nome} = responsaveis[0]
console.log(responsaveis[0].aluno)
  return (
    <>
    <StatusBar/>
    <View className="bg-white items-center justify-center flex ">
    <ScrollView className="w-full h-full">
        <Text className='text-xl font-semibold text-neutral-900'>{}</Text>
      {responsaveis.map(card => {
        return (
            <>
            <Card key={card.autorizado.codigo}  auth={card.responsavel_autorizador.nome} resp={card.autorizado}/>
            </>
        )
      })}
    </ScrollView>
    </View>
    </>
  );

}