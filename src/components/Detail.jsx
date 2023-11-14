import { Text, View } from "react-native"
import { datamock } from "../data/mockupdata"
export function Detail({name}) {
    const info_resp = datamock.filter(data => data.aluno.nome == name)

    if (!info_resp.length) return <Text>Nenhum responsavel encontrado</Text>
    return (
        <View className= 'flex flex-1 bg-slate-100 ml-3 mr-3 p-2'>
            <Text className='font-semibold text-xl text-neutral-950'>Responsável Autorizado</Text>
            {
            info_resp.map(v => {
                return (
                    <>
                    <Text className='font-normal text-base text-neutral-900'>{v.autorizado.nome}</Text>
                    <Text className='font-normal text-base text-neutral-900'>CPF: {v.autorizado.cpf}</Text>
                    <Text className='font-normal text-base text-neutral-900' >Relação: {v.autorizado.relacao}</Text>
                    </>
                )
            })}
            <Text>{info_resp[0].responsavel_autorizador.nome}</Text>
        </View>  
    )
}