<template>
    <div class="player" v-show="playlist.length > 0">
        <div class="bg">
            <img :src="currentSong[0].al.picUrl" class="bgImg"/>
        </div>
        <transition name="normal">
            <div class="normal-player" v-show="fullScreen">
                <div class="background">
                    <div class="top">
                        <div class="back" @click="back">
                             <i class="iconfont icon-jiantouxia"></i>
                        </div>
                        <p class="title" v-html="currentSong[0].name"></p>
                        <p class="subTitle" v-html="currentSong[0].ar[0].name"></p>
                    </div>
                    <div class="middle">
                        <transition name="middleL">

                            <div class="middleL">
                                <div class="img" ref="songImg">
                                    <img :src="currentSong[0].al.picUrl" class="image" />
                                </div>
                            </div>

                         </transition>
                    </div>
                    <div class="middleR">
                        <transition name="middleR">
                            <scroll class="middle-r" ref="lyricList">

                            </scroll>
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

                        <div class="play-model-button" @click="changePlayMode">
                            <i :class="'iconfont ' + this.playModes[this.currentPlayMode]"></i>
                        </div>

                        <div class="leftIcon">
                            <i class="iconfont icon-yduishangyiqu" @click="prev"></i>
                        </div>

                        <div class="playorpause" @click="playOrPause">
                            <i :class="playButtonClass"></i>
                        </div>

                        <div class="rightIcon">
                            <i class="iconfont icon-yduixiayiqu" @click="next"></i>
                        </div>
                    </div>
                </div>
            </div>

        </transition>
        <transition name="mini">
            <div class="mini-player" v-show="!fullScreen">
                <div class="icon">
                    <transition name="miniPic">
                            <div class="img rotate" :style="imgStyle" @click="change">
                                <img :src="currentSong[0].al.picUrl" class="image"  width="40px" height="40px"/>
                            </div>
                    </transition>
<!--                    <img :src="currentSong[0].al.picUrl" class="miniIcon" width="40px" height="40px">-->
                </div>
                <div class="mini-play-progress">
                    <progress-bar :progress="playProgress"
                                  :disableButton="true"/>
                </div>
                <div class="center">
                    <span class="title" v-html="currentSong[0].name"></span>
                    <span class="singer" v-html="currentSong[0].ar[0].name"></span>

                    <div class="mini-button">
                        <div class="contorl" @click="playOrPause">
                            <i :class="playButtonClass"></i>
                        </div>

                        <div class="next">
                            <i class="iconfont icon-yduixiayiqu" @click="next"></i>
                        </div>
                    </div>

                </div>


            </div>
        </transition>

        <audio id="music-audio"
               ref="audio"
               :src = "this.url"
               @timeupdate="updateTime"
               @canplay="ready"
        >
        </audio>

    </div>

</template>

