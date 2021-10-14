<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template v-slot:center><div slot="center">购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'

  import {getHomeMultidata} from 'network/home';
  

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
      // 1.请求网页中的多条数据
      return getHomeMultidata().then(res => {
        // console.log(res)
        // 因为从服务器拿到的数据，在这个组件被创建好了以后就会被内存所回收，所以要在这里定义一个data变量，用来保存从服务器拿到的数据，把相应的数据存到数组中即可
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
  }
</script>

<style scoped>
.home-navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>