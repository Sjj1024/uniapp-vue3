<template>
  <view>
    竞技场
  </view>
  <TabBar></TabBar>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user";
import TabBar from "@/components/tabbar/index.vue"

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
