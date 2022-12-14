
import { privateAxios } from '../../utils/api/customAxios'
import {AIRLINE_URL} from '../../utils/api/urls'

const axios = privateAxios

export const getAirline = () => {
    return new Promise((resolve,reject) =>{
    axios.get(AIRLINE_URL.AIRLINE).then((res) => resolve(res))
    .catch((err) => {
        reject(err.response.data)
        })})
;}


