<template>
    <TopBar title="详情" />
    <Loading v-if="isLoading" />
    <view v-else class="container" :style="{ paddingTop: contentTop }">
        <!-- 标题区 -->
        <view class="title-section">
            <text class="main-title">YIFANSHANG</text>
        </view>

        <!-- 商品信息区 -->
        <view class="product-info">
            <view class="product-header">
                <image
                    src="https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg"
                    class="product-image"
                    mode="widthFix"
                    alt="海洋的回音商品图"
                ></image>
                <view class="product-details">
                    <text class="product-name">海洋的回音 测试 - 副本</text>
                    <text class="product-price">¥31.98/抽</text>
                    <text class="box-number">第1/5箱</text>
                </view>
            </view>

            <!-- 换箱控制区 -->
            <view class="box-controls">
                <button class="control-btn prev-btn">
                    <text>上一个</text>
                </button>
                <button class="control-btn change-btn">换 箱</button>
                <button class="control-btn next-btn">
                    <text class="iconfont">下一个</text>
                </button>
            </view>

            <!-- 剩余数量 -->
            <view class="remaining-count">
                <text>本套剩余: 700/700</text>
            </view>

            <!-- 排队状态 -->
            <view class="queue-status">
                <text>当前无人排队，快来抢购！</text>
            </view>
        </view>

        <!-- 标签切换区 -->
        <view class="tabs">
            <view
                class="tab-item"
                :class="{ active: activeTab === 0 }"
                @click="activeTab = 0"
            >
                <text>奖品预览</text>
            </view>
            <view
                class="tab-item"
                :class="{ active: activeTab === 1 }"
                @click="activeTab = 1"
            >
                <text>中奖记录</text>
            </view>
        </view>

        <!-- 奖品预览区 -->
        <view class="prizes-container" v-if="activeTab === 0">
            <!-- BX赏区域 -->
            <view class="prize-category">
                <text class="category-title">BX赏</text>
                <view class="prizes-grid">
                    <view
                        class="prize-item"
                        v-for="(prize, index) in bxPrizes"
                        :key="index"
                    >
                        <image
                            :src="prize.image"
                            class="prize-image"
                            mode="aspectFill"
                            :alt="prize.name"
                        ></image>
                        <text class="prize-name">{{ prize.name }}</text>
                        <text class="prize-rate">概率: {{ prize.rate }}</text>
                        <text class="prize-remaining">{{
                            prize.remaining
                        }}</text>
                        <text class="prize-price">¥{{ prize.price }}</text>
                    </view>
                </view>
            </view>

            <!-- H赏区域 -->
            <view class="prize-category">
                <text class="category-title">H赏</text>
                <view class="prizes-grid">
                    <view
                        class="prize-item"
                        v-for="(prize, index) in hPrizes"
                        :key="index"
                    >
                        <image
                            :src="prize.image"
                            class="prize-image"
                            mode="aspectFill"
                            :alt="prize.name"
                        ></image>
                        <text class="prize-name">{{ prize.name }}</text>
                        <text class="prize-rate">概率: {{ prize.rate }}</text>
                        <text class="prize-remaining">{{
                            prize.remaining
                        }}</text>
                        <text class="prize-price">¥{{ prize.price }}</text>
                    </view>
                </view>
            </view>
        </view>

        <!-- 中奖记录区 -->
        <view class="winning-records" v-if="activeTab === 1">
            <view
                class="record-item"
                v-for="(record, index) in winningRecords"
                :key="index"
            >
                <text class="record-user">{{ record.user }}</text>
                <text class="record-prize">获得了 {{ record.prize }}</text>
                <text class="record-time">{{ record.time }}</text>
            </view>
        </view>

        <!-- 底部购买按钮 -->
        <view class="buy-section">
            <button class="buy-btn">立即抽卡</button>
        </view>
    </view>
</template>

<script setup>
import TopBar from '@/components/topbar.vue'
import Loading from '@/components/loading.vue'
import { ref, onMounted } from 'vue'
import { contentTop } from '@/utils/comm'

const isLoading = ref(true)

// 标签切换状态
const activeTab = ref(0)

// BX赏数据
const bxPrizes = [
    {
        name: '海洋之子',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '0.428%',
        remaining: '3/3',
        price: '31.90',
    },
    {
        name: '快乐星球',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '0.571%',
        remaining: '4/4',
        price: '31.98',
    },
    {
        name: '折纸独角兽',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '0.714%',
        remaining: '5/5',
        price: '31.98',
    },
    {
        name: '木偶',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '0.428%',
        remaining: '3/3',
        price: '31.98',
    },
    {
        name: '真相',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '0.714%',
        remaining: '5/5',
        price: '31.98',
    },
    {
        name: '回音',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '1.142%',
        remaining: '8/8',
        price: '31.98',
    },
    {
        name: '天使小熊',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '1.428%',
        remaining: '10/10',
        price: '31.98',
    },
    {
        name: '招财纳福',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '1.428%',
        remaining: '10/10',
        price: '31.98',
    },
    {
        name: '爱吃零食',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '1.714%',
        remaining: '12/12',
        price: '26.88',
    },
]

