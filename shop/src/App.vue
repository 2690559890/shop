<template>
  <div id="app">
    <div>
      <top></top>
    </div>
      <router-view ></router-view>
    <div>
      <bottom></bottom>
    </div>
  </div>
</template>

<script>
import bottom from '@/components/bottom/bottom.vue'
import top from '@/components/top/top.vue'
export default {
  name: 'app',
  components: {
    bottom,
    top
  }
}
</script>

<style>

</style>
