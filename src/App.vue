<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="tab">
        <div class="pic">
          <i class="iconfont icon-ziyuan"></i>
        </div>
        <span>每日推荐</span>
      </router-link>

      <router-link to="/song" class="tab">
        <div class="pic">
          <i class="iconfont icon-ziyuan2" ></i>
        </div>
        <span>歌单广场</span>
      </router-link>

      <router-link to="/ranking" class="tab">
        <div class="pic">
          <i class="iconfont icon-ziyuan3"></i>
        </div>
        <span>排行榜</span>
      </router-link>

      <router-link to="/dj" class="tab">
        <div class="pic">
          <i class="iconfont icon-ziyuan1"></i>
        </div>
        <span>电台</span>
      </router-link>

      <router-link to="/search" class="tab">
        <div class="pic">
          <i class="iconfont icon-sousuo"></i>
        </div>
        <span>搜索</span>
      </router-link>
      <div>
        <router-view/>
      </div>

    </div>
  </div>
</template>

<style>
  @import '//at.alicdn.com/t/font_1121604_g8kbr7v35u6.css';

  a:visited{
    color: #2c3e50;
  }
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #nav{
    width: 100%;
    height: 4.5rem;
    padding-top: 1rem;
    background-color: whitesmoke;
    z-index: 1;
  }
  .tab{
    width: 20%;
    height: 100%;
    margin-top: 0.5rem;
    float: left;
    text-decoration: none;

  }
  span{
    font-size: 12px;
  }
  .tab a{
    text-decoration: none;
    color: #2c3e50;
  }

  .tab i{
    font-size: 1.5rem;
    /*color: grey;*/
  }
  .tab .pic{
    margin-bottom: 0.5rem;
  }



</style>
