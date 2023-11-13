import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { ScrollView, View, Text } from "react-native"
import  Card from "../components/Card"
import {datamock} from '../data/mockupdata'
import { getData } from "../data/getData"
import { Detail } from "../components/Detail"
export function Home(){
  const [data, setData]= useState([])
  const [loading, setLoading]= useState(true)
  useEffect(() => {
      async function fetchData() {
        const response = await getData()
        const unique = [...new Set(datamock.map(v => v.aluno.nome))]
        setData(unique)
        setLoading(false)
        console.log(unique)
      }
      fetchData()
  },[])
  const StudentText= () => {
    for(const name of data.values()){
      return (
        <Text>
          {name}
        </Text>
      )     
  }}

  return (
    <>
    <StatusBar/>
    <View className="bg-white items-center justify-center flex ">
    <ScrollView className="w-full h-full">
      <Text className='text-xl font-semibold text-neutral-900'>{}</Text>
      <StudentText/>
    </ScrollView>
    </View>
    </>
  );

}