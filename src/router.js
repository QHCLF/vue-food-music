import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import recommend from './views/Recommend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/song',
      name: 'song',
      component: () => import('./views/songs/Songs.vue'),
      children:[
          {
            path: '/songsRecommend',//推荐歌单
            name: '/songsRecommend',
            component: () => import('./views/songs/SongsRecommend.vue')
        },
        {
          path:'/songsHigh',//精品歌单
          name:'/songsHigh',
          component: () => import('./views/songs/songsHigh.vue')
        },
        {
          path:'/songsChina',//华语
          name:'/songsChina',
          component: () => import('./views/songs/songsChina.vue')
        },
        {
          path:'/songsBallad',//民谣
          name:'/songsBallad',
          component: () => import('./views/songs/songsBallad.vue')
        },
        {
          path:'/songsSoft',//轻音乐
          name:'/songsSoft',
          component: () => import('./views/songs/songsSoft.vue')
        }
      ]
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('./views/Ranking.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },{
      path: '/dj',
      name: 'dj',
      component: () => import('./views/Dj.vue')
    }
  ]
})
