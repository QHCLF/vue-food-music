<template>
    <div class="player">
<!--        <transition name="normal">-->
<!--            <div class="normal-player">-->
<!--                <div class="background">-->
<!--                    <div class="filter"></div>-->
<!--                    <img :src="currentSong.image">-->
<!--                </div>-->
<!--                <div class="top">-->
<!--                    <div class="back" @click="back">-->
<!--                        <div>返回图标</div>-->
<!--                    </div>-->
<!--                    <h1 class="title" v-html="currentSong.name"></h1>-->
<!--                    <h2 class="subTitle" v-html="currentSong.name"></h2>-->
<!--                </div>-->
<!--                <div class="middle">-->
<!--                   <transition name="middleL">-->
<!--                       <div>当前歌曲的图片</div>-->
<!--                   </transition>-->
<!--                    <transition name="middleR">-->
<!--                        <div>显示当前歌曲歌词</div>-->
<!--                    </transition>-->
<!--                </div>-->
<!--                <div class="bottom">-->
<!--                    <div class="progress-wrapper">-->
<!--                        <span class="item item-l">当前歌曲播放了的时间</span>-->
<!--                        <div class="progress-bar-wrapper">-->
<!--                            播放进度条组件-->
<!--                        </div>-->
<!--                        <span class="item item-r">当前歌曲播放总时长</span>-->
<!--                    </div>-->
<!--                    <div class="operators">-->
<!--                        <div>上一曲</div>-->
<!--                        <div>播放按钮</div>-->
<!--                        <div>下一曲</div>-->
<!--                    </div>-->
<!--                </div>s-->
<!--            </div>-->
<!--        </transition>-->

<!--        <transition name="mini">-->
<!--            <div class="mini-player">-->
<!--                <div class="icon">-->
<!--                    当前歌曲图片-->
<!--                </div>-->
<!--                <div class="text">-->
<!--                    当前歌曲的名字，歌手-->
<!--                </div>-->
<!--                <div class="contorl">-->
<!--                    <div>播放按钮</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </transition>-->

<!--        <span>歌单列表组件<span/>-->
<!--        <audio id="music-audio" ref="audio"-->
<!--               @ended="end" autoplay-->
<!--               @canplay="ready"-->
<!--               @error="error"-->
<!--               @timeupdate="updateTime"-->
<!--        ></audio>-->
<!--        </span>-->

    </div>

</template>

<script>

    export default {
        name: "player",
        // data(){
        //     return{
        //         url: '',//歌曲url
        //         songReady: false,//默认不播放
        //         currentTime: 0,
        //         duration: 0,
        //         percent: 0,
        //         radius: 32,
        //         currentLyric: null,
        //         currentLineNum: 0,
        //         currentShow: 'cd',
        //         playingLyric: '',
        //         noLyric: false
        //     }
        // },
        // created() {
        //
        // }
    }
</script>

<style>
    .player{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 150;
        background-color: pink;
        overflow-y: hidden;
    }
</style>
