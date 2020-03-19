<template>
  <div>
    <van-swipe-cell v-for="(item,index) in cartList" :key="index">
      <van-card
        :num="item.productNum"
        :price="item.productPrice"
        desc="描述信息"
        :title="item.productName"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <div slot="footer">
          <van-stepper v-model="value" />
        </div>
      </van-card>
      <van-button slot="right" square text="删除" type="danger" class="delete-button" />
    </van-swipe-cell>
    <!-- 底部占位 -->
    <div style="height: 50px;"></div>

    <!-- 底部 -->
    <van-submit-bar :price="3050" button-text="提交订单" tip-icon="info-o" @submit="onSubmit" />
  </div>
</template>

<script>
import cartList from "../../../data/cart.json";
export default {
  components: {},
  data() {
    return {
      cartList: []
    };
  },
  created() {
    this.cartList = cartList.data;
  },
  methods: {}
};
</script>

<style  scoped lang="scss">
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>