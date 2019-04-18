<template>
    <div class="recommend">
        <div class="slider" v-on:mouseover="stop()" v-on:mouseout="move()">
            <div class="show">
                <transition-group tag="ul" name="image" >
                    <li v-for="(item, index) in result"
                        v-bind:key="index"
                        :class="index===mark ? 'current' : 'ordinary'"
                        @click="selectSong(item)"
                    >
                        <div :class="index===mark ? 'null' : 'mengc'"></div>
                        <img :src="item.picUrl">
                        <span class="describe">{{item.name}}</span>
                    </li>
                </transition-group>
            </div>
        </div>

        <div class="Songs">
            <div v-for="(item, index) in left" :key="index" class="contain" @click="selectSong(item)">
                <img :src="item.picUrl"  class="item">
                <span class="describeitem">{{item.name}}</span>
            </div>
        </div>

        <div class="footer">

        </div>

    </div>
</template>

<script>
    import {ERR_OK} from '../../utill/config'
    import {getRecommend} from '../../api/songs.js'
    import {mapMutations} from 'vuex'

    export default {
        name: "recommendSongs",
        data(){
            return{
                mark: 0,
                timer: null,
                result: [],
                all: [],
                left: []

            }
        },
         created() {
             this._getRecommend(),
             this.play()
         },
        methods:{
            _getRecommend(){
                getRecommend().then((res) => {
                    if (res.status === ERR_OK) {
                        this.all = res.data.result
                        this.result = this.all.slice(0, 3);
                        this.left = this.all.slice(4, 30);
                    }
                })
            },
              atuoPlayAdd(){
                  this.mark++;
                  if(this.mark === 3){
                     this.mark = 0;
                  }
              },
              play(){
                  this.timer = setInterval(this.atuoPlayAdd, 5000)
              },
              stop(){
                 clearInterval(this.timer)
              },
              move(){
                  this.timer = setInterval(this.atuoPlayAdd, 5000)
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

<style scoped>
    .recommend{
        position: fixed;
        width: 100%;
        height: 100%;
        margin-top: 1rem;
        overflow-y: scroll;
    }
    .recommend::-webkit-scrollbar {
        display: none;
    }

    ul{
        list-style: none;
        width: 100%;
        height: 17rem;
        padding: 0;
    }
    .slider{
        width: 100%;
        height: 15rem;
        margin: 0 auto;
        margin-top: -0.2rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
        position: relative;
    }
    .show{
        width: 1024px;
        height: 320px;
    }
    .null{
        width: 10rem;
        height: 10rem;
        position: absolute;
    }
    .mengc{
        width:10rem;
        height: 13rem;
        background-color: white;
        opacity:0.5;
        border-radius: 0.3rem;
        float: left;
        position: absolute;
    }
    .current{
        position: absolute;
        width: 10rem;
        height: 14rem;
        margin-left: 6.2rem;
        position: absolute;
        z-index: 10;

    }
    .ordinary{
        width: 9rem;
        height: 12rem;
        margin-left: 0.4rem;
        margin-right: 0.75rem;
        margin-top: 1.6rem;
        float: left;
        padding-right: 2.4rem;
    }
    .ordinary img{
        width: 9rem;

    }

    .ordinary .describe{
        width: 9rem;
        height: 2.5rem;
        font-size: 12px;
        border: 1px solid gainsboro;
        border-top: 0;
        border-radius: 0.3rem;

    }


    img{
        width: 10rem;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        float: left;
    }


    .image-enter-active{
        transition: all 3s;

    }
    .image-leave-active{
        transition: all 3s;
    }

    .image-enter-active, .image-leave {
        transition: opacitys 0.5s
    }
    .image-leave-active, .image-enter {
        opacity: 0;
    }
    .describe{
        width: 10rem;
        height: 3.45rem;
        padding-top: 0.5rem;
        float: right;
        font-size: 14px;
        background-color: white;
        border: 1px solid gainsboro;
        border-top: 0;
        border-radius: 0.3rem;
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
    .describeitem{
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
