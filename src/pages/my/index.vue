<template>
  <view class="my-main">
    我的主页
  </view>
  <Bars :tabClick='tabClick'></Bars>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
import Bars from '@/components/tabbar/index.vue';

// 切换tab
const tabClick = function (index: number) {
  console.log("调用父组件的tab切换", index);
  if (index == 0) {
    uni.switchTab({
      url: '/pages/home/index'
    })
  } else if (index == 1) {
    uni.switchTab({
      url: '/pages/my/index'
    })
  }
}

</script>

<style scopedlang='scss' scoped>
.my-main {
  text-align: center;
}
</style>