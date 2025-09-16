<template>
    <view class="signin-container">
        <!-- 用户积分显示 -->
        <view class="points-section">
            <view class="points-label">我的积分</view>
            <view class="points-value">{{ userPoints.toFixed(2) }}</view>
        </view>

        <!-- 主内容区域 -->
        <view class="main-content">
            <!-- 签到奖励网格 -->
            <view class="rewards-grid">
                <view
                    v-for="(day, index) in signinDays"
                    :key="index"
                    class="reward-item"
                    :class="{
                        completed: day.completed,
                        current: day.isCurrent,
                    }"
                >
                    <view class="day-banner">第{{ day.day }}天</view>
                    <view class="reward-icon">
                        <view v-if="day.day === 7" class="money-bag">
                            <text class="bag-icon">💰</text>
                        </view>
                        <view v-else class="coin-icon">
                            <text class="coin">🪙</text>
                        </view>
                    </view>
                    <view class="reward-points">{{ day.points }} 积分</view>
                </view>
            </view>

            <!-- 签到按钮 -->
            <view class="signin-btn-container">
                <button
                    class="signin-btn"
                    :class="{ disabled: isSignedToday }"
                    @click="handleSignin"
                    :disabled="isSignedToday"
                >
                    {{ isSignedToday ? '今日已签到' : '立即签到' }}
                </button>

                <!-- 累计签到天数 -->
                <view class="signin-counter">
                    您已累计签到{{ totalSigninDays }}天
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useSigninStore } from '@/store/signin'

// 使用签到store
const signinStore = useSigninStore()

// 系统信息
const menuInfo = ref({
    statusBarHeight: '44px',
})

// 计算属性
const userPoints = computed(() => signinStore.userPoints)
const isSignedToday = computed(() => signinStore.isSignedToday)
const totalSigninDays = computed(() => signinStore.totalSigninDays)
const signinDays = computed(() => signinStore.signinDays)

// 获取系统信息
const getSystemInfo = () => {
    const info = uni.getStorageSync('menuInfo')
    if (info) {
        menuInfo.value = info
    }
}

// 返回上一页
const goBack = () => {
    uni.navigateBack()
}

// 处理签到
const handleSignin = async () => {
    if (isSignedToday.value) return

    // 显示加载状态
    uni.showLoading({
        title: '签到中...',
    })

    try {
        // 执行签到
        const result = await signinStore.signin()

        uni.hideLoading()

        if (result.success) {
            // 显示签到成功提示
            uni.showToast({
                title: result.message,
                icon: 'success',
                duration: 2000,
            })
        } else {
            // 显示错误提示
            uni.showToast({
                title: result.message,
                icon: 'none',
                duration: 2000,
            })
        }
    } catch (error) {
        uni.hideLoading()
        uni.showToast({
            title: '签到失败，请重试',
            icon: 'none',
            duration: 2000,
        })
    }
}

onMounted(() => {
    getSystemInfo()
    signinStore.loadFromStorage()
})
</script>

<style lang="scss" scoped>
.signin-container {
    min-height: 100vh;
    // background: linear-gradient(180deg, #ff6b9d 0%, #ff8a80 50%, #ffb74d 100%);
    background-image: url('https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/sigbg.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
}

// 自定义导航栏
.custom-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: transparent;

    .navbar-content {
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20rpx;

        .back-btn {
            width: 60rpx;
            height: 60rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .navbar-title {
            color: #fff;
            font-size: 36rpx;
            font-weight: 600;
        }

        .navbar-placeholder {
            width: 60rpx;
        }
    }
}

// 积分显示区域
.points-section {
    padding: 120rpx 40rpx 40rpx;
    background-color: #ffffff88;
    margin: 10px 30rpx;
    border-radius: 10px;
    box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.1);

    .points-label {
        // color: #fff;
        font-size: 28rpx;
        margin-bottom: 10rpx;
    }

    .points-value {
        // color: #fff;
        font-size: 48rpx;
        font-weight: bold;
    }
}

// 主内容区域
.main-content {
    background-color: #ffffffa5;
    margin: 0 30rpx;
    border-radius: 20rpx;
    padding: 40rpx;
    box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.1);
}

// 奖励网格
.rewards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20rpx;
    margin-bottom: 60rpx;
}

.reward-item {
    background: #f8f9fa;
    border-radius: 16rpx;
    padding: 20rpx 10rpx;
    text-align: center;
    position: relative;
    transition: all 0.3s ease;

    &.completed {
        background: linear-gradient(135deg, #4caf50, #8bc34a);
        color: #fff;

        .day-banner {
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
        }
    }

    &.current {
        background: linear-gradient(135deg, #ff9800, #ffc107);
        color: #fff;
        transform: scale(1.05);
        box-shadow: 0 8rpx 20rpx rgba(255, 152, 0, 0.3);

        .day-banner {
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
        }
    }

    .day-banner {
        background: #4caf50;
        color: #fff;
        font-size: 20rpx;
        padding: 8rpx 12rpx;
        border-radius: 20rpx;
        margin-bottom: 20rpx;
        display: inline-block;
    }

    .reward-icon {
        margin-bottom: 15rpx;

        .coin-icon,
        .money-bag {
            font-size: 40rpx;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .money-bag {
            position: relative;

            .bag-icon {
                font-size: 50rpx;
                animation: bounce 2s infinite;
            }
        }
    }

    .reward-points {
        font-size: 24rpx;
        font-weight: 600;
    }
}

// 签到按钮区域
.signin-btn-container {
    text-align: center;

    .signin-btn {
        width: 100%;
        height: 88rpx;
        background: linear-gradient(135deg, #4caf50, #8bc34a);
        color: #fff;
        border: none;
        border-radius: 44rpx;
        font-size: 32rpx;
        font-weight: 600;
        margin-bottom: 30rpx;
        box-shadow: 0 8rpx 20rpx rgba(76, 175, 80, 0.3);
        transition: all 0.3s ease;

        &.disabled {
            background: #ccc;
            box-shadow: none;
        }

        &:active:not(.disabled) {
            transform: translateY(2rpx);
            box-shadow: 0 4rpx 10rpx rgba(76, 175, 80, 0.3);
        }
    }

    .signin-counter {
        color: #606060;
        font-size: 28rpx;
    }
}

// 底部装饰
.bottom-decoration {
    height: 200rpx;
    background: linear-gradient(180deg, #ffb74d 0%, #fff176 100%);
    margin-top: 40rpx;
}

// 动画效果
@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10rpx);
    }
    60% {
        transform: translateY(-5rpx);
    }
}

// 响应式调整
@media screen and (max-width: 750rpx) {
    .rewards-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 600rpx) {
    .rewards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
