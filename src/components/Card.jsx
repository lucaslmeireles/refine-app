import {View, Text, Touchable} from 'react-native'
export default function Card({name}){
    return (
        <>
        <Touchable>
        <View className='w-11/12 h-auto bg-slate-100 rounded mb-4 mr-2 ml-2 shadow-sm border'>
        <Text>{name}</Text>
        </View>
        </Touchable>
        </>
    )
}