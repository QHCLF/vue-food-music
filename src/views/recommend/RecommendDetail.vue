<template>
    <div class="recomDetail">
        <header-back :title="title" :counts="counts"></header-back>
        <div class="top">
            <img :src="this.detail.coverImgUrl">
            <div class="discribe">
                <span class="name">{{this.detail.name}}</span>
                <div>{{this.detail.description}}</div>
            </div>
        </div>
        <playList class="bottom"></playList>
    </div>
</template>

<script>
     import {getSongsDtail} from '../../api/songs.js'
    import {getRecommendListDetail} from '../../api/recommend.js'
    import HeaderBack from '@/components/Header.vue'
     import playList from '@/components/playList.vue'
    // import {ERR_OK} from '../../utill/config'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return{
                title: "歌单",
                counts: 1,
                detail: null,
                songs: [],
                temp: []
            }
        },
        created (){
            this._getRecommendListDetail()
        },
        methods:{
            async  getData(){
                await this._getLIST();
            },
            _getRecommendListDetail(){
                const Id = this.$route.params.id
                getRecommendListDetail(Id).then(res =>{
                        this.detail = res.data.playlist;
                        this.getData()
                })

             },
            _getLIST(){
                this.detail.trackIds.map((item) => {
                    getSongsDtail(item.id).then(res =>{
                        this.songs.push(res.data.songs)
                    })
                })
                this.setItem(this.songs)
            },
            // limitNumber(text){
            //     let str = text;
            //     if(str.length() > 15){
            //         str = str.substr(0, 85) + '...';
            //     }
            //     return str;
            // },


            ...mapMutations({
                setItem: 'SET_ITEM'
            })
        },
        computed:{
            ...mapGetters([
                'topList'
            ]),

        },
        watch:{

        },
        components:{
            HeaderBack,
            playList
        }
    }
</script>

<style>
    .recomDetail{
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: scroll;
    }
    .recomDetail::-webkit-scrollbar {
        display: none;
    }
    .recomDetail .top{
        width: 22rem;
        height: 12rem;
        margin-top: 3rem;
    }

    .recomDetail .top img{
        width: 10rem;
        float: left;
        margin-left: 0.8rem;
        margin-top: 1rem;
        border-radius: 0.3rem;
    }

    .recomDetail .top .discribe{
        width: 10rem;
        float: right;
        height: 9.42rem;
        margin-top: 1rem;
        text-align: left;
        overflow-y: hidden;
    }
    .recomDetail .top .discribe .name{
        width: 10rem;
        height: 4rem;
        font-size: 16px;
    }
    .recomDetail .top .discribe div{
        font-size: 12px;
        margin-top: 1rem;
    }
</style>
