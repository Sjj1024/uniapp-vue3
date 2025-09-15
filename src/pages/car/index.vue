<template>
    <Loading v-if="isLoading" />
    <view v-else class="container">
        <!-- 标签切换 -->
        <view class="tabs">
            <view
                class="tab-item"
                :class="{ active: activeTab === 'spot' }"
                @click="activeTab = 'spot'"
            >
                现货柜
            </view>
            <view
                class="tab-item"
                :class="{ active: activeTab === 'treasure' }"
                @click="activeTab = 'treasure'"
            >
                宝箱柜
            </view>
        </view>

        <!-- 状态筛选 -->
        <view class="status-filter">
            <view
                class="status-item"
                :class="{ active: activeStatus === 'pending' }"
                @click="activeStatus = 'pending'"
            >
                待提货
            </view>
            <view
                class="status-item"
                :class="{ active: activeStatus === 'preparing' }"
                @click="activeStatus = 'preparing'"
            >
                待发货
            </view>
            <view
                class="status-item"
                :class="{ active: activeStatus === 'shipped' }"
                @click="activeStatus = 'shipped'"
            >
                已发货
            </view>
            <view
                class="status-item"
                :class="{ active: activeStatus === 'completed' }"
                @click="activeStatus = 'completed'"
            >
                已完成
            </view>
        </view>

        <!-- 列表内容 -->
        <view class="list-container">
            <!-- 当有数据时显示列表 -->
            <view v-if="filteredItems.length > 0" class="items-list">
                <view
                    class="item-card"
                    v-for="(item, index) in filteredItems"
                    :key="index"
                >
                    <view class="item-header">
                        <view class="item-name">{{ item.name }}</view>
                        <view
                            class="item-status"
                            :class="`status-${item.status}`"
                        >
                            {{ getStatusText(item.status) }}
                        </view>
                    </view>
                    <view class="item-details">
                        <view class="detail-item">
                            <text class="detail-label">编号：</text>
                            <text class="detail-value">{{ item.code }}</text>
                        </view>
                        <view class="detail-item">
                            <text class="detail-label">数量：</text>
                            <text class="detail-value"
                                >{{ item.quantity }} 个</text
                            >
                        </view>
                        <view class="detail-item">
                            <text class="detail-label">更新时间：</text>
                            <text class="detail-value">{{
                                item.updateTime
                            }}</text>
                        </view>
                    </view>
                </view>
            </view>

            <!-- 当没有数据时显示空状态 -->
            <view v-else class="empty-state">
                <view class="empty-icon">
                    <uni-icons
                        type="document"
                        size="60"
                        color="#CCCCCC"
                    ></uni-icons>
                </view>
                <view class="empty-text">暂无数据</view>
            </view>
        </view>
    </view>
    <TabBar />
</template>

<script setup>
import Loading from '@/components/loading.vue'
import { ref, computed, onMounted } from 'vue'
import TabBar from '@/components/tabar.vue'

const isLoading = ref(true)

// 标签切换状态
const activeTab = ref('spot') // 'spot' 现货柜, 'treasure' 宝箱柜

// 状态筛选
const activeStatus = ref('pending') // 'pending' 待提货, 'preparing' 待发货, 'shipped' 已发货, 'completed' 已完成

// 模拟数据
const items = ref([
    // 现货柜数据
    {
        id: 1,
        type: 'spot',
        name: '电子元件盒',
        code: 'SP-2023001',
        quantity: 10,
        status: 'pending',
        updateTime: '2023-09-01 10:30',
    },
    {
        id: 2,
        type: 'spot',
        name: '工具收纳盒',
        code: 'SP-2023002',
        quantity: 5,
        status: 'preparing',
        updateTime: '2023-09-01 14:15',
    },
    {
        id: 3,
        type: 'spot',
        name: '零件储存盒',
        code: 'SP-2023003',
        quantity: 3,
        status: 'shipped',
        updateTime: '2023-08-31 09:45',
    },
    {
        id: 4,
        type: 'spot',
        name: '精密仪器盒',
        code: 'SP-2023004',
        quantity: 2,
        status: 'completed',
        updateTime: '2023-08-30 16:20',
    },

    // 宝箱柜数据
    {
        id: 5,
        type: 'treasure',
        name: '珍品展示盒',
        code: 'TR-2023001',
        quantity: 1,
        status: 'pending',
        updateTime: '2023-09-01 11:20',
    },
    {
        id: 6,
        type: 'treasure',
        name: '收藏级收纳箱',
        code: 'TR-2023002',
        quantity: 2,
        status: 'shipped',
        updateTime: '2023-08-31 15:30',
    },
    {
        id: 7,
        type: 'treasure',
        name: '限量版礼盒',
        code: 'TR-2023003',
        quantity: 4,
        status: 'completed',
        updateTime: '2023-08-29 10:10',
    },
])

