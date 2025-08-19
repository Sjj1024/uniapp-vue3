<template>
    <view class="card-list-page">
        <view class="page-title">卡牌收藏</view>

        <!-- 筛选栏 -->
        <view class="filter-bar">
            <view class="filter-group">
                <text class="filter-label">稀有度:</text>
                <view
                    class="filter-item"
                    :class="{ active: filter.rarity === 'all' }"
                    @click="updateFilter({ rarity: 'all' })"
                >
                    全部
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.rarity === 'common' }"
                    @click="updateFilter({ rarity: 'common' })"
                >
                    普通
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.rarity === 'rare' }"
                    @click="updateFilter({ rarity: 'rare' })"
                >
                    稀有
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.rarity === 'epic' }"
                    @click="updateFilter({ rarity: 'epic' })"
                >
                    史诗
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.rarity === 'legend' }"
                    @click="updateFilter({ rarity: 'legend' })"
                >
                    传说
                </view>
            </view>

            <view class="filter-group">
                <text class="filter-label">属性:</text>
                <view
                    class="filter-item"
                    :class="{ active: filter.attribute === 'all' }"
                    @click="updateFilter({ attribute: 'all' })"
                >
                    全部
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.attribute === 'fire' }"
                    @click="updateFilter({ attribute: 'fire' })"
                >
                    火焰
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.attribute === 'water' }"
                    @click="updateFilter({ attribute: 'water' })"
                >
                    水
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.attribute === 'wind' }"
                    @click="updateFilter({ attribute: 'wind' })"
                >
                    风
                </view>
                <view
                    class="filter-item"
                    :class="{ active: filter.attribute === 'earth' }"
                    @click="updateFilter({ attribute: 'earth' })"
                >
                    大地
                </view>
            </view>
        </view>

        <!-- 卡牌列表 -->
        <view class="cards-container">
            <card-item
                v-for="card in filteredCards"
                :key="card.id"
                :card="card"
                @click="navigateToDetail(card.id)"
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
import useCardsStore from '@/store/card'
import { useRouter } from 'vue-router'
import CardItem from '@/components/card.vue'

const cardsStore = useCardsStore()
const router = useRouter()

const { filter, filteredCards } = cardsStore

onMounted(() => {
    if (cardsStore.allCards.length === 0) {
        cardsStore.initCards()
    }
})

const updateFilter = (filters) => {
    cardsStore.updateFilter(filters)
}

const navigateToDetail = (cardId) => {
    cardsStore.setCurrentCard(cardId)
    router.push('/pages/detailCard/index')
}
</script>

<style scoped>
.card-list-page {
    padding-bottom: 60rpx;
    background-color: #f5f7fa;
    min-height: 100vh;
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
