import axios from 'axios'
import {HOST} from '../utill/config.js'

export function getTop (id) {
    const url = HOST + `/top/list?idx=${id}`
    return axios.get(url)
}
