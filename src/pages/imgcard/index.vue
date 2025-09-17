<template>
    <view class="card-library-container">
        <!-- 分类标签栏 -->
        <view class="category-tabs">
            <view
                v-for="(category, index) in categories"
                :key="index"
                class="category-tab"
                :class="{ active: activeCategory === index }"
                @click="activeCategory = index"
            >
                <view class="tab-icon">
                    <image :src="category.icon" mode="widthFix"></image>
                </view>
                <view class="tab-text">{{ category.name }}</view>
                <view
                    class="tab-indicator"
                    v-if="activeCategory === index"
                ></view>
            </view>
        </view>

        <!-- 卡牌网格 -->
        <view class="cards-grid">
            <view
                class="card-item"
                v-for="(card, index) in filteredCards"
                :key="index"
                @click="viewCardDetails(card)"
                :style="{ animationDelay: (index % 9) * 0.05 + 's' }"
            >
                <view class="card-image-container">
                    <image
                        :src="card.imageUrl"
                        mode="aspectFill"
                        class="card-image"
                    ></image>
                    <!-- <view class="card-rare-indicator" v-if="card.isRare">
                        <image
                            src="https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg"
                            mode="widthFix"
                        ></image>
                    </view> -->
                </view>
            </view>
        </view>

        <!-- 加载更多提示 -->
        <view class="load-more" v-if="showLoadMore">
            <text>加载更多...</text>
        </view>
    </view>
    <TabBar />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TabBar from '@/components/tabar.vue'

// 路由实例
const router = useRouter()

// 分类数据
const categories = ref([
    {
        name: '英雄卡',
        icon: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/xiangyu.png',
    },
    {
        name: '装备卡',
        icon: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/liubang.jpg',
    },
    {
        name: '故事卡',
        icon: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/luzhi.jpg',
    },
    {
        name: '纪念卡',
        icon: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/yuji.png',
    },
])

// 选中的分类索引
const activeCategory = ref(0)

// 所有卡牌数据
const allCards = ref([
    // 英雄卡
    {
        id: 1,
        name: '烈焰战士',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: true,
    },
    {
        id: 2,
        name: '寒冰法师',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: false,
    },
    {
        id: 3,
        name: '暗影刺客',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: true,
    },
    {
        id: 4,
        name: '光明圣骑士',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: false,
    },
    {
        id: 5,
        name: '狼人守护者',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: false,
    },
    {
        id: 6,
        name: '东方武者',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: true,
    },
    {
        id: 7,
        name: '风之行者',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: false,
    },
    {
        id: 8,
        name: '机械工程师',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: false,
    },
    {
        id: 9,
        name: '绯红剑客',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 0,
        isRare: true,
    },
    // 装备卡
    {
        id: 10,
        name: '雷霆之剑',
        imageUrl: 'https://picsum.photos/seed/equip1/300/400',
        category: 1,
        isRare: true,
    },
    {
        id: 11,
        name: '魔法护盾',
        imageUrl: 'https://picsum.photos/seed/equip2/300/400',
        category: 1,
        isRare: false,
    },
    // 更多卡牌可以在这里继续添加...
    {
        id: 12,
        name: '魔法护盾',
        imageUrl: 'https://picsum.photos/seed/equip2/300/400',
        category: 2,
        isRare: false,
    },
    {
        id: 13,
        name: '魔法护盾',
        imageUrl: 'https://picsum.photos/seed/equip2/300/400',
        category: 3,
        isRare: false,
    },
    {
        id: 14,
        name: '魔法护盾',
        imageUrl: 'https://picsum.photos/seed/equip2/300/400',
        category: 3,
        isRare: false,
    },
    {
        id: 15,
        name: '绯红剑客',
        imageUrl: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home.jpg',
        category: 3,
        isRare: true,
    },
])

// 根据选中的分类过滤卡牌
const filteredCards = computed(() => {
    return allCards.value.filter(
        (card) => card.category === activeCategory.value
    )
})

// 显示加载更多
const showLoadMore = ref(true)

// 查看卡牌详情
const viewCardDetails = (card) => {
    router.push({
        path: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        query: { cardId: card.id },
    })
}

// 页面加载时的操作
onMounted(() => {
    // 模拟数据加载
    setTimeout(() => {
        showLoadMore.value = false
    }, 1500)
})
</script>

<style scoped>
.card-library-container {
    min-height: 100vh;
    background-color: #f5f5f7;
    background-image: radial-gradient(
            circle at 25% 25%,
            rgba(168, 85, 247, 0.05) 0%,
            transparent 20%
        ),
        radial-gradient(
            circle at 75% 75%,
            rgba(168, 85, 247, 0.05) 0%,
            transparent 20%
        );
}

/* 导航栏样式 */
.navbar {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #7c3aed; */
    position: relative;
}

.nav-title {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
}

/* 分类标签样式 */
.category-tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* background: linear-gradient(135deg, #000000 0%, #a855f7 100%); */
    background-image: url('https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/tujianbg.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 12px 0;
    position: relative;
    overflow: hidden;
}

.category-tabs::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg');
    opacity: 0.2;
    pointer-events: none;
}

.category-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    opacity: 0.8;
    transition: all 0.3s ease;
}

.category-tab.active {
    opacity: 1;
}

.tab-icon {
    width: 36px;
    height: 36px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tab-icon image {
    width: 100%;
    height: 100%;
}

.tab-text {
    color: #ffffff;
    font-size: 12px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.tab-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ffffff;
    margin-top: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: pulse 2s infinite;
}

/* 卡牌网格样式 */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
}

.card-item {
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    transform: translateY(0);
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
}

.card-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.card-image-container {
    position: relative;
    width: 100%;
    padding-top: 140%; /* 保持卡牌的宽高比 */
}

.card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

.card-rare-indicator {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background-color: rgba(255, 215, 0, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card-rare-indicator image {
    width: 16px;
    height: 16px;
}

/* 加载更多样式 */
.load-more {
    padding: 16px;
    text-align: center;
    color: #9ca3af;
    font-size: 14px;
}

/* 动画效果 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}

/* 响应式调整 */
@media (max-width: 375px) {
    .cards-grid {
        gap: 12px;
        padding: 12px;
    }

    .tab-icon {
        width: 32px;
        height: 32px;
    }
}
</style>
