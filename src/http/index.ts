import axios from 'axios';
const Apikey = "0e293b5f4b6f6dcffb989d8620d4134ac406e177f1128cc309f0c7e80b9937c3";

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
        headers: {
            authorization: `ApiKey ${Apikey}`
        }   
});

