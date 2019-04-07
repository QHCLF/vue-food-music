<template>
    <div class="playList">

        <div class="header">
            <span class="text">播放全部</span>
            <span class="count">(共{{this.item.length}}首)</span>
        </div>
        <ul class="musicList">
            <li class="song"
                v-for="(song, index) in this.item"
                :key="index"
                @click="openSong"
            >
                <div class="idcount">{{index + 1}}</div>
                <div class="songName">{{song[0].name}}</div>
                <div class="ar">{{song[0].ar[0].name}}-{{song[0].name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name:"playList",
        data(){
            return{
            }
        },
        methods:{
            openSong (item) {
                this.$router.push(`${this.$route.path + item.id}`);
                this.setTopList(item);
            }
        },
        computed:{
            ...mapGetters([
                'item'
            ])
        }
    }
</script>

<style>
    .playList{
        width: 100%;
        height: 10rem;
        margin-left: -1.7rem;
        border-top: 1px solid gray;

    }

    .playList .musicList{
        list-style: none;
        text-align: left;
    }
    .playList .musicList .song{
        width: 20rem;
        height: 4rem;
    }

    .playList .musicList .song .idcount{
        width: 2rem;
        height: 2rem;
        float: left;
        margin-top: 0.2rem;
        color: gray;
    }
    .playList .musicList .song .songName{
        width: 20rem;
        height: 1.4rem;
    }

    .playList .musicList .song .ar{
        width: 20rem;
        height: 2rem;
        font-size: 13px;
        color: gray;
    }


</style>
