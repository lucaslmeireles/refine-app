import {View, Text} from 'react-native'
export function Card({name, auth, resp}){
    const {resp: cpf, nome, relacao} = resp
    return (
        <View className='w-4/5 h-auto bg-slate-100 rounded mb-4'>
            <Text>{name}</Text>
            <Text>Autorizado</Text>
            <Text>Nome: {nome}, CPF: {cpf}, Relação: {relacao}</Text>
            <Text>Responsavel autorizador</Text>
            <Text>{auth}</Text>
        </View>
    )
}