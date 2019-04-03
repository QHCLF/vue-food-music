<template>
    <div class="songsChina">
        <div class="chinaSongs">
            <div v-for="playlist in playlists" class="contain">
                <img :src="playlist.coverImgUrl" class="item">
                <span class="describe">{{playlist.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {ERR_OK} from '../../utill/config'
    import {getChinaSongs} from '../../api/songs.js'
    export default {
        name: "china",
        data(){
            return{
                playlists: []
            }
        },
        created() {
            this._getChinaSongs()
        },
        methods:{
            _getChinaSongs(){
                getChinaSongs().then((res) => {
                    if (res.status === ERR_OK) {
                        this.playlists = res.data.playlists
                    }
                })
            }
        }
    }
</script>

<style>
    .songsChina{
        position: fixed;
        width: 100%;
        height: 100%;
        margin-top: 2rem;
        overflow-y: scroll;
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
    .chinaSongs .item img{
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
</style>