// H赏数据
const hPrizes = [
    {
        name: '玉米萌粒',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '31.428%',
        remaining: '220/220',
        price: '31.98',
    },
    {
        name: '面包萌粒',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '30.285%',
        remaining: '212/212',
        price: '31.98',
    },
    {
        name: '鲷鱼烧萌粒',
        image: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.jpeg',
        rate: '29.714%',
        remaining: '208/208',
        price: '31.98',
    },
]

// 中奖记录数据
const winningRecords = [
    {
        user: '用户138****5678',
        prize: '海洋之子',
        time: '今天 10:23',
    },
    {
        user: '用户139****8765',
        prize: '快乐星球',
        time: '今天 09:45',
    },
    {
        user: '用户135****1234',
        prize: '玉米萌粒',
        time: '今天 08:12',
    },
    {
        user: '用户136****4321',
        prize: '面包萌粒',
        time: '昨天 22:31',
    },
    {
        user: '用户137****6789',
        prize: '鲷鱼烧萌粒',
        time: '昨天 19:56',
    },
]

onMounted(() => {
    setTimeout(() => {
        console.log('isLoading', isLoading.value)
        isLoading.value = false
    }, 3000)
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f0fce8;
    padding-bottom: 70px;
    position: relative;
}

/* 顶部导航栏 */
.navbar {
    height: 44px;
    background-color: #e1f5d0;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #d0e8b7;
}

.back-btn {
    width: 40px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-title {
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.navbar-right {
    width: 40px;
    height: 44px;
}

/* 标题区 */
.title-section {
    padding: 15px;
    text-align: center;
}

.main-title {
    font-size: 22px;
    font-weight: bold;
    color: #33691e;
    letter-spacing: 2px;
}

/* 商品信息区 */
.product-info {
    margin: 0 15px;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 2px solid #aed581;
}

.product-header {
    display: flex;
    margin-bottom: 15px;
}

.product-image {
    width: 120px;
    height: 150px;
    border-radius: 8px;
    margin-right: 15px;
}

.product-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    line-height: 1.4;
}

.product-price {
    font-size: 18px;
    color: #e53935;
    font-weight: bold;
    margin-bottom: 5px;
}

.box-number {
    font-size: 14px;
    color: #666;
}

/* 换箱控制区 */
.box-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
}

.control-btn {
    padding: 2px 15px;
    border-radius: 20px;
    font-size: 14px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.prev-btn,
.next-btn {
    background-color: #ff6b6b;
    color: #fff;
    width: 60px;
    height: 40px;
    padding: 0;
}

.change-btn {
    background-color: #ff6b6b;
    color: #fff;
    padding: 2px 30px;
}

/* 剩余数量和排队状态 */
.remaining-count {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

.queue-status {
    background-color: #e8f5e9;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
    color: #2e7d32;
}

/* 标签切换区 */
.tabs {
    display: flex;
    margin: 15px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e0e0e0;
}

.tab-item {
    flex: 1;
    text-align: center;
    padding: 12px 0;
    font-size: 16px;
    color: #666;
}

.tab-item.active {
    background-color: #ff6b6b;
    color: #fff;
}

/* 奖品预览区 */
.prizes-container {
    margin: 0 15px;
}

.prize-category {
    margin-bottom: 20px;
}

.category-title {
    display: inline-block;
    background-color: #ffd600;
    color: #333;
    font-weight: bold;
    padding: 3px 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 14px;
}

.prizes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.prize-item {
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.prize-image {
    width: 100%;
    height: 100px;
    border-radius: 5px;
    margin-bottom: 8px;
}

.prize-name {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.prize-rate {
    font-size: 12px;
    color: #666;
    margin-bottom: 3px;
    display: block;
}

.prize-remaining {
    font-size: 12px;
    color: #ff6b6b;
    margin-bottom: 3px;
    display: block;
}

.prize-price {
    font-size: 13px;
    color: #e53935;
    font-weight: bold;
    display: block;
}

/* 中奖记录区 */
.winning-records {
    margin: 0 15px;
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
}

.record-item {
    padding: 12px 0;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.record-item:last-child {
    border-bottom: none;
}

.record-user {
    font-size: 14px;
    color: #333;
}

.record-prize {
    flex: 1;
    margin: 0 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
}

.record-time {
    font-size: 12px;
    color: #999;
}

/* 底部购买按钮 */
.buy-section {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 10px;
    background-color: #f0fce8;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.buy-btn {
    width: 80%;
    padding: 6px 0;
    background-color: #ff5722;
    color: #fff;
    font-size: 18px;
    border-radius: 30px;
    border: none;
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
