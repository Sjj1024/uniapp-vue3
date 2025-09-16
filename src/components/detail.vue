<template>
    <view class="card-detail">
        <!-- 卡牌头部 -->
        <view class="card-header">
            <image
                :src="card.imageUrl"
                class="card-image"
                mode="widthFix"
            ></image>
            <view class="card-info">
                <view class="card-name-rarity">
                    <text class="card-name">{{ card.name }}</text>
                    <text class="card-rarity" :class="card.rarity">
                        {{ getRarityText(card.rarity) }}
                    </text>
                </view>
                <view class="card-attribute">
                    <text class="attribute-label">属性:</text>
                    <text class="attribute-value" :class="card.attribute">
                        {{ getAttributeText(card.attribute) }}
                    </text>
                </view>
                <view class="card-stats">
                    <view class="stat-item">
                        <text class="stat-label">攻击力:</text>
                        <text class="stat-value">{{ card.attack }}</text>
                    </view>
                    <view class="stat-item">
                        <text class="stat-label">防御力:</text>
                        <text class="stat-value">{{ card.defense }}</text>
                    </view>
                </view>
            </view>
        </view>

        <!-- 卡牌描述 -->
        <view class="card-description">
            <text class="description-title">卡牌描述</text>
            <text class="description-content">{{ card.description }}</text>
        </view>
    </view>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
})

// 格式化稀有度文本
const getRarityText = (rarity) => {
    const map = {
        common: '普通',
        rare: '稀有',
        epic: '史诗',
        legend: '传说',
    }
    return map[rarity] || rarity
}

// 格式化属性文本
const getAttributeText = (attribute) => {
    const map = {
        fire: '火焰',
        water: '水',
        wind: '风',
        earth: '大地',
        thunder: '雷电',
        light: '光明',
        dark: '黑暗',
    }
    return map[attribute] || attribute
}
</script>

<style scoped>
.card-detail {
    background-color: #fff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin: 20rpx;
}

.card-header {
    display: flex;
    gap: 20rpx;
    margin-bottom: 30rpx;
}

.card-image {
    width: 280rpx;
    height: 380rpx;
    border-radius: 10rpx;
    box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
    object-fit: cover;
}

.card-info {
    flex: 1;
}

.card-name-rarity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.card-name {
    font-size: 36rpx;
    font-weight: bold;
}

.card-rarity {
    padding: 5rpx 15rpx;
    border-radius: 15rpx;
    font-size: 24rpx;
    color: white;
}

.card-rarity.common {
    background-color: #999;
}

.card-rarity.rare {
    background-color: #3498db;
}

.card-rarity.epic {
    background-color: #9b59b6;
}

.card-rarity.legend {
    background-color: #f39c12;
}

.card-attribute {
    margin-bottom: 20rpx;
    display: flex;
    align-items: center;
}

.attribute-label {
    color: #666;
    font-size: 26rpx;
    margin-right: 10rpx;
}

.attribute-value {
    font-size: 28rpx;
    padding: 5rpx 15rpx;
    border-radius: 8rpx;
}

.attribute-value.fire {
    background-color: #ffecec;
    color: #e74c3c;
    border: 1px solid #f8c8c8;
}

.attribute-value.water {
    background-color: #e6f7ff;
    color: #3498db;
    border: 1px solid #b3e0ff;
}

.attribute-value.wind {
    background-color: #e6f9e6;
    color: #2ecc71;
    border: 1px solid #b3e6b3;
}

.attribute-value.earth {
    background-color: #fcf3e6;
    color: #e67e22;
    border: 1px solid #f9e9d0;
}

.attribute-value.thunder {
    background-color: #f5eef8;
    color: #8e44ad;
    border: 1px solid #ebd9f7;
}

.attribute-value.light {
    background-color: #fef9e7;
    color: #f39c12;
    border: 1px solid #fef0cd;
}

.card-stats {
    display: flex;
    gap: 30rpx;
    margin-bottom: 10rpx;
}

.stat-item {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10rpx 20rpx;
    border-radius: 8rpx;
}

.stat-label {
    color: #666;
    font-size: 26rpx;
    margin-right: 10rpx;
}

.stat-value {
    font-size: 28rpx;
    font-weight: bold;
}

.card-description {
    margin-top: 20rpx;
    padding: 20rpx;
    background-color: #f9f9f9;
    border-radius: 10rpx;
}

.description-title {
    display: block;
    font-weight: bold;
    margin-bottom: 15rpx;
    color: #333;
    font-size: 28rpx;
}

.description-content {
    color: #666;
    font-size: 26rpx;
    line-height: 1.6;
    text-align: justify;
}
</style>
