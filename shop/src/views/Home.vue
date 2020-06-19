<template>
    <div>
        <div>
            <van-search
                v-model="value"
                shape="round"
                @search="onSearch"
                background="#f2f2f2"
                placeholder="请输入搜索关键词"
            />
            <van-notice-bar
                left-icon="volume-o"
                text="重大喜讯！重大喜讯！蟑螂药，老鼠药，苍蝇药，现在统统五折带回家。"
            />
        </div>
        <van-sticky>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value0" :options="option" />
            <van-dropdown-item title="筛选" ref="item">
              <van-switch-cell v-model="switch1" title="包邮" />
              <van-switch-cell v-model="switch2" title="团购" />
              <van-button block type="info" @click="onConfirm">确认</van-button>
            </van-dropdown-item>
          </van-dropdown-menu>
        </van-sticky>
        <div class="swipe">
            <van-row class="van-row" type="flex" justify="center">
                <van-col class="van-col" span="22">
                    <van-swipe  :autoplay="3000">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img :src="image" />
                        </van-swipe-item>
                    </van-swipe>
                </van-col>
            </van-row>
          <div>
          <div><hr></div>
          <div>
            <van-tag type="warning">热门推荐系列:</van-tag>
          </div>
            <goods></goods>
          </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import goods from '@/components/goods/goods.vue'
export default {
  data () {
    return {
      value0: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '热门推荐', value: 0 }
      ],
      value: '',
      images: [
        'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2206740653624/O1CN01491Q031cdpwERbagt_!!2206740653624.jpg_230x230.jpg_.webp',
        'https://cbu01.alicdn.com/img/ibank/2020/503/082/16274280305_948082537.400x400.jpg',
        'https://cbu01.alicdn.com/img/ibank/2020/268/210/15880012862_1569220179.220x220.jpg?_=2020',
        'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2428594157/O1CN01NmnitG1gZx3H5w8H9_!!0-item_pic.jpg_230x230.jpg_.webp'
      ]
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    },
    onConfirm () {
      this.$refs.item.toggle()
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    goods
  }
}
</script>

<style>
img {
    height: 150px;
    width: 360px;
}

</style>