// 筛选后的数据
const filteredItems = computed(() => {
    return items.value.filter((item) => {
        return (
            item.type === activeTab.value && item.status === activeStatus.value
        )
    })
})

// 选中的项目索引
const selectedItems = ref([])

// 全选状态
const isAllSelected = computed(() => {
    return (
        filteredItems.value.length > 0 &&
        selectedItems.value.length === filteredItems.value.length
    )
})

// 处理复选框变化
const handleCheckboxChange = (index) => {
    const idx = selectedItems.value.indexOf(index)
    if (idx > -1) {
        selectedItems.value.splice(idx, 1)
    } else {
        selectedItems.value.push(index)
    }
}

// 全选/取消全选
const handleSelectAll = (e) => {
    if (e.detail.value) {
        // 全选
        selectedItems.value = filteredItems.value.map((_, index) => index)
    } else {
        // 取消全选
        selectedItems.value = []
    }
}

// 反选
const handleInvertSelect = () => {
    const newSelected = []
    for (let i = 0; i < filteredItems.value.length; i++) {
        if (!selectedItems.value.includes(i)) {
            newSelected.push(i)
        }
    }
    selectedItems.value = newSelected
}

// 分解操作
const handleDecompose = () => {
    if (selectedItems.value.length === 0) {
        uni.showToast({
            title: '请先选择要分解的项目',
            icon: 'none',
        })
        return
    }

    uni.showToast({
        title: `已分解 ${selectedItems.value.length} 个项目`,
        icon: 'success',
    })

    // 清空选择
    selectedItems.value = []
}

// 提货操作
const handlePickup = () => {
    if (selectedItems.value.length === 0) {
        uni.showToast({
            title: '请先选择要提货的项目',
            icon: 'none',
        })
        return
    }

    uni.showToast({
        title: `已提货 ${selectedItems.value.length} 个项目`,
        icon: 'success',
    })

    // 清空选择
    selectedItems.value = []
}

// 获取状态文本
const getStatusText = (status) => {
    const statusMap = {
        pending: '待提货',
        preparing: '待发货',
        shipped: '已发货',
        completed: '已完成',
    }
    return statusMap[status] || ''
}

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 3000)
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.page-title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 16px;
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
}

.tabs {
    display: flex;
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
}

.tab-item {
    flex: 1;
    text-align: center;
    padding: 14px 0;
    font-size: 16px;
    color: #333333;
    position: relative;
}

.tab-item.active {
    color: #007aff;
    font-weight: 500;
}

.tab-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #007aff;
}

.status-filter {
    display: flex;
    padding: 10px 5px;
    background-color: #ffffff;
    overflow-x: auto;
    border-bottom: 1px solid #eeeeee;
}

.status-item {
    padding: 6px 12px;
    margin: 0 5px;
    font-size: 14px;
    color: #666666;
    background-color: #f5f5f5;
    border-radius: 15px;
    white-space: nowrap;
}

.status-item.active {
    background-color: #e8f3ff;
    color: #007aff;
}

.list-container {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
}

.items-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 12px;
    position: relative;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.item-name {
    font-size: 16px;
    font-weight: 500;
    color: #333333;
}

.item-status {
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
}

.status-pending {
    background-color: #fff7e6;
    color: #ff9f00;
}

.status-preparing {
    background-color: #e6f7ff;
    color: #1890ff;
}

.status-shipped {
    background-color: #f6ffed;
    color: #52c41a;
}

.status-completed {
    background-color: #f5f5f5;
    color: #8c8c8c;
}

.item-details {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.detail-item {
    font-size: 14px;
    color: #666666;
}

.detail-label {
    color: #999999;
}

.item-checkbox {
    position: absolute;
    top: 12px;
    right: 12px;
}

.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    color: #cccccc;
}

.empty-icon {
    margin-bottom: 15px;
}

.empty-text {
    font-size: 16px;
}

.bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #ffffff;
    border-top: 1px solid #eeeeee;
}

.select-all {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #666666;
}

.invert-select {
    color: #007aff;
    cursor: pointer;
}

.selected-count {
    margin-left: 10px;
    color: #999999;
}

.operation-buttons {
    display: flex;
    gap: 10px;
}

.btn {
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    border: none;
}

.decompose {
    background-color: #ffffff;
    color: #666666;
    border: 1px solid #dddddd;
}

.pickup {
    background-color: #000000;
    color: #ffffff;
}
</style>
