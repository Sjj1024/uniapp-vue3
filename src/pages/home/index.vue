<template>
    <view class="container">
        <!-- 顶部导航栏 -->
        <view class="navbar">
            <text class="navbar-title">元气抽盒机</text>
        </view>

        <!-- 温馨提示横幅 -->
        <view class="banner">
            <image
                src="http://www.yqmh.cuicanchaowan.com/uploads/box/2025-07-11/5e91f982-abd9-49bc-d61e-ef01b623f79f.jpeg"
                class="banner-image"
                mode="widthFix"
                alt="卡通形象提示图"
            ></image>
        </view>

        <!-- 功能入口区 -->
        <view class="features">
            <view
                class="feature-item"
                v-for="(item, index) in features"
                :key="index"
                @click="handleFeatureClick(item.name)"
            >
                <image
                    :src="item.icon"
                    class="feature-icon"
                    mode="widthFix"
                    :alt="item.name"
                ></image>
                <text class="feature-name">{{ item.name }}</text>
            </view>
        </view>

        <!-- 分类导航 -->
        <view class="category-nav">
            <view
                v-for="(category, index) in categories"
                :key="index"
                :class="{
                    'category-item': true,
                    active: activeCategory === category,
                }"
                @click="handleCategory(category)"
            >
                <text>{{ category }}</text>
            </view>
        </view>

        <!-- 商品展示区 -->
        <view class="products">
            <view
                class="product-item"
                v-for="(product, index) in products"
                :key="index"
                @click="toDetailCard(product)"
            >
                <view class="product-tag" v-if="product.tag">
                    <text>{{ product.tag }}</text>
                </view>
                <image
                    :src="product.image"
                    class="product-image"
                    mode="aspectFill"
                    :alt="product.name"
                ></image>
                <text class="product-name">{{ product.name }}</text>
                <text class="product-price">¥{{ product.price }}</text>
                <text class="product-original">售价</text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 功能入口数据
const features = [
    {
        name: '每日签到',
        icon: 'https://img.alicdn.com/imgextra/i4/2200676927379/O1CN01udPyg924Nde2V1ZYa_!!2200676927379.png',
    },
    {
        name: '领券中心',
        icon: 'https://img.alicdn.com/imgextra/i1/2200676927379/O1CN01qdXmxv24Nde39W0ZO_!!2200676927379.png',
    },
    {
        name: '消费奖励',
        icon: 'https://img.alicdn.com/imgextra/i4/2200676927379/O1CN019SlLKy24Nde2lTsy7_!!2200676927379.png',
    },
    {
        name: '银票好物',
        icon: 'https://img.alicdn.com/imgextra/i4/2200676927379/O1CN01U2cPtq24Nde2Dtdt4_!!2200676927379.png',
    },
]

// 分类数据
const categories = ['推荐', '一番赏', '无限赏', '福袋']
const activeCategory = ref('推荐')
const handleCategory = (category) => {
    console.log('handleCategory', category)
    activeCategory.value = category
}

// 商品数据
const products = [
    {
        tag: '一番赏',
        name: '海洋的回音测试',
        price: '31.98',
        image: 'http://www.yqmh.cuicanchaowan.com/uploads/box/2025-08-10/3f25c6af-aae0-49f2-c07d-4e87521d96a8.jpeg',
    },
    {
        tag: '一番赏',
        name: '骑上我心爱的小摩托 - 副本 - 副本',
        price: '28.88',
        image: 'http://www.yqmh.cuicanchaowan.com/uploads/box/2025-08-10/3f25c6af-aae0-49f2-c07d-4e87521d96a8.jpeg',
    },
    {
        tag: '一番赏',
        name: '一起八卦呀 - 副本',
        price: '13.88',
        image: 'http://www.yqmh.cuicanchaowan.com/uploads/box/2025-08-10/3f25c6af-aae0-49f2-c07d-4e87521d96a8.jpeg',
    },
    {
        tag: '一番赏',
        name: '寻找果冻兔 - 副本',
        price: '22.88',
        image: 'http://www.yqmh.cuicanchaowan.com/uploads/box/2025-08-10/3f25c6af-aae0-49f2-c07d-4e87521d96a8.jpeg',
    },
    {
        tag: '一番赏',
        name: '小火龙来啦 - 副本',
        price: '25.88',
        image: 'http://www.yqmh.cuicanchaowan.com/uploads/box/2025-08-10/3f25c6af-aae0-49f2-c07d-4e87521d96a8.jpeg',
    },
    {
        tag: '一番赏',
        name: 'rico 50%',
        price: '15.00',
        image: 'http://www.yqmh.cuicanchaowan.com/uploads/box/2025-08-10/3f25c6af-aae0-49f2-c07d-4e87521d96a8.jpeg',
    },
]

const toDetailCard = (product) => {
    uni.navigateTo({
        url: `/pages/detailCard/index`,
    })
}

// 处理功能入口点击
const handleFeatureClick = (featureName: string) => {
    switch (featureName) {
        case '每日签到':
            uni.navigateTo({
                url: '/pages/signin/index'
            })
            break
        case '领券中心':
            uni.showToast({
                title: '功能开发中',
                icon: 'none'
            })
            break
        case '消费奖励':
            uni.showToast({
                title: '功能开发中',
                icon: 'none'
            })
            break
        case '银票好物':
            uni.showToast({
                title: '功能开发中',
                icon: 'none'
            })
            break
        default:
            break
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* background-color: #f5f5f5; */
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

/* 温馨提示横幅 */
.banner {
    margin: 10px;
    /* padding: 15px; */
    /* background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%); */
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.banner-content {
    flex: 1;
    z-index: 1;
}

.banner-title {
    display: block;
    font-weight: bold;
    /* color: #fff; */
    margin-bottom: 5px;
    font-size: 16px;
}

.banner-text {
    display: block;
    color: #fff;
    font-size: 14px;
    margin-bottom: 2px;
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
}

/* 功能入口区 */
.features {
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    background-color: #fff;
    margin: 10px;
    border-radius: 10px;
}

.feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.feature-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
}

.feature-name {
    font-size: 12px;
    color: #666;
}

/* 分类导航 */
.category-nav {
    background-color: #fff;
    padding: 10px 0;
    margin: 0 10px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
}

.category-scroll {
    white-space: nowrap;
    padding: 0 10px;
}

.category-item {
    display: inline-block;
    padding: 5px 15px;
    margin-right: 10px;
    font-size: 14px;
    color: #666;
    border-radius: 20px;
}

.category-item.active {
    background-color: #ff6b6b;
    color: #fff;
}

/* 商品展示区 */
.products {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
    background-color: #fff;
    margin: 0 10px 60px 10px;
    border-radius: 0 0 10px 10px;
}

.product-item {
    width: calc(50% - 5px);
    background-color: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    padding-bottom: 10px;
}

.product-tag {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: #ff6b6b;
    color: white;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    z-index: 1;
}

.product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.product-name {
    display: block;
    padding: 8px;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.product-price {
    padding: 0 8px 8px 8px;
    font-size: 16px;
    color: #ff6b6b;
    font-weight: bold;
}

.product-original {
    font-size: 12px;
    color: #999;
    margin-left: 5px;
}

/* 底部导航 */
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.tabbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    color: #999;
}

.tabbar-item.active {
    color: #ff6b6b;
}

.tabbar-icon {
    font-size: 20px;
    margin-bottom: 2px;
}

/* 引入图标字体 */
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
