<template>
    <div class="ranking">
        <header-back :title="title" :counts="counts"></header-back>
        <h3>官方榜</h3>
        <div class="scroll">
            <ul>
                <li class="item" v-for="(item, index) in yunTopList"
                    :key="index"
                >
                    <img :src="item.coverImgUrl">
                    <ul class="songlist">
                        <li class="song"
                            v-for="(song, index) in item.top"
                            :key="index"
                        >
                            <span>{{index + 1}}.</span>
                            <span>{{song.name}} - {{song.ar[0].name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="recommendRanking">
            <h3>推荐榜</h3>
            <div class="Songs">
                <div v-for="item in recommendTop" :key="item.id" class="contain">
                    <img :src="item.coverImgUrl"  class="item">
                    <span class="describe">{{item.name}}</span>
                </div>
            </div>
        </div>

        <div class="globalRanking">
            <h3>全球榜</h3>
            <div class="Songs">
                <div v-for="(item, index) in globalTop" :key="index" class="contain">
                    <img :src="item.coverImgUrl"  class="item">
                    <span class="describe">{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="moreRanking">
            <h3>更多榜单</h3>
            <div class="Songs">
                <div v-for="item in moreTop" :key="item.id" class="contain">
                    <img :src="item.coverImgUrl"  class="item">
                    <span class="describe">{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBack from '@/components/Header.vue'
    import {getTop} from '../api/ranking.js'

    const YUNMUSIC_TOP = [3, 1, 0, 2, 17]
    const RECOMMEND_TOP = [23, 22, 18, 15, 21, 7]
    const GLOBAL_TOP = [6, 5, 8, 10, 21, 16]
    const MORE_TOP = [4, 9, 11, 12, 13, 14, 19, 20]

    export default {
        data(){
            return{
                counts: 1,
                title: "排行榜",
                yunTopList: [],
                recommendTop: [],
                globalTop: [],
                moreTop: []
            }
        },
        created () {
            this._getTopList()
        },
        methods:{
            _getTopList () {
                for (let i = 0; i < YUNMUSIC_TOP.length; i++) {
                    getTop(YUNMUSIC_TOP[i]).then((res) => {
                        let list = res.data.playlist
                        list.top = res.data.playlist.tracks.slice(0, 3)
                        this.yunTopList.push(list)
                    })
                }
                for(let i = 0; i < 6; i++){
                    getTop(RECOMMEND_TOP[i]).then((res) => {
                        let list = res.data.playlist
                        list.top = res.data.playlist.tracks.slice(0, 3)
                        this.recommendTop.push(list)
                    })
                }
                for(let i = 0; i < 6; i++){
                    getTop(GLOBAL_TOP[i]).then((res) => {
                        let list = res.data.playlist
                        list.top = res.data.playlist.tracks.slice(0, 3)
                        this.globalTop.push(list)
                    })
                }
                for(let i = 0; i < MORE_TOP.length; i++){
                    getTop(MORE_TOP[i]).then((res) => {
                        let list = res.data.playlist
                        list.top = res.data.playlist.tracks.slice(0, 3)
                        this.moreTop.push(list)
                    })
                }
            },
        },
        components:{
            HeaderBack
        }
    }
</script>

<style>

    .ranking{
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: scroll;
    }
    .ranking h3{
        margin-top: 3rem;
        margin-bottom: 0;
        padding-right: 17.5rem;
    }
    .ranking .scroll{
        width: 22rem;
        height: 33rem;
        margin-top: -0.5rem;
    }
    .ranking .scroll ul{
        width: 100%;
        height: 10rem;
        padding-left: 0.6rem;
        list-style: none;
    }
    .ranking .scroll ul .item{
        width: 20rem;
        height: 6.5rem;
    }
    .ranking .scroll ul li img{
        float: left;
        width: 6rem;
        height: 6rem;
        border-radius: 0.3rem;
    }

    .ranking .scroll ul .item .songlist{
        float: right;
        padding: 0;
        text-align: left;
        width: 13rem;
        height: 6rem;
        border-radius: 0.3rem;
    }

    .ranking .scroll ul .item .songlist .song{
        font-size: 26px;
    }

    .recommendRanking{
        width: 22rem;
        height: 23rem;
    }
    .recommendRanking h3{
        margin-top: -0.1rem;
    }

    .globalRanking {
        width: 22rem;
        height: 23rem;
    }

    .globalRanking h3{
        margin-top: -0.1rem;
    }

    .moreRanking{
        width: 22rem;
    }
    .moreRanking h3{
        margin-top: -0.1rem;
        padding-right: 16rem;
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


</style>
