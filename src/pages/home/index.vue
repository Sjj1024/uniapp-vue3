<template>
    <!-- 自定义状态栏 -->
    <TopBar bgColor="#fff" class="topBar">
        <!-- 默认左侧胶囊插槽 -->
        <view class="top-box">
            <!-- 定位 -->
            <!-- <view class="location" @click="getLocation">
                <u-icon name="map-fill" color="#ffffff" size="18"></u-icon>
                <view class="loc">{{ userStore.province }}</view>
                <u-icon
                    class="down"
                    name="arrow-down"
                    color="#ffffff"
                    size="18"
                ></u-icon>
            </view> -->
            <!-- 搜索 -->
            <view class="search-input">
                <view class="search-icon">
                    <u-icon name="search" size="40rpx" color="#b4b4b4"></u-icon>
                </view>
                <text class="place">输入店铺名称搜索</text>
            </view>
        </view>
    </TopBar>
    <view class="card-list-page">
        <!-- 卡牌列表 -->
        <view class="cards-container">
            <card-item
                v-for="card in filteredCards"
                :key="card.id"
                :card="card"
            />
        </view>

        <!-- 空状态 -->
        <view class="empty-state" v-if="filteredCards.length === 0">
            <image src="/static/images/empty.png" mode="widthFix"></image>
            <text>没有找到符合条件的卡牌</text>
        </view>
    </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { contentTop } from '@/utils/comm'
import TopBar from '@/components/topbar.vue'
import useCardsStore from '@/store/card'
import CardItem from '@/components/card.vue'

const cardsStore = useCardsStore()

onMounted(() => {
    console.log('onMounted')
    // uni.hideTabBar()
})

const { filter, filteredCards } = cardsStore

// onMounted(() => {
//     if (cardsStore.allCards.length === 0) {
//         cardsStore.initCards()
//     }
// })

// const updateFilter = (filters) => {
//     cardsStore.updateFilter(filters)
// }

// const navigateToDetail = (cardId) => {
//     cardsStore.setCurrentCard(cardId)
//     uni.navigateTo({
//         url: '/pages/detailCard/index',
//     })
// }
</script>

<style scoped lang="scss">
.card-list-page {
    width: 100%;
    height: calc(100vh - v-bind(contentTop));
    padding: 0 0 60rpx 0;
    padding-top: v-bind(contentTop);
    min-height: 100vh;
}

.topBar {
    position: sticky;
    top: 0;
    z-index: 100;
}

.search-input {
    width: 68%;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 30rpx;
    background-color: #eeeeeed7;
    position: relative;
    margin-left: 20rpx;
    text-align: left;

    .search-icon {
        position: absolute;
        left: 12rpx;
        top: 12rpx;
        color: #c5c5c5;
    }

    .place {
        color: #b4b4b4;
        margin-left: 60rpx;
        font-weight: 400;
        font-size: 28rpx;
    }
}

.page-title {
    font-size: 36rpx;
    font-weight: bold;
    padding: 30rpx 20rpx;
    color: #333;
}

.filter-bar {
    background-color: #fff;
    padding: 20rpx;
    border-bottom: 1px solid #eee;
    margin-bottom: 20rpx;
}

.filter-group {
    display: flex;
    align-items: center;
    margin-bottom: 15rpx;
    flex-wrap: wrap;
}

.filter-group:last-child {
    margin-bottom: 0;
}

.filter-label {
    font-size: 28rpx;
    color: #666;
    margin-right: 20rpx;
    width: 100rpx;
    display: inline-block;
}

.filter-item {
    padding: 8rpx 20rpx;
    background-color: #f0f2f5;
    border-radius: 20rpx;
    margin-right: 15rpx;
    margin-bottom: 15rpx;
    font-size: 26rpx;
    cursor: pointer;
}

.filter-item.active {
    background-color: #3c78d8;
    color: #fff;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20rpx;
    gap: 20rpx;
}

.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200rpx;
}

.empty-state image {
    width: 200rpx;
    margin-bottom: 30rpx;
}

.empty-state text {
    color: #999;
    font-size: 28rpx;
}
</style>
