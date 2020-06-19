<template>
  <div>
      <div v-for="(item,index) in goods" :key="index">
        <van-card
          :num="item.num"
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          :thumb="item.thumb"
        >
          <template #tags>
            <van-tag plain type="danger">{{item.danger}}</van-tag>
          </template>
          <!-- <template #footer>
            <van-button size="mini">加入购物车</van-button>
            <van-button size="mini">直接购买</van-button>
          </template> -->
        </van-card>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goods: [
        {
          price: '198.00',
          desc: '老鼠天敌 / 灭鼠之王 / 老鼠克星',
          title: '老鼠克星',
          thumb: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2206740653624/O1CN01491Q031cdpwERbagt_!!2206740653624.jpg_230x230.jpg_.webp',
          danger: '老鼠绕着走'
        },
        {
          price: '39.90',
          desc: '德国拜耳拜灭士蟑螂药家用室内厨房无蟑神器大小通杀毒胶饵一窝端',
          title: '德国拜耳拜灭士蟑螂药',
          thumb: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2428594157/O1CN01NmnitG1gZx3H5w8H9_!!0-item_pic.jpg_230x230.jpg_.webp',
          danger: '高效'
        },
        {
          price: '43.00',
          desc: '德国巴斯夫蟑螂药一窝端除灭蟑螂克星家用无毒蟑螂屋神器厨房杀虫',
          title: '蟑螂克星',
          thumb: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/3115301103/O1CN01GdM8RX1K1DT0DuHGx_!!0-item_pic.jpg_230x230.jpg_.webp',
          danger: '高效'
        },
        {
          price: '11.90',
          desc: '老鼠yao颗粒老鼠药高效耗子药强力家用灭鼠灵克星强效灭鼠杀鼠剂',
          title: '特效老鼠药',
          thumb: 'https://cbu01.alicdn.com/img/ibank/2020/503/082/16274280305_948082537.400x400.jpg',
          danger: '高效'
        },
        {
          num: '',
          price: '',
          desc: '',
          title: '',
          thumb: '',
          danger: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
