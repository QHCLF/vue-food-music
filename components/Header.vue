<template>
  <div class="music-header">
    <span class="header-back" @click="$router.go(-1)">
      <i class="iconfont icon-fanhui" id="back"></i>
    </span>
    <div class="header-title">
      {{title}}
    </div>

  </div>
</template>

<script>
  export default {
    name: "music-header",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '//at.alicdn.com/t/font_1121604_ivfl6t9wzzn.css';
  .music-header
    position: fixed
    width: 100%
    height: 3rem
    line-height: 3rem
    background-color: #FFFFFF
    text-align: center
    font-size: 18px
    position fixed
    .header-back
      position: absolute
      left: 10px
      #back
       color: black
       font-size : 26px
    .header-title
      margin: 0 40px
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      text-align: left;
      margin-left: 4rem;
      color: black;

</style>
