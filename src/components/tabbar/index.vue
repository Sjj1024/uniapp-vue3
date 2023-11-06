<template>
  <u-tabbar :value="user.tabIndex" @change="change" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
    <u-tabbar-item text="首页" icon="home"></u-tabbar-item>
    <view class="tabars" @click="tabMiddle">
      <view class="item">
        <image class="img" src="../../static/images/gongshang.png" mode="widthFix"></image>
      </view>
    </view>
    <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
  </u-tabbar>
</template>

<script setup lang="ts">
import useUserStore from "../../store/user"
// 父子组件传值: 函数
const props = defineProps<{
  tabClick: Function
}>()

const user = useUserStore();

const change = function (index) {
  user.setTabIndex(index)
  props.tabClick(index)
};

// 点击中间凸出来的tab
const tabMiddle = function () {
  console.log("点击中间的tab");
}


</script>

<style lang="scss">
.tabars {
  width: 90rpx;
  height: 70rpx;
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  bottom: 50rpx;
  border-radius: 50%;
  background-color: #fff;
  border-top: 2px solid #dadbde;
  padding: 30rpx;

  .item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .img {
      width: 80%;
    }
  }
}
</style>