<template>
    <div class="songsSoft">
        <div class="Songs">
            <div v-for="playlist in playlists" :key="playlist.id" class="contain" @click="selectSong(playlist)">
                <img :src="playlist.coverImgUrl"  class="item">
                <span class="describe">{{playlist.name}}</span>
            </div>
        </div>

        <div class="footer"></div>
    </div>
</template>

<script>
    import {ERR_OK} from '../../utill/config'
    import {getSoftSongs} from '../../api/songs.js'
    import {mapMutations} from 'vuex'
    export default {
        name:"soft",
        data(){
            return{
                playlists: []
            }
        },
        created() {
            this._getSoftSongs()
        },
        methods:{
            _getSoftSongs(){
                getSoftSongs().then((res) => {
                    if (res.status === ERR_OK) {
                        this.playlists = res.data.playlists
                    }
                })
            },
            selectSong (item) {
                this.$router.push(`${'songDetail/' + item.id}`);
                this.setTopList(item);
            },
            ...mapMutations({
                setTopList: 'SET_TOP_LIST'
            })
        }
    }
</script>

<style>
    .songsSoft{
        position: fixed;
        width: 100%;
        height: 100%;
        margin-top: 1.5rem;
        overflow-y: scroll;
    }
    .songsSoft::-webkit-scrollbar {
        display: none;
    }
    .contain{
        width: 31%;
        height: 9.5rem;
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

    .footer{
        width: 100%;
        height: 5rem;
        margin-top: 100rem;
    }
</style>
