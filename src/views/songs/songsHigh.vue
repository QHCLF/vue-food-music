<template>
    <div class="high">
        <div class="head">
            <h3>全部</h3>
            <span class="filter">
                <i class="iconfont icon-guifandaohangshaixuanzhankai"></i>
                <span>筛选</span>
            </span>
        </div>

        <div class="highSongs">
            <div v-for="playlist in playlists" class="contain">
                <img :src="playlist.coverImgUrl" class="item">
                <span class="describe">{{playlist.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {ERR_OK} from '../../utill/config'
    import {getHighSongs} from '../../api/songs.js'
    export default {
        name: "high",
        data(){
            return{
                playlists: []
            }
        },
        created() {
            this._getHighSongs()
        },
        methods:{
            _getHighSongs(){
                getHighSongs().then((res) => {
                    if (res.status === ERR_OK) {
                        this.playlists = res.data.playlists
                    }
                })
            }
        }
    }
</script>

<style>
    @import '//at.alicdn.com/t/font_1121604_2qqvwccomu3.css';
    .high{
        position: fixed;
        width: 100%;
        height: 100%;
        margin-top: 2rem;
        overflow-y: scroll;
    }

    .head{
        width: 100%;
        height: 2.5rem;
    }

    .contain{
        width: 31%;
        height: 9rem;
        float: left;
        margin-right: 0.25rem;
        margin-left: 0.25rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;

    }
    .highSongs .item img{
        transform:scale(0.1)
    }

    .item{
        float: left;
        width: 100%;
        height: 7rem;
        border-radius: 0.3rem;
    }
    .describe{
        width: 100%;
        height: 2rem;
        float: right;

    }
    h3{
        display: inline-block;
        float: left;
        margin: 0;
        width: 4.7rem;
    }
    .filter{
        width: 4.3rem;
        height: 1.8rem;
        margin-right: 0.5rem;
        font-size: 14px;
        float: right;
        border: 1px solid gray;
        line-height: 1.8rem;
        border-radius: 1.5rem;

    }
    .filter i{
        font-size: 26px;
    }
    .filter span{
        position: relative;
        top: -0.3rem;
    }

</style>
