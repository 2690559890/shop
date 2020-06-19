<template>
    <div>
        <div class="van-tabs">
            <van-tabs v-model="active">
                <van-tab title="分类">
                    <div class="main">
                        <div class="van-sidebar">
                            <van-sidebar v-model="aid.activeKey" @change="onChange">
                                <van-sidebar-item title="宠物" />
                                <van-sidebar-item title="灭害" />
                                <van-sidebar-item title="服装" />
                                <van-sidebar-item title="家电" />
                                <van-sidebar-item title="数码" />
                                <van-sidebar-item title="宠物" />
                                <van-sidebar-item title="灭害" />
                                <van-sidebar-item title="服装" />
                                <van-sidebar-item title="家电" />
                                <van-sidebar-item title="数码" />
                                <van-sidebar-item title="宠物" />
                                <van-sidebar-item title="灭害" />
                            </van-sidebar>
                        </div>
                        <div class="context">
                            <childcategorize ></childcategorize>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="热门">热门内容</van-tab>
                <van-tab title="最新">最新内容</van-tab>
            </van-tabs>

        </div>
    </div>
</template>

<script>
import Bus from '@/Bus'
// import { Notify } from 'vant'
import childcategorize from '@/views/childcategorize.vue'
import { mapState } from 'vuex'
// import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      aid: {
        cindex: 0,
        activeKey: 0
      },
      active: 0

    }
  },
  components: {
    childcategorize
  },
  methods: {
    ...mapState(['activeKey']),
    ...mapState(['cid']),
    // ...mapMutations(['changecid']),
    onChange (index) {
      this.aid.cindex = index
      this.aid.activeKey = index
      this.$store.commit('changecid', this.aid)
      Bus.$emit('onindex', this.$store.state.cid)
    }
  },
  mounted: function () {
    this.aid.activeKey = this.$store.state.activeKey
    this.aid.cindex = this.$store.state.cid
  }
}

</script>

<style>
.van-sidebar {
  width: 80px !important;

}
.main {
    display: flex;
    margin-top: 0px;
}
.context {
    margin-top: 25px;
    float: right;
}
</style>
