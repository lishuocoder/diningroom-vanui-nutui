<template>
  <div id="app">
    <!-- 顶部的导航栏 -->
    <van-nav-bar title="手机点餐" fixed />
    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部占位 -->
    <div style="height: 50px;"></div>
    <!-- 底部的tabbar区域 -->
    <van-tabbar
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
      safe-area-inset-bottom
      z-index="4"
    >
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" replace to="/shopcar" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="completed" replace to="/order">订单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
  margin-top: 40px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
