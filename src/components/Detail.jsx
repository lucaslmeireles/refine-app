import { Text, View } from "react-native";
import { datamock } from "../data/mockupdata";
import { useEffect, useState } from "react";
import { getData } from "../data/getData";
import { Loading } from "./Loading";
export function Detail({ name }) {
  const [info_resp, setInfoResp] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getRaw() {
      const raw_data = await getData();
      const info_resp = raw_data.filter((data) => data.aluno.nome == name);
      setInfoResp(info_resp);
      setLoading(false);
    }
    getRaw();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <View className="flex flex-1  ml-3 mr-3 p-2">
      <Text className="font-semibold text-xl text-neutral-950">
        Responsável Autorizado
      </Text>
      {info_resp.map((v) => {
        return (
          <View className="my-2">
            <Text className="font-normal text-base text-neutral-900">
              {v.autorizado.nome}
            </Text>
            <Text className="font-normal text-base text-neutral-900">
              CPF: {v.autorizado.cpf}
            </Text>
            <Text className="font-normal text-base text-neutral-900">
              Relação: {v.autorizado.relacao.toUpperCase()}
            </Text>
          </View>
        );
      })}
      <Text className="font-semibold text-xl text-neutral-950">
        Quem Autorizou
      </Text>
      <Text className="font-medium text-base text-neutral-950">
        {info_resp[0].responsavel_autorizador.nome}
      </Text>
    </View>
  );
}
