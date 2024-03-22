<template>
    <view class="homeBox">
        <view class="vue-box">{{ user.teststr }}</view>
        <van-button type="primary" @click="test"> 测试 </van-button>
        <van-button @click="setStore">修改</van-button>
        <!-- 图片组件 -->
        <van-image
            :showLoading="true"
            :src="demoImg"
            width="80px"
            height="80px"
        >
        </van-image>
        <!-- 文本组件 -->
        <van-text type="primary" text="主色"></van-text>
        <van-text type="error" text="错误"></van-text>
        <van-text type="success" text="成功"></van-text>
        <van-text type="warning" text="警告"></van-text>
        <van-text type="info" text="信息"></van-text>
        <van-badge type="warning" max="9" value="5"></van-badge>
        <van-tag text="标签"></van-tag>
        <van-tag text="标签" type="warning"></van-tag>
        <van-tag text="标签" type="success"></van-tag>
        <van-tag text="标签" type="error"></van-tag>
        <van-loading-icon text="加载中" textSize="18"></van-loading-icon>
        <van-rate count="5" v-model="info.rate"></van-rate>
        <van-search
            placeholder="日照香炉生紫烟"
            v-model="info.keyword"
        ></van-search>
        <van-slider v-model="info.slider"></van-slider>
    </view>
</template>

<script setup lang="ts">
import useUserStore from '@/store/user'
import demoImg from '@/static/green.jpeg'
import { reactive } from 'vue'

const user = useUserStore()

const info = reactive({
    rate: 0,
    keyword: '',
    slider: 0,
})

const test = function () {
    console.log('pinia中的数据:', user.teststr)
    // if (user.teststr) {
}

const setStore = function () {
    const randomnum = Math.random() * 100 + ''
    user.setStr(randomnum)
}
</script>

<style lang="scss" scoped>
.homeBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
}
.vue-box {
    text-align: center;
    margin: 10px 0;
}
</style>
