import { Text, View } from "react-native"
import { datamock } from "../data/mockupdata"
import { Card } from "./Card"
export function Detail() {
    const name = 'Lucas Gabriel de Assis Silva'
    const info_resp = datamock.filter(data => data.aluno.nome == name)

    if (!info_resp.length) return <Text>Nenhum responsavel encontrado</Text>
    console.log(info_resp.map(v => v.autorizado))
    console.log(info_resp[0].aluno.nome)
    return (
        <View className= 'flex flex-1 justify-center justify-items-center align-middle bg-slate-50 mt-5'>
            {info_resp.map(v => {
                return (
                    <>
                    <Text>{v.autorizado.nome}</Text>
                    <Text>{v.autorizado.cpf}</Text>
                    <Text>{v.autorizado.relacao}</Text>
                    </>
                )
            })}
            <Text>{info_resp[0].responsavel_autorizador.nome}</Text>
        </View>  
    )
}