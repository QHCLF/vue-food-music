import axios from 'axios'
import {HOST} from '../utill/config.js'

export function getBanner () {//获取广告
    const url = HOST + `/banner`
    return axios.get(url)
}

export function getRecommendSongs() {//获取推荐歌单
    const url = HOST + `/top/playlist?limit=6&order=new`
    return axios.get(url)
}

export function getRecommendListDetail (id) {//获取歌单详情
    const url = HOST + `/playlist/detail?id=${id}`
    return axios.get(url)
}

export function getAlbums() {//获取推荐专辑
    const url = HOST +  `/album/newest?limit=16`
    return axios.get(url)
}

export function getDtailAlbums(id) {//获取专辑内容
    const url = HOST +  `/album?id=${id}`
    return axios.get(url)
}
