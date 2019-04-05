<template>
    <div class="dj">
        <header-back :title="title" :counts="counts"></header-back>
        <div class="djGood">
            <h3>今日优选</h3>
            <ul class="djList">
                <li class="djItem"
                    v-for="item in djRadios"
                    :key="item.id"
                >
                    <img :src="item.picUrl">
                    <div class="discribe">
                        <span class="big">{{item.copywriter}}</span>
                        <span>{{item.category}}</span>
                    </div>

                </li>
            </ul>
        </div>
        <div class="djRecommend">
            <h3>电台推荐</h3>
        </div>
    </div>
</template>

<script>
    import HeaderBack from '@/components/Header.vue'
    import {getDjrecommend} from '../api/dj.js'
    import {ERR_OK} from '../utill/config'

    export default {
        data(){
            return{
                title: "电台",
                counts: 1,
                djRadios: []
            }
        },
        created(){
            this._getDjrecommend()
        },
        methods:{
            _getDjrecommend(){
                getDjrecommend().then((res) => {
                    if (res.status === ERR_OK) {
                        this.djRadios = res.data.djRadios.slice(0, 4)
                    }
                })
            }
        },
        components:{
            HeaderBack
        }
    }

</script>

<style>
    .dj{
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: scroll;
    }
    .dj h3{
        margin-top: 3rem;
        margin-bottom: 0;
        padding-right: 16.5rem;
    }

    ul{
        list-style: none;
    }

    .dj .djGood{
        width: 23rem;
        height: 27rem;
    }

    .dj .djGood .djList{
        width: 100%;
        height: 10rem;
        padding-left: 0.6rem;
    }

    .dj .djGood .djList .djItem{
        width: 22rem;
        height: 6rem;
    }
    .dj .djGood .djList .djItem img{
        width: 5rem;
        border-radius: 0.3rem;
        float: left;
    }

    .discribe{
        padding-right: 3rem;
        width: 13rem;
        float: right;
        line-height: 4rem;
        height: 5rem;
        text-align: left;
    }

    .discribe .big{
        width: 14rem;
        height: 1.25rem;
        font-size: 14px;
        float: left;
    }
</style>
