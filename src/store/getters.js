import {getSongsUrl, checked} from "../api/songs";

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const currentIndex = state => state.currentIndex

export const topList = state => state.topList

export const item = state => state.item

export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}

export const songId = state => state.playlist[state.currentIndex][0].id

export const currentSongUrl = (state) => {
    if(checkSong.success){
        getSongsUrl(state.playlist[state.currentIndex][0].id).then((res) => {
            return res.data.data.url
        })
    }else{
        return checkSong.message
    }

}

export const checkSong = (state) =>{
    checked(state.playlist[state.currentIndex][0].id).then((res) => {
        return res.data.message
    })
}


