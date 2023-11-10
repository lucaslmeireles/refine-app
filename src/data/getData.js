import axios from "axios";

axios.defaults.headers.common = {
    "X-API-Key":"QEtBjJeDQE8qkO7CHcudDkFNEn7dsoeSHN696fpVku4Kso5lLCprqCdkZPFYOct1"
}
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

export async function getData(){
    // const res = await axios.get('https://api.clipescola.com.br/cliphub/clipescola/entradasaida/autorizacoes?data_inicial=01%2F03%2F2023%2023%3A59%3A59&data_final=31%2F03%2F2023%2023%3A59%3A590', config)
    // return res.data.data

}