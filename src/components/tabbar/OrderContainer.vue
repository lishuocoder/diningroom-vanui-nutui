<template>
  <div class="empty">
    <img src="http://cdn.mzyun.tech/shop/emptyCart.jpg" mode="aspectFit" />
    <div class="empty-tips">
      空空如也
      <span class="navigator" @click="toIndex">随便逛逛></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toIndex() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.empty {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
  img {
    width: 120px;
    height: 80px;
    margin-bottom: 30px;
  }
  .empty-tips {
    display: flex;
    font-size: 16px;
    color: gray;
    .navigator {
      color: #90c1f4;
      margin-left: 16px;
    }
  }
}
</style>