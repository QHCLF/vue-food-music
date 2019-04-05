import axios from 'axios'
import {HOST} from '../utill/config.js'

export function getDjrecommend () {
    const url = HOST + `/dj/recommend`
    return axios.get(url)
}
