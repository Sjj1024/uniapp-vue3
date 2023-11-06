<template>
  <view>
    <view class="vue-box">{{ user.teststr }}</view>
    <u-button type="primary" @click="test" :color="$u.color.primary">
      测试
    </u-button>
    <u-button @click="setStore">修改</u-button>
  </view>
  <Bars :tabClick='tabClick'></Bars>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user";
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

const user = useUserStore();

const test = function () {
  console.log("pinia中的数据:", user.teststr);
};

const setStore = function () {
  const randomnum = Math.random() * 100 + ""
  user.setStr(randomnum);
};


</script>

<style lang="scss" scoped>
.vue-box {
  text-align: center;
  margin: 10px 0;
}
</style>
