<template>
    <div class="recommend">
        <div class="banner">
            <swiper :options="swiperOption" style="width: 100%">
                <swiper-slide v-for="banner in banners" :key="banner.id" style="width: 100%" >
                    <img :src="banner.imageUrl" class="bannerPic">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <h3>推荐歌单</h3>
        <transition-group class="recommendSongs">
            <div v-for="item in playlists" :key="item.id" @click="selectSongs(item)">
                <img :src="item.coverImgUrl" class="item" >
            </div>
        </transition-group>

        <div class="albums">
            <h3>推荐专辑</h3>
            <swiper :options="swiperOption" style="width: 100%">
                <swiper-slide v-for="album in albums" :key="album.id" style="width: 100%" >
                    <img :src="album.blurPicUrl" style="width: 100%">
                    <span class="albumTitle">{{album.name}}</span>
                </swiper-slide>
            </swiper>
        </div>

        <router-view />
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import {ERR_OK} from '../../utill/config'
    import {getBanner, getRecommendSongs, getAlbums} from '../../api/recommend.js'
    import {mapMutations} from 'vuex'



    export default {
        data(){
            return{
                banners: [],
                playlists: [],
                albums: [],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        autoplay:true
                    }
                }
            }
        },
        created () {
            this._getBanner(),
                this._getRecommendSongs(),
                this._getAlbums()
        },
        methods:{
            _getBanner () {
                getBanner().then((res) => {
                    if (res.status === ERR_OK) {
                        this.banners = res.data.banners
                    }
                })
            },
            _getRecommendSongs(){
                getRecommendSongs().then((res) =>{
                    if(res.status === ERR_OK){
                        this.playlists = res.data.playlists
                    }
                })
            },
            _getAlbums(){
                getAlbums().then(res =>{
                    if (res.status === ERR_OK) {
                        this.albums = res.data.albums
                    }
                })
            },
            selectSongs (item) {
                this.$router.push(`${this.$route.path + item.id}`);
                this.setTopList(item);
            },
            ...mapMutations({
                setTopList: 'SET_TOP_LIST'
            })

        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    .recommend{
        width: 100%;
        height: 100%;
        margin-top: 5.2rem;
        z-index: 100;
        background-color: white;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: scroll;
    }
    .recommend::-webkit-scrollbar {
        display: none;
    }
    .banner{
        width: 100%;
        height: 12rem;
    }
    .bannerPic{
        width: 100%;
        height: 12rem;
        overflow: hidden;
    }
    .recommendSongs{
        width: 100%;
        height: 20rem;
        margin-top: 1rem;
    }

    .recommendSongs div{
        width: 7rem;
        height: 7rem;
        float: left;
        margin-bottom: 1rem;
        margin-right: 0.3rem;
    }
    .item{
        float: left;
        width: 6.97rem;
        height: 7rem;
        margin-right: 0.25rem;
        margin-left: 0.25rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border-radius: 0.3rem;
    }
    .recommendSongs .item img{
        transform:scale(0.1)
    }
    h3{
        width: 100%;
        height: 2rem;
        margin-left: 0.5rem;
        text-align: left;
        margin-bottom: 0;
    }
    .albums{
        width: 100%;
        height: 33rem;
        margin-top: 17.6rem;
    }
    .albumTitle{
        font-size: 18px;
    }



</style>
