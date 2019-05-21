<template>
    <div class="search">
        <section class="top">
            <div class="search-box">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" class="search-input" placeholder="搜索歌曲、歌手、专辑"
                       v-model="write"
                       @keydown="getmatching"
                >
                <div class="cancel-button" :style="cancelButtonStyle" @click="write = ''">取消</div>
            </div>
        </section>

        <section class="bottom" :style="searchHotStyle">
            <h3>热门搜索</h3>
            <div class="hot-list">
                <div class="hot-item" v-for="(hot, index) in hot_list" :key="index">
                    {{hot.first}}
                </div>
            </div>
        </section>

        <section class="searchDetail" :style="showDetailStyle">
            <div></div>
        </section>

    </div>
</template>

<script>
    import {ERR_OK} from '../../utill/config'
    import {getHotSearch, matching} from "../../api/search";
    export default {
        name: "search",
        data(){
            return{
                write: '',
                hot_list: [],
                search_list: Object
            }
        },
        created(){
            this._getHotSearch()
        },
        methods:{
            _getHotSearch(){
                getHotSearch().then((res) => {
                    if (res.status === ERR_OK) {
                        this.hot_list = res.data.result.hots
                    }
                })
            },
            getmatching(){
                matching(this.write).then((res) => {
                    if(res.status === ERR_OK){
                        this.search_list = res.data.result
                    }
                })
            }

        },
        computed:{
            cancelButtonStyle() {
                return {display: this.write ? "block" : "none"};
            },
            searchHotStyle(){
                return {display: this.write ? "none" : "block"};
            },
            showDetailStyle(){
                return{display: this.search_list ? "none" : "none"}
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '//at.alicdn.com/t/font_1121604_0v2xs37dtth.css';
    .search{
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
    .top{
        position: relative
        padding: 20px
    }
    .search-box{
        padding: 10px
        border-radius: 3px
        line-height: 17px
        background-color whitesmoke
    }
    i{
        float left;
    }
    .search-input{
        width: 90%
        height: 15px
        font-size: 13px
        background: none
        border: none
        outline: none
    }
    .cancel-button
        position: absolute
        top: 50%
        right: 30px
        margin-top: -8px
        height: 16px
        line-height: 1
        font-size: 14px
    .bottom {
        width 95%;
        box-sizing border-box
        padding-left 6%
    }
    h3{
        display: inline-block;
        width: 100%;
        margin: 0;
        text-align: left;
    }
    .hot-list .hot-item{
        float: left
        padding: 4px 7px
        margin-right: 10px
        margin-top: 10px
        border-radius: 10px
        font-size: 14px
        border: 1px solid;
    }





</style>
