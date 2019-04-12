import * as types from './mutation-types'

const mutations ={

    [types.SET_PLAYING_STATE] (state, flag) {
        state.playing = flag
    },
    [types.SET_FULL_SCREEN] (state, flag) {
        state.fullScreen = flag
    },
    [types.SET_PLAYLIST] (state, list) {
        state.playlist = list
    },
    [types.SET_CURRENT_INDEX] (state, index) {
        state.currentIndex = index
    },
    [types.SET_TOP_LIST] (state, topList) {
        state.topList = topList
    },
    [types.SET_ITEM] (state, item) {
        state.item = item
    }
}

export default mutations
