import * as types from './mutation-types'

export const selectPlay = function ({commit}, {list, index}) {
    commit(types.SET_PLAYLIST, list)//设置播放列表
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}
