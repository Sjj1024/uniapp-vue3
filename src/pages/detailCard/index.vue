<template>
    <view class="card-detail-page">
        <card-detail :card="currentCard" />
    </view>
</template>

<script setup>
import { onMounted } from 'vue'
import useCardsStore from '@/store/card'
import { useRouter } from 'vue-router'
import CardDetail from '@/components/detail.vue'

const cardsStore = useCardsStore()
const router = useRouter()

const { currentCard } = cardsStore

onMounted(() => {
    // 如果从列表页跳转时未设置当前卡牌，则返回列表页
    if (!currentCard) {
        router.push('/pages/card-list/index')
    }
})

const navigateBack = () => {
    router.back()
}
</script>

<style scoped>
.card-detail-page {
    background-color: #f5f7fa;
    min-height: 100vh;
    padding-bottom: 40rpx;
}

.page-header {
    padding: 20rpx;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.back-button {
    display: flex;
    align-items: center;
    color: #3c78d8;
    padding: 10rpx 0;
}

.back-icon {
    font-size: 32rpx;
    margin-right: 10rpx;
}

.back-text {
    font-size: 28rpx;
    font-weight: 500;
}
</style>