<script>

    import {getSongsUrl, checked} from "../api/songs";
    import ProgressBar from "./ProgressBar"
    import Lyric from 'lyric-parser'
    import scroll from "./scroll"
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        data(){
            return{
                message: '',
                url: '',
                playProgress: 0,
                currentTime: 0,
                duration: 0,
                playStatus: false,
                currentPlayMode: 0,
                toastShow: false,
                playModes:['icon-xunhuanbofang', 'icon-suijibofang', 'icon-danquxunhuan'],
                currentShow: false
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
            playOrPause() {
                if (this.playStatus === false) {
                    this.$refs.audio.play();
                    this.playStatus = true;
                    this._startImgRotate();
                } else {
                    this.$refs.audio.pause();
                    this.playStatus = false;
                    this._stopImgRotate();
                }
            },
            _startImgRotate() {
                if (this.$refs.songImg.className.indexOf("rotate") === -1) {
                    this.$refs.songImg.classList.add("rotate");

                } else {
                    this.$refs.songImg.style.webkitAnimationPlayState = "running";
                    this.$refs.songImg.style.animationPlayState = "running";
                }
            },
            _stopImgRotate() {
                this.$refs.songImg.style.webkitAnimationPlayState = "paused";
                this.$refs.songImg.style.animationPlayState = "paused";
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
                if (this.playlist.length > 0 && this.playlist.length !== 1) {
                    let currentIndex = this.currentIndex;
                    if(this.currentPlayMode === 0){
                        if (currentIndex === 0) {
                          currentIndex = 0;
                        }else{
                             currentIndex = currentIndex - 1;
                        }
                    }else if(this.currentPlayMode === 1){
                        currentIndex = parseInt(Math.random() * this.playlist.length, 10);
                    }else {  // 单曲循环
                        this.$refs.audio.play();
                        return;
                    }
                    this.setCurrentIndex(currentIndex)
                    this.playProgress = 0;
                }
            },
            next() {//点击下一曲
                if (this.playlist.length > 0 && this.playlist.length !== 1) {
                    let currentIndex = this.currentIndex;
                    if(this.currentPlayMode === 0){
                        if (currentIndex === this.playlist.length - 1) {
                            currentIndex = 0;
                        }else{
                            currentIndex = currentIndex + 1;
                        }
                    }else if(this.currentPlayMode === 1){
                        currentIndex = parseInt(Math.random() * this.playlist.length, 10);
                    }else {  // 单曲循环
                        this.$refs.audio.play();
                        return;
                    }
                    this.setCurrentIndex(currentIndex)
                    this.playProgress = 0;
                }
            },
            changePlayMode() {
                if (this.currentPlayMode === 2) {
                    this.currentPlayMode = 0;
                } else {
                    this.currentPlayMode = this.currentPlayMode + 1;
                }
                switch (this.currentPlayMode) {
                    case 0://列表播放
                        this.$refs.audio.play();
                        break;
                    case 1://随机播放
                        this.$refs.audio.play();
                        break;
                    case 2://单曲循环
                        this.$refs.audio.play();
                        break;
                }
            },
            change(){
                this.setFullScreen(true);
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

            ]),
            playButtonClass() {
                return this.playStatus === true ? "iconfont icon-zanting1-copy" : "iconfont icon-yduibofang";
            },
            imgStyle() {
                let style = {};
                if (this.playStatus === true) {
                    style.webkitAnimationPlayState = "running";
                    style.animationPlayState = "running";
                } else {
                    style.webkitAnimationPlayState = "paused";
                    style.animationPlayState = "paused";
                }
                return style;
            }
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
            ProgressBar,
            scroll,
            Lyric
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

<style lang="stylus" scoped>
    @import '//at.alicdn.com/t/font_1121604_0v2xs37dtth.css';
    i{
        font-size 32px;
    }
    .player{
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1500;
        overflow-y: hidden;
        background-image url("../assets/play_bg.jpg");
        background-repeat: no-repeat
        background-size: cover

    }
    .bg{
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 1000px;
        position: absolute;
        opacity: 0.6;
        filter blur(20px)
    }
        .bg .bgImg{
            width: 130%;
            height: 100%;
            margin-left: -20%;
            margin-top: -50%;
        }
    .normal-player{
        position relative;
    }
    .back{
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
    }
        .back i{
            font-size 26px;
        }
    p{
        width: 80%;
        height: 2rem;
        padding-left: 12%;
        color: whitesmoke;
        font-size: 18px;
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
        margin-top: 2rem;
    }

    .middleL{
        width: 13.5rem;
        height: 13.5rem;
        border-radius: 50%;
        border: 0.5rem solid gray;
    }
        .middleL .img{
            width 100%;
            height 100%;
        }
    .play-progress{
        width 70%;
        margin-left 15%;
    }

    .current-time{
        width: 5%;
        height: 3px;
        position: relative;
        left: -10rem;
        top: 0.65rem;
        color whitesmoke
    }
    .total-time{
        width: 5%;
        height: 3px;
        position: relative;
        left: 10rem;
        top: -0.65rem;
        color whitesmoke
    }
    .image{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .bottom{
        width: 100%;
        height: 14rem;
        padding-top 2rem;
    }

    .play-model-button{
        width 10%
        margin-left 1rem
        margin-top 1rem
    }

    .playorpause{
        width: 10%;
        position: relative;
        left: 9rem;
        top: -4.21rem;
    }
    .bottom .leftIcon{
        width: 2rem;
        height: 2rem;
        position: relative;
        left: 5rem;
        top: -2.2rem;

    }

    .bottom .rightIcon{
        width: 10%;
        position: relative;
        top: -6.5rem;
        left: 13rem;
    }
    .mini-player{
        width: 100%;
        height: 54px;
        background-color: whitesmoke;
        position: fixed;
        bottom: 0;
    }
    .mini-player .icon{
        width: 18%;
        height: 65px;
        float: left;
    }
        .mini-player .icon .img{
            position: absolute;
            width: 48px;
            height: 48px;
            left: 10px;
            top: -6px;
            border: 2px solid #EEEEEE;
            border-radius: 50%;
        }
    .mini-player .center{
        height: 54px;
        padding: 0px 15px 0 68px;
        box-sizing: border-box;
        text-overflow: ellipsis;
    }
            .mini-player .center .title{
                margin-top: 5px;
                width: 220px;
                height: 18px;
                box-sizing border-box
                font-size 14px
                text-align left
                float left
                overflow hidden
            }
                .mini-player .center .singer{
                    margin-top: 2px;
                    width: 220px;
                    height: 12px;
                    float: left;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    text-align: left;
                }
            .mini-player .mini-button{
                position: absolute;
                top: 5px;
                right: 15px;
                padding: 1px;
                height: 40px;
            }
                .contorl{
                    float left
                    margin-right 10px
                }
                .next{
                    float right
                }
    .mini-play-progress{
        width 76%
        height 3px
        overflow hidden
        margin-left 20%
    }
    &.normal-enter-active, &.normal-leave-active{
        transition: transform .3s
        transform: rotateZ(0deg) translate3d(0, 0, 0)
    }

    &.normal-enter, &.normal-leave-to{
        transform: rotateZ(30deg) translate3d(100%, 0, 0)
    }


    &.mini-enter-active, &.mini-leave-active{
        transition: transform .3s
        transform: rotateZ(0deg) translate3d(0, 0, 0)
    }

    &.mini-enter, &.mini-leave-to{
        transform: rotateZ(30deg) translate3d(100%, 0, 0)
    }
    @keyframes rotate{
        0%{
        transform: rotateZ(0deg);
         }
        100%{
         transform : rotateZ(360deg);
         }
    }

    .img.rotate{
        animation : rotate 15s linear infinite;
    }







</style>
