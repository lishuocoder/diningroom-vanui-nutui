<template>
  <div>
    <!-- 轮播图 -->
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  >
      <van-swipe-item v-for="(item,index) in bannerList" :key="index">
        <a :href="item.url">
          <img src="../../../static/img/home/banner4.jpg" width="100%" alt="图片未加载" />
        </a>
      </van-swipe-item>
    </van-swipe> -->
    <nut-swiper
    :loop="true"
    :height="250"
    speed="500"
    autoPlay="2500"
    direction="horizontal"
    :swiperData="dataItem"
    :canDragging="false"
    :paginationVisible="true"
    ref="demo2"
>
    <div  v-for="(item,index) in bannerList" :key="index"  class="nut-swiper-slide">
        <!-- <a :href="item.url">
          <img src="../../../static/img/home/banner4.jpg"  alt="图片未加载" />
        </a> -->
          <img :src="item.img"  alt="图片未加载" />
          <span>{{item.img}}</span>

    </div>

</nut-swiper>

    <!-- 通告栏 -->
    <van-notice-bar
      left-icon="volume-o"
      color="#1989fa"
      background="#ecf9ff"
      scrollable="true"
      mode="closeable"
    >春节不打烊!坚持所有菜品现做,不做大锅餐,保温餐,堂食外卖一样用心服务每位顾客,不过分抢速度,追求品质,吃的放心!</van-notice-bar>

    <!-- 菜品分类 -->
    <nut-tab @tab-switch="tabSwitch" positionNav="left">
      <nut-tab-panel
        v-for="value in typeList"
        v-bind:key="value.tabTitle"
        :tabTitle="value.tabTitle"
        :iconUrl="value.tabUrl"
        v-html="value.content"
        class="items"
      ></nut-tab-panel>
    </nut-tab>
  </div>
</template>

<script>
import homeList from "../../../data/home";
import typeList from "../../../data/type";
export default {
  components: {},
  data() {
    return {
      bannerList: [],
      positionNavCurr: "bottom",
      typeList: []
    };
  },
  created() {
    this.bannerList = homeList.bannerList.data;
    this.typeList = typeList.subTypeList;
  },
  methods: {
    tabSwitch: function(index, event) {
      console.log(index + "--" + event.target);
    }
  }
};
</script>

<style  scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img{
    // width: 100%;
    height: 200px;
  }
}
</style>