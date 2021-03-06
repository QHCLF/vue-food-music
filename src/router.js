import Vue from 'vue'
import Router from 'vue-router'
import recommend from './views/recommend/Recommend.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend,
       children: [{
           path: "/recommend/:detailId",
           name: "/songDetail",
           component: () => import('./views/recommend/RecommendDetail.vue')
         }]
    },
    {
      path: '/song',
      name: 'song',
      redirect: '/song/songsRecommend',
      component: () => import('./views/songs/Songs.vue'),
      children:[
          {
            path: '/song/songsRecommend',//推荐歌单
            name: '/songsRecommend',
            component: () => import('./views/songs/SongsRecommend.vue')
        },
        {
          path: '/song/songDetail/:songDetail',
          name: '/songDetail',
          component: () =>import('./views/songs/songDetail.vue')
        },
        {
          path:'/song/songsHigh',//精品歌单
          name:'/songsHigh',
          component: () => import('./views/songs/songsHigh.vue')
        },
        {
          path:'/song/songsChina',//华语
          name:'/songsChina',
          component: () => import('./views/songs/songsChina.vue')
        },
        {
          path:'/song/songsBallad',//民谣
          name:'/songsBallad',
          component: () => import('./views/songs/songsBallad.vue')
        },
        {
          path:'/song/songsSoft',//轻音乐
          name:'/songsSoft',
          component: () => import('./views/songs/songsSoft.vue')
        }
      ]
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('./views/ranking/Ranking.vue'),
      children: [{
        path: '/ranking/:rankingId',
        name: '/rankingDetail',
        component: () => import('./views/ranking/rankingDetail.vue')
      }]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/Search.vue')
    },{
      path: '/dj',
      name: 'dj',
      component: () => import('./views/Dj.vue')
    }
  ]
})
