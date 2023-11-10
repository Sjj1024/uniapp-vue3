<template>
  <view class="my-main">
    <u-swiper :list="my.swiper"></u-swiper>
    <u-subsection :list="my.list" :current="1"></u-subsection>
    <u-collapse>
      <u-collapse-item title="文档指南" name="Docs guide">
        <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
      </u-collapse-item>
      <u-collapse-item title="组件全面" name="Variety components">
        <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
      </u-collapse-item>
      <u-collapse-item title="众多利器" name="Numerous tools">
        <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
      </u-collapse-item>
    </u-collapse>
    <u-notice-bar :text="my.text1" mode="closable"></u-notice-bar>
  </view>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'

const my = reactive({
  swiper: [
    "https://img-nos.yiyouliao.com/alph/3b55656496704aca3769a1b88fea784b.jpeg",
    "https://img-nos.yiyouliao.com/alph/f47e2cfe1b3961b3103baf7e60a0a226.jpeg",
    "https://img-nos.yiyouliao.com/alph/ff0b8ba928183c4d282ad7f079108e15.jpeg",
    "https://img-nos.yiyouliao.com/alph/8ee915d3430527f30e366878d5a57c91.jpeg"
  ],
  list: ['未付款', '待评价', '已付款'],
  text1: 'uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
})

const rightClick = () => {
  console.log('rightClick');
}

</script>

<style scopedlang='scss' scoped>
.my-main {
  text-align: center;
}
</style>