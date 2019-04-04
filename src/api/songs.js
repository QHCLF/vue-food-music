import axios from 'axios'
import {HOST} from '../utill/config.js'

 export function getRecommend() {//获取推荐歌单
     const url = HOST + `/personalized`
    return axios.get(url)
 }

export function getHighSongs() {//获取精品歌单
    const url = HOST + `/top/playlist/highquality`
    return axios.get(url)
}

export function getChinaSongs() {//获取华语歌单
    const url = HOST + `/top/playlist?tag=华语`
    return axios.get(url)
}

export function getBalladSongs() {//获取民谣歌单
    const url = HOST + `/top/playlist?tag=民谣&order=new`
    return axios.get(url)
}

export function getSoftSongs() {//获取轻音乐（因为发现接口有问题，于是就不一样就行了，哈哈尴尬）
    const url = HOST + `/top/playlist/highquality?before=1503639064232`
    return axios.get(url)
}

export function getRecommendSongs() {//获取推荐歌单
    const url = HOST + `/top/playlist/highquality`
    return axios.get(url)
}

export function getSongsDtail(id) {//获取歌曲详细信息
    const url = HOST + `/playlist/detail?id=${id}`
    return axios.get(url)
}

export function getClassify() {//获取歌曲分类
    const url = HOST + `/playlist/catlist`
    return axios.get(url)
}

export function getSongsUrl(id) {//获取歌曲URL
    const url = HOST + `/song/url?id=${id}`
    return axios.get(url)
}

export function getLyric(id) {//获取歌词
    const url = HOST + `/lyric?id=${id}`
    return axios.get(url)
}


