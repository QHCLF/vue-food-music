<template>
    <div class="songsBallad">
        <div class="Songs">
            <div v-for="playlist in playlists" class="contain">
                <img :src="playlist.coverImgUrl" class="item">
                <span class="describe">{{playlist.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {ERR_OK} from '../../utill/config'
    import {getBalladSongs} from '../../api/songs.js'
    export default {
        name:"ballad",
        data(){
            return{
                playlists: []
            }
        },
        created() {
            this._getBalladSongs()
        },
        methods:{
            _getBalladSongs(){
                getBalladSongs().then((res) => {
                    if (res.status === ERR_OK) {
                        this.playlists = res.data.playlists
                    }
                })
            }
        }
    }
</script>
<style>
    .songsBallad{
        position: fixed;
        width: 100%;
        height: 100%;
        margin-top: 1.5rem;
        overflow-y: scroll;
    }
    .songsBallad::-webkit-scrollbar {
        display: none;
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
    .Songs .item img{
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
