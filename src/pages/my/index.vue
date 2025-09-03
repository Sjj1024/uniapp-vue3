<template>
    <view class="container">
        <!-- 用户信息区 -->
        <view class="user-info">
            <view class="avatar-area">
                <view class="login-btn" @click="goLogin">
                    <text>登录/注册</text>
                </view>
            </view>

            <view class="settings-btn" @click="goSettings">
                <text class="iconfont">&#xe608;</text>
            </view>
        </view>

        <!-- 资产数据区 -->
        <view class="assets">
            <view
                class="asset-item"
                v-for="(asset, index) in assets"
                :key="index"
            >
                <text class="asset-value">0</text>
                <text class="asset-name">{{ asset.name }}</text>
            </view>
        </view>

        <!-- 我的订单 -->
        <view class="section">
            <text class="section-title">我的订单</text>
            <view class="order-types">
                <view
                    class="order-type"
                    v-for="(order, index) in orderTypes"
                    :key="index"
                    @click="goOrderList(order.type)"
                >
                    <view class="order-icon">
                        <image :src="order.icon" mode="widthFix"></image>
                    </view>
                    <text class="order-name">{{ order.name }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue'

// 资产数据
const assets = [
    { name: '钢镚' },
    { name: '积分' },
    { name: '佣金' },
    { name: '优惠券' },
]

// 订单类型
const orderTypes = [
    {
        name: '开盒订单',
        icon: 'https://img.alicdn.com/imgextra/i4/2200676927379/O1CN01XrrhqV24Nde7yBPfu_!!2200676927379.png',
        type: 'open-box',
    },
    {
        name: '开箱订单',
        icon: 'https://img.alicdn.com/imgextra/i1/2200676927379/O1CN01ib1V0924Nde7Q1VUX_!!2200676927379.png',
        type: 'unbox',
    },
    {
        name: '商城订单',
        icon: 'https://img.alicdn.com/imgextra/i2/2200676927379/O1CN0176ZeHT24Nde8Jiqkd_!!2200676927379.png',
        type: 'mall',
    },
    {
        name: '积分订单',
        icon: 'https://img.alicdn.com/imgextra/i1/2200676927379/O1CN01mJaHLP24Nde7hZgUA_!!2200676927379.png',
        type: 'points',
    },
]

// 导航方法
const goLogin = () => {
    uni.navigateTo({ url: '/pages/login/login' })
}

const goSettings = () => {
    uni.navigateTo({ url: '/pages/mine/settings' })
}

const goOrderList = (type) => {
    uni.navigateTo({ url: `/pages/orders/list?type=${type}` })
}

const goAppPage = (type) => {
    switch (type) {
        case 'settings':
            uni.navigateTo({ url: '/pages/mine/personal-settings' })
            break
        case 'invite':
            uni.navigateTo({ url: '/pages/mine/invite' })
            break
        case 'complaint':
            uni.navigateTo({ url: '/pages/mine/complaint' })
            break
        case 'agreement':
            uni.navigateTo({ url: '/pages/mine/agreement' })
            break
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f5f5f5;
}

/* 顶部导航栏 */
.navbar {
    height: 44px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
}

.navbar-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

/* 用户信息区 */
.user-info {
    background-color: #fff;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.avatar-area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
    border: 2px solid #eee;
}

.login-btn {
    padding: 8px 15px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 14px;
    color: #666;
}

.settings-btn {
    color: #999;
    font-size: 20px;
}

/* ID显示区 */
.id-section {
    background-color: #fff;
    padding: 0 15px 15px;
    border-bottom: 1px solid #f5f5f5;
}

.id-label {
    font-size: 14px;
    color: #666;
}

/* 资产数据区 */
.assets {
    background-color: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    border-bottom: 10px solid #f5f5f5;
}

.asset-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.asset-value {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.asset-name {
    font-size: 12px;
    color: #666;
}

/* 通用区块样式 */
.section {
    background-color: #fff;
    margin-bottom: 10px;
}

.section-title {
    display: block;
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #f5f5f5;
}

/* 订单类型区 */
.order-types {
    display: flex;
    padding: 15px 0;
}

.order-type {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.order-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f7ff;
    color: #6aa1ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 20px;
}

.order-name {
    font-size: 12px;
    color: #666;
}

/* 应用项目区 */
.app-items {
    display: flex;
    flex-direction: column;
}

.app-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #f5f5f5;
}

.app-item:last-child {
    border-bottom: none;
}

.app-icon {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #f0f7ff;
    color: #6aa1ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 14px;
}

.app-name {
    flex: 1;
    font-size: 15px;
    color: #333;
}

.arrow-icon {
    color: #ddd;
    font-size: 16px;
}

/* 图标字体 */
@font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_2410201_85b17jsg19e.woff2?t=1614759389524')
            format('woff2'),
        url('//at.alicdn.com/t/font_2410201_85b17jsg19e.woff?t=1614759389524')
            format('woff'),
        url('//at.alicdn.com/t/font_2410201_85b17jsg19e.ttf?t=1614759389524')
            format('truetype');
}

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
