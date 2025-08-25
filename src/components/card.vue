<template>
    <view class="card-item" @click="$emit('click')">
        <view class="card-image-container">
            <image
                :src="card.imageUrl"
                class="card-image"
                mode="aspectFill"
            ></image>
            <!-- <view class="rarity-badge" :class="card.rarity">
                {{ getRarityText(card.rarity) }}
            </view> -->
        </view>
        <!-- <view class="card-info">
            <text class="card-name">{{ card.name }}</text>
            <view class="card-attribute">
                <text :class="card.attribute">{{
                    getAttributeText(card.attribute)
                }}</text>
            </view>
        </view> -->
    </view>
</template>

<script setup>
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
.card-item {
    width: 220rpx;
    background-color: #fff;
    border-radius: 16rpx;
    overflow: hidden;
    box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.08);
    transition: transform 0.2s;
}

.card-item:active {
    transform: scale(0.98);
}

.card-image-container {
    position: relative;
    height: 280rpx;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
}

.rarity-badge {
    position: absolute;
    top: 10rpx;
    right: 10rpx;
    padding: 5rpx 15rpx;
    border-radius: 20rpx;
    font-size: 22rpx;
    color: white;
    font-weight: bold;
}

.rarity-badge.common {
    background-color: #999;
}

.rarity-badge.rare {
    background-color: #3498db;
}

.rarity-badge.epic {
    background-color: #9b59b6;
}

.rarity-badge.legend {
    background-color: #f39c12;
}

.card-info {
    padding: 15rpx;
}

.card-name {
    font-size: 28rpx;
    font-weight: bold;
    display: block;
    margin-bottom: 8rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-attribute {
    font-size: 24rpx;
    padding: 3rpx 10rpx;
    border-radius: 6rpx;
    display: inline-block;
}

.card-attribute.fire {
    background-color: #ffebeb;
    color: #e74c3c;
    border: 1px solid #ffd7d7;
}

.card-attribute.water {
    background-color: #ebf5ff;
    color: #3498db;
    border: 1px solid #d6eaff;
}

.card-attribute.wind {
    background-color: #eafaf1;
    color: #27ae60;
    border: 1px solid #d5f5e3;
}

.card-attribute.earth {
    background-color: #fcf3e6;
    color: #e67e22;
    border: 1px solid #f9e9d0;
}

.card-attribute.thunder {
    background-color: #f5eef8;
    color: #8e44ad;
    border: 1px solid #ebd9f7;
}

.card-attribute.light {
    background-color: #fef9e7;
    color: #f39c12;
    border: 1px solid #fef0cd;
}
</style>
