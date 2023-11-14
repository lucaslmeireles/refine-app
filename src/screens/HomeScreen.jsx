import { useEffect, useState } from "react"
import { ScrollView, View, Text, Pressable, TextInput } from "react-native"
import {datamock} from '../data/mockupdata'
import { getData } from "../data/getData"
import { RightOutlined } from "@ant-design/icons"
export function HomeScreen({navigation}){
  const [data, setData]= useState([])
  const [loading, setLoading]= useState(true)
  useEffect(() => {
      async function fetchData() {
        const response = await getData()
        const uniqueNames = [...new Set(datamock.map(v => v.aluno.nome))]
        setData(uniqueNames)
        setLoading(false)
      }
      fetchData()
  },[])
  const StudentText = () => {
    const StudentTexts = []
    for(const name of data.values()){
        StudentTexts.push(
          <Pressable className='w-4/5 mx-3 my-4 h-14 bg-slate-100 flex rounded-md align-middle justify-center '  onPressIn={() => (navigation.navigate('Details', {
            name: name
          }))}>
          <Text className='text-lg font-base px-3'>{name}</Text>
          </Pressable>
        )
  }

  return StudentTexts
}

  return (
    <>
    <View className="bg-white items-center justify-center flex ">
    <View>
      <TextInput/>
    </View>
    <ScrollView className="w-full h-full">
    <StudentText/>
    </ScrollView>
    </View>
    </>
  );

}