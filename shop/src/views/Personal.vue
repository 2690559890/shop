<template>
    <div>
        <div class="top">
            <van-icon name="manager" />
            <p>个人中心</p>
        </div>
        <div>
            <div v-if="isshow">
                <van-card
                    centered="true"
                    desc="个性签名: 绚丽的黄昏渐渐褪去，繁华的夜色缤纷闪耀，即使没有月光也是人烟往往。"
                    :title="'用户名:'+username"
                    :thumb="img">
                    <template #footer>
                        <van-button size="small">设置</van-button>
                    </template>
                </van-card>
                <van-button size="small" @click="exit" round block type="info">退出登录</van-button>
            </div>
            <div v-else>
                <van-form class="van-form" @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div class="but">
                        <van-button   type="info" native-type="submit">
                        注册
                        </van-button>
                        <van-button  type="info" native-type="submit">
                        登录
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      img: require('@/images/hand.png'),
      isshow: false,
      username: 'admin',
      password: '1234567',
      user: 'admin',
      pwd: '1234567'
    }
  },
  mounted () {
    Toast.fail('请先登录')
  },
  methods: {
    onSubmit () {
      if (this.username === this.user && this.password === this.pwd) {
        this.isshow = true
        Toast.success(this.username + '登录成功,欢迎使用')
      } else {
        Toast.fail('登录失败')
      }
    },
    exit () {
      this.isshow = false
      Toast.success('退出成功,谢谢使用')
    }
  }
}
</script>

<style>
.top {
    display: flex;
    height: 40px;
    width: auto;
    justify-content:center;
    align-items:center;
    background-color: #f2f2f2;
    border-color:#f2f2f2;
}
.van-form {
  margin-top: 120px;
}
p {
    color: rgb(96, 153, 209);
    font-size: 15px;
}
.but {
    border-radius: 15px;
  width: auto;
  height: 50px;
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin-top: 150px;
  margin-left: 90px;
  margin-right: 90px;
}
</style>
