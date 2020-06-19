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
          <template #footer >
            <p></p>
            <van-button size="small" @click="reduce(index)">-</van-button>
            <van-button size="small" @click="add(index)">+</van-button>
          </template>
        </van-card>
      </div>
      <div class="settlement">
        <p>总共 =   {{sumprice}}   元人民币</p>
        <van-button size="small" @click="settlement" >结算</van-button>
      </div>
  </div>
</template>

<script>
import { Toast, Dialog } from 'vant'

export default {
  data () {
    return {
      nums: [],
      sumprice: 0,
      onep: '',
      goods: [
        {
          id: 0,
          num: '1',
          price: '39.90',
          desc: '德国拜耳拜灭士蟑螂药家用室内厨房无蟑神器大小通杀毒胶饵一窝',
          title: '德国拜耳拜灭士蟑螂药',
          thumb: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2428594157/O1CN01NmnitG1gZx3H5w8H9_!!0-item_pic.jpg_230x230.jpg_.webp',
          danger: '高效'
        },
        {
          id: 1,
          num: '1',
          price: '198.00',
          desc: '老鼠天敌 / 灭鼠之王 / 老鼠克星',
          title: '老鼠克星',
          thumb: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2206740653624/O1CN01491Q031cdpwERbagt_!!2206740653624.jpg_230x230.jpg_.webp',
          danger: '老鼠绕着走'
        }
      ]
    }
  },
  watch: {
    nums: function (value) {
      if (this.nums.length === 4) {
        this.nums.splice(0, this.nums.length / 2)
      }
      if (this.nums.length === 2) {
        this.sumprice = 0
        this.nums.forEach(e => {
          this.sumprice = this.sumprice + e
        })
      }
    }
  },
  methods: {
    settlement () {
      Dialog.confirm({
        title: '确认支付',
        message: '总共   ' + this.sumprice + '   元人民币'
      })
        .then(() => {
          // on confirm
          Toast('支付成功')
        })
        .catch(() => {
          // on cancel
        })
    },
    reduce (e) {
      this.goods.forEach(v => {
        if (v.id === e) {
          v.num--
          if (v.num <= 0) {
            v.num = 0
          }
        }
        this.onep = v.num * v.price
        this.nums.push(this.onep)
      })
    },
    add (e) {
      this.goods.forEach(v => {
        if (v.id === e) {
          v.num++
        }
        this.onep = v.num * v.price
        this.nums.push(this.onep)
      })
    }
  },
  mounted () {
    this.add()
  }
}
</script>

<style>
.settlement {

  width: auto;
  height: 50px;
  display: flex;
  justify-content:space-between;
  align-items:center;
  background-color: #f2f2f2;
  margin-top: 190px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
