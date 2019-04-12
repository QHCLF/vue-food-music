<template>
    <div class="player" v-show="playlist.length > 0">
        <transition name="normal">
            <div class="normal-player" v-show="fullScreen">
                <div class="background">
                    <div class="top">
                        <div class="back" @click="back">
                             <i class="iconfont icon-jiantouxia"></i>
                        </div>
                        <h2 class="title" v-html="currentSong[0].name"></h2>
                        <h4 class="subTitle" v-html="currentSong[0].ar[0].name"></h4>
                    </div>
                    <div class="middle">
                        <transition name="middleL">
                            <div class="middleL">
                                <img :src="currentSong[0].al.picUrl" class="image" >
                            </div>

                         </transition>
                    </div>
                    <div class="bottom">

                        <span class="current-time">{{this.currentTime | getTime}}</span>
                        <div class="play-progress">
                            <progress-bar :progress="playProgress"
                                          :disableClick="false" @click="click"
                                          :disableDrag="false" @drag="drag" @dragEnd="dragEnd"/>
                        </div>
                        <span class="total-time"> {{this.duration | getTime}}</span>

                        <div class="leftIcon">
                            <i class="iconfont icon-rewind" @click="prev"></i>
                        </div>
                        <audio id="music-audio"
                               ref="audio"
                               :src = "this.url"
                               controls="controls"
                               @timeupdate="updateTime"
                               @canplay="ready"
                        >
                        </audio>
                        <div class="rightIcon">
                            <i class="iconfont icon-forward" @click="next"></i>
                        </div>
                    </div>
                </div>
            </div>

        </transition>
        <transition name="mini">
            <div class="mini-player" v-show="!fullScreen">
                <div class="icon">
<!--                    <img :src="currentSong[0].al.picUrl" width="40px" height="40px">-->
                </div>
               <div class="text">
<!--                   <h2 class="title" v-html="currentSong[0].name"></h2>-->
<!--                   <h4 class="subTitle" v-html="currentSong[0].ar[0].name"></h4>-->
                </div>
                <div class="contorl">
                    <audio ref="hh" id="song" src="this.url"></audio>
                </div>
            </div>
        </transition>

    </div>

</template>

<script>

    import {getSongsUrl, checked} from "../api/songs";
    import ProgressBar from "./ProgressBar"
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return{
                message: '',
                url: '',
                playProgress: 0,
                currentTime: 0,
                duration: 0

            }
        },
        created(){
        },
        methods:{
            _contan(){//获取歌曲url信息
                let id = this.$store.getters.songId;
                checked(id).then((res) => {
                    if(res.data.success){
                        getSongsUrl(id).then((res) => {
                            this.url = res.data.data[0].url;

                        });
                    }else {
                        this.message = res.data.message;
                    }
                 });
            },
            click(progress) {
                const audioDOM = this.$refs.audio;
                if (audioDOM.duration > 0) {
                    let currentTime = audioDOM.duration * progress;
                    this.playProgress = progress;
                    this.currentTime = currentTime;
                    audioDOM.currentTime = currentTime;
                    audioDOM.play();
                }
            },
            drag(progress) {
                const audioDOM = this.$refs.audio;
                if (audioDOM.duration > 0) {
                    audioDOM.pause();
                    this.dragProgress = progress;
                }
            },
            dragEnd() {
                const audioDOM = this.$refs.audio;
                if (this.$refs.audio.duration > 0) {
                    let currentTime = audioDOM.duration * this.dragProgress;
                    this.playProgress = this.dragProgress;
                    this.currentTime = currentTime;

                    this.$nextTick(() => {
                        audioDOM.currentTime = currentTime;
                        audioDOM.play();
                        this.dragProgress = 0;
                    });
                }
            },
            updateTime (e) {
                this.currentTime = e.target.currentTime
                this.playProgress = this.currentTime / this.duration;
            },
            ready () {
                this.duration = this.$refs.audio.duration
            },



            back () {//切换mini模式
                this.setFullScreen(false);
            },
            prev(){//点击上一曲

            },
            next() {//点击下一曲
            },

            ...mapMutations({
                setFullScreen: 'SET_FULL_SCREEN',
                setCurrentIndex: 'SET_CURRENT_INDEX',
            }),


        },
        filters: {
            // 格式化时间
            getTime(second) {
                second = Math.floor(second);
                let minute = Math.floor(second / 60);
                second = second - minute * 60;
                return minute + ":" + formatTime(second);
            }
        },
        computed:{
            ...mapGetters([
                'playlist',
                'currentIndex',
                'currentSong',
                'playing',
                'fullScreen',

            ])

        },
        mounted() {

        },
        beforeDestroy() {
            //this.removeEventListeners()

        },
        watch: {
            currentSong: function () {
                this._contan();
            }

        },
        components:{
            ProgressBar
        }
     }

    function formatTime(time) {
        let timeStr = "00";
        if (time > 0 && time < 10) {
            timeStr = "0" + time;
        } else if (time >= 10) {
            timeStr = time;
        }
        return timeStr;
    }
</script>

<style>
    @import '//at.alicdn.com/t/font_1121604_zt2hp3lbc0j.css';

    .player{
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 150;
        background-color: pink;
        overflow-y: hidden;
    }

    .back{
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
    }

    .title{
        margin: 0;
        margin-top: -2.5rem;
    }

    .subTitle{
        margin: 0;
    }

    .middle{
        width: 100%;
        height: 20rem;
        padding-left: 3.7rem;
        padding-top: 3rem;
        box-sizing: border-box;
        background-color: green;
        margin-top: 5rem;
    }

    .middleL{
        width: 13.5rem;
        height: 13.5rem;
        border-radius: 50%;
        border: 0.5rem solid gray;
    }
    .image{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .bottom{
        width: 100%;
        height: 11rem;
    }
    .bottom audio{
        margin-top: 3rem;
    }
    .bottom .leftIcon{
        width: 2rem;
        height: 2rem;
        position: relative;
        top: 6rem;
    }

    .bottom .rightIcon{
        width: 2rem;
        height: 2rem;
        margin-top: 4rem;
        float: right;
    }
    .mini-player{
        width: 100%;
        height: 5rem;
        background-color: #42b983;
        position: fixed;
        bottom: 0;
    }
</style>
