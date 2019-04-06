import * as types from './mutation-types'

const mutations ={
    [types.SET_MUSIC_LIST] (state, musicList) {
        state.musicList = musicList
    },
    [types.SET_SINGER] (state, singer) {
        state.singer = singer
    },
    [types.SET_TOP_LIST] (state, topList) {
        state.topList = topList
    },
    [types.SET_ITEM] (state, item) {
        state.item = item
    }
}

export default mutations
