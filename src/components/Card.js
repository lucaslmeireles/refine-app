import {View, Text} from 'react-native'
export function Card({name, auth, resp}){
    const {resp: cpf, nome, relacao} = resp
    return (
        <View>
            <Text>{name}</Text>
            <Text>Autorizado</Text>
            <Text>Nome: {nome}, CPF: {cpf}, Relação: {relacao}</Text>
            <Text>Responsavel autorizador</Text>
            <Text>{auth}</Text>
        </View>
    )
}