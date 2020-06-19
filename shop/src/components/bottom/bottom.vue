<template>
    <div class="bottom">
        <slot></slot>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o">
            <div>
              <router-link to="Home">首页</router-link>
            </div>
          </van-tabbar-item>
          <van-tabbar-item icon="coupon-o">
            <div>
              <router-link to="categorize">分类</router-link>
            </div>
          </van-tabbar-item>
          <van-tabbar-item icon="shopping-cart-o">
            <div>
              <router-link to="shoppingCart">购物车</router-link>
            </div>
          </van-tabbar-item>
          <van-tabbar-item icon="friends-o">
            <div>
              <router-link to="Personal">个人中心</router-link>
            </div>
          </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
.bottom{
    display: flex;
}

</style>
