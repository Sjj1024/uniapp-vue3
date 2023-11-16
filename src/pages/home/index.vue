<template>
  <view class="home-main">
    <view class="search-box">
      <view class="location" @click="getLocation">
        <u-icon name="map-fill" color="#ffffff" size="20"></u-icon>
        <text>上海</text>
        <u-icon class="down" name="arrow-down" color="#ffffff" size="16"></u-icon>
      </view>
      <u-search class="search-input" :show-action="false" placeholder="输入店铺名称搜索" v-model="search">
      </u-search>
    </view>
    <view>
      <u-swiper indicator indicatorMode="dot" :list="list1" @click="click"></u-swiper>
    </view>
    <!-- 玩家预约 -->
    <view class="player-box">
      玩家预约
    </view>
    <!-- 门店信息 -->
    <view class="store-box">
      门店信息
    </view>
  </view>
  <TabBar></TabBar>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user";
import TabBar from "@/components/tabbar/index.vue"
import { ref } from "vue";

const user = useUserStore();

// 搜索
const getLocation = () => {
  console.log("选择位置页面");
  uni.navigateTo({
    url: '/pages/selCity/index',
  })
}
const search = ref("");

// 轮播图
const list1 = [
  "https://img-nos.yiyouliao.com/alph/3b55656496704aca3769a1b88fea784b.jpeg",
  "https://img-nos.yiyouliao.com/alph/f47e2cfe1b3961b3103baf7e60a0a226.jpeg",
  "https://img-nos.yiyouliao.com/alph/ff0b8ba928183c4d282ad7f079108e15.jpeg",
  "https://img-nos.yiyouliao.com/alph/8ee915d3430527f30e366878d5a57c91.jpeg"
]

const click = (index: number) => {
  console.log(`点击了${index}轮播图`);
}

</script>

<style lang="scss" scoped>
.home-main {
  .search-box {
    height: 50px;
    display: flex;
    align-items: center;
    color: white;
    // padding: 0 2px 0 0;
    background-color: #000;

    .location {
      padding: 0 5px;
      display: flex;

      .down {
        display: flex;
        align-items: center;
      }
    }

    .search-input {
      width: 76%;
    }
  }
}
</style>
