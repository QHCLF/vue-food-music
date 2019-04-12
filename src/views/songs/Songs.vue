<template>
    <div class="songs">
        <header-back :title="title" :counts="counts"></header-back>
        <nav class="songs-tab">
            <div class="tab-item" @click="count">
                <router-link to="/song/songsRecommend" class="router-link">
                    <span>推荐</span>
                </router-link>
            </div>
            <div class="tab-item" @click="count">
                <router-link to="/song/songsHigh" class="router-link" >
                    <span>精品</span>
                </router-link>
            </div>
            <div class="tab-item" @click="count">
                <router-link to="/song/songsChina" class="router-link" >
                    <span>华语</span>
                </router-link>
            </div>
            <div class="tab-item" @click="count">
                <router-link to="/song/songsBallad" class="router-link" >
                    <span>民谣</span>
                </router-link>
            </div>

            <div class="tab-item" @click="count">
                <router-link to="/song/songsSoft" class="router-link" >
                    <span>轻音乐</span>
                </router-link>
            </div>

        </nav>
        <hr>
        <div class="music-view">
            <router-view/>
        </div>

    </div>
</template>
<script>
    import HeaderBack from '@/components/Header.vue'
    export default {
        name: 'songs',
        data(){
            return{
                title: "歌单广场",
                counts: 1
            }
        },
        methods:{
            count(){
                this.counts++;
                return this.counts;
            }
        },
        components: {
            HeaderBack
        }
    }


</script>

<style lang="stylus" scoped>
    .songs
        width: 100%;
        height: 100%;
        z-index: 100000;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: scroll;

        .songs-tab
            width: 100%;
            overflow-x: scroll;
            position :fixed
            top: 3rem
            display: flex
            padding: 2px 0
            line-height: 3rem
            text-align: center
            color: rgba(0, 0, 0, .7)
            background-color: #FFFFFF
            .tab-item
                flex: 1
                span
                    font-size: 16px



        .music-view
            position: fixed
            top: 84px
            left: 0
            bottom: 54px
            width: 100%
    .router-link
        display: block
        color: inherit
        text-decoration: none
        border-bottom: 2px solid #808080

    &.router-link-active
      color: #ff4007
      border-bottom: 2px solid #ff4007
      font-weight: bold

</style>
