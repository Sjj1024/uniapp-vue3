<template>
  <view>
    <view class="vue-box">{{ user.teststr }}</view>
    <u-button type="primary" @click="test" :color="$u.color.primary">
      测试
    </u-button>
    <u-button @click="setStore">修改</u-button>
    <!-- 图片组件 -->
    <u-image :showLoading="true" :src="demoImg" width="80px" height="80px">
    </u-image>
    <!-- 文本组件 -->
    <u-text type="primary" text="主色"></u-text>
    <u-text type="error" text="错误"></u-text>
    <u-text type="success" text="成功"></u-text>
    <u-text type="warning" text="警告"></u-text>
    <u-text type="info" text="信息"></u-text>
    <u-badge type="warning" max="9" value="5"></u-badge>
    <u-tag text="标签"></u-tag>
    <u-tag text="标签" type="warning"></u-tag>
    <u-tag text="标签" type="success"></u-tag>
    <u-tag text="标签" type="error"></u-tag>
    <u-loading-icon text="加载中" textSize="18"></u-loading-icon>
    <u-rate count="5" v-model="info.rate"></u-rate>
    <u-search placeholder="日照香炉生紫烟" v-model="info.keyword"></u-search>
    <u-slider v-model="info.slider"></u-slider>
  </view>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user";
import demoImg from "@/static/green.jpeg"
import { reactive } from "vue";

const user = useUserStore();

const info = reactive({
  rate: 0,
  keyword: "",
  slider: 0
})

const test = function () {
  console.log("pinia中的数据:", user.teststr);
  // if (user.teststr) {
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
