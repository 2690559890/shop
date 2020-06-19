
<template>
  <div class="child">
    <van-grid class="van-grid" :column-num="2" icon-size="100" border="false" :gutter="5" >
      <van-grid-item  class="van-grid-item" v-for="(item,index) in goods" :key="index" :icon="item.img_url" :text="item.text" >
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Bus from '@/Bus'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // props: {
      //   cid: {
      //     default: 0,
      //     type: Number
      //   }
      // },
      bid: '',
      goods: [],
      goods0: [
        {
          text: '老鼠克星一号',
          img_url: 'https://img.alicdn.com/imgextra/i3/53600729/O1CN01hWDufx1HFvK0izZlI_!!0-saturn_solar.jpg_220x220.jpg_.webp'
        },
        {
          text: '老鼠克星二号',
          img_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2206740653624/O1CN01491Q031cdpwERbagt_!!2206740653624.jpg_230x230.jpg_.webp'
        },
        {
          text: '拉布拉多幼犬',
          img_url: 'https://img.alicdn.com/imgextra/i1/1052120107/O1CN01z9Hf7N1Cf2z7Vf0kx_!!0-saturn_solar.jpg_220x220.jpg'
        },
        {
          text: '纯种二哈',
          img_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3236860360/O1CN017m5cbl1EWvAApL9LC_!!3236860360.jpg_230x230.jpg_.webp'
        },
        {
          text: '尼斯湖水怪幼体',
          img_url: 'http://pic.baike.soso.com/p/20140501/bki-20140501234127-700752999.jpg'
        },
        {
          text: '小白鼠',
          img_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/10662481/TB2BawMzypnpuFjSZFIXXXh2VXa_!!10662481.jpg_230x230.jpg_.webp'
        },
        {
          text: '宠物蛇🐍',
          img_url: 'http://images.china.cn/news/attachement/jpg/site3/20120326/2763073941333756266.jpg'
        },
        {
          text: '霸王龙 ',
          img_url: 'https://icweiliimg1.pstatp.com/weili/bl/79052223174356667.jpg'
        }
      ],
      goods1: [
        {
          text: '特效老鼠药',
          img_url: 'https://cbu01.alicdn.com/img/ibank/2020/503/082/16274280305_948082537.400x400.jpg'
        },
        {
          text: '老鼠杀手',
          img_url: 'https://cbu01.alicdn.com/img/ibank/2020/268/210/15880012862_1569220179.220x220.jpg?_=2020'
        },
        {
          text: '生物灭鼠',
          img_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2206740653624/O1CN01491Q031cdpwERbagt_!!2206740653624.jpg_230x230.jpg_.webp'
        },
        {
          text: '物理灭鼠',
          img_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/552150451/O1CN0183Cxds1FCbDlg7axi_!!552150451.jpg_230x230.jpg_.webp'
        },
        {
          text: '化学灭鼠',
          img_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1086692146/O1CN01TCJ0Qx1RiuYGd7cd6_!!1086692146.jpg_230x230.jpg_.webp'
        },
        {
          text: '德国拜耳拜灭士蟑螂药',
          img_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2428594157/O1CN01NmnitG1gZx3H5w8H9_!!0-item_pic.jpg_230x230.jpg_.webp'
        },
        {
          text: '蟑螂克星',
          img_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/3115301103/O1CN01GdM8RX1K1DT0DuHGx_!!0-item_pic.jpg_230x230.jpg_.webp'
        },
        {
          text: '害虫专杀',
          img_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2352732387/O1CN01kQ0aVU1TVI0UGD1g7_!!0-item_pic.jpg_230x230.jpg_.webp'
        }
      ]
    }
  },
  created: function () {
  },
  mounted: function () {
    Bus.$on('onindex', val => {
      this.bid = val
    })
    if (this.$store.state.cid === 0) {
      this.Goods0(this.goods0)
    }
    if (this.$store.state.cid === 1) {
      this.Goods0(this.goods1)
    }
    // Bus.$on('data', index => {
    //   // eslint-disable-next-line no-undef
    //   this.cid = index
    // })
  },
  watch: {
    bid: function (value) {
      if (value === 0) {
        this.goods = []
        this.Goods0(this.goods0)
      }
      if (value === 1) {
        this.goods = []
        this.Goods0(this.goods1)
      }
      if (value === 2) {
        this.goods = []
      }
      if (value === 3) {
        this.goods = []
      }
      if (value === 4) {
        this.goods = []
      }
    }
  },
  methods: {
    ...mapState(['cid']),
    Goods0: function (arr) {
      arr.forEach(v => {
        this.goods.push(v)
      })
    },
    getindex: function (v) {
      // this.bid = this.$store.state.cid
      console.log(v + 10)
    }
  }
}
</script>

<style>
.child {
  padding-top: 0px !important;
  margin-top: 0px !important;
}
.van-grid {
  padding: 0px 0px !important;
  margin-top: 0px !important;
  width: 300px !important;
}
.van-grid-item {
  border: 0px 0px !important;
}
</style>
