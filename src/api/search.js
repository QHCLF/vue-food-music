import axios from 'axios'
import {HOST} from '../utill/config.js'

export function getHotSearch () {
    const url = HOST + `/search/hot`
    return axios.get(url)
}

export function matching(data) {
    const  url = HOST + `/search/multimatch?keywords=${data}`
    return axios.get(url)
}
