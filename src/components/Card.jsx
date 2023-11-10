import {View, Text} from 'react-native'
export function Card({name, auth, resp}){
    const {resp: cpf, nome, relacao} = resp
    return (
        <View className='w-11/12 h-auto bg-slate-100 rounded mb-4 mr-2 ml-2 shadow-sm'>
            <Text className='text-base font-medium text-neutral-800'>Autorizado</Text>
            <View className='flex flex-col'>
            <Text className='text-base font-normal text-neutral-800'>Informações:</Text>
            <Text className='text-base font-normal'>Nome: {nome}, CPF: {cpf}, Relação: {relacao}</Text>
            </View>
            <Text className='text-base font-medium text-neutral-900'>Responsavel autorizador</Text>
            <Text className='text-base font-normal text-neutral-800'>{auth}</Text>
        </View>
    )
}