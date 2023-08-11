import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&per_page=100&page=1&sparkline=false';

const getCoin = async(vsCurrency) =>{
    const result = await axios.get(`${BASE_URL}&vs_currency=${vsCurrency}`);
    return result.data;
     
}
export {getCoin};