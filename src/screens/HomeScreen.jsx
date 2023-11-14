import { useEffect, useState } from "react"
import { ScrollView, View, Text, Pressable, TextInput } from "react-native"
import {datamock} from '../data/mockupdata'
import { getData } from "../data/getData"
import StudentText from "../components/Card"
export function HomeScreen({navigation}){
  const [data, setData]= useState([])
  const [loading, setLoading]= useState(true)
  useEffect(() => {
      async function fetchData() {
        const response = await getData()
        const uniqueNames = [...new Set(response.map(v => v.aluno.nome))]
        setData(uniqueNames)
        setLoading(false)
      }
      fetchData()
  },[])


  return (
    <>
    <View className="bg-white items-center justify-center flex ">
    <View>
      <TextInput/>
    </View>
    <ScrollView className="w-full h-full">
    <StudentText data={data} navigation={navigation}/>
    </ScrollView>
    </View>
    </>
  );

}