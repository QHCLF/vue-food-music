<template>
    <div class="recomDetail">
        <header-back :title="title" :counts="counts"></header-back>
        <div class="top">
            <img :src="this.topList.coverImgUrl">
            <div class="discribe">
                <span class="name">{{this.topList.name}}</span>
                <div>{{this.topList.description}}</div>
            </div>

        </div>
    </div>
</template>

<script>
    import {getRecommendListDetail} from '../../api/recommend.js'
    import HeaderBack from '@/components/Header.vue'
    import {ERR_OK} from '../../utill/config'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return{
                title: "歌单",
                counts: 1
            }
        },
        created (){
            this._getRecommendListDetail()
        },
        methods:{
            _getRecommendListDetail(){
                const Id = this.topList.id
                getRecommendListDetail(Id).then(res =>{
                    if (res.status === ERR_OK) {
                        this.setItem(res.data.playlist);
                    }

                })
            },
            ...mapMutations({
                setItem: 'SET_ITEM'
            })
        },
        computed:{
            ...mapGetters([
                'topList'
            ]),

        },
        components:{
            HeaderBack
        }
    }
</script>

<style>
    .recomDetail{
        width: 100%;
        height: 100%;
        background-color: pink;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: scroll;
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
        height: 10rem;
        margin-top: 1rem;
        text-align: left;
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
