<template>
    <u-tabbar
        :border="false"
        :value="user.tabIndex"
        @change="change"
        :fixed="true"
        :placeholder="true"
        :safeAreaInsetBottom="true"
        activeColor="black"
        inactiveColor="#BFBFBF"
    >
        <u-tabbar-item text="首页">
            <template #active-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://carrier-mljr-test.oss-cn-beijing.aliyuncs.com/hado_static/statics/homeSel.png"
                ></image>
            </template>
            <template #inactive-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://carrier-mljr-test.oss-cn-beijing.aliyuncs.com/hado_static/statics/homeUn.png"
                ></image>
            </template>
        </u-tabbar-item>
        <u-tabbar-item text="盒柜">
            <template #active-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/15matchUp.png"
                ></image>
            </template>
            <template #inactive-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/15match.png"
                ></image>
            </template>
        </u-tabbar-item>
        <view class="tabars" @click="tabMiddle">
            <view class="item">
                <image
                    class="img"
                    src="https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/camera.png"
                ></image>
            </view>
        </view>
        <u-tabbar-item text="图鉴">
            <template #active-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/15clubUp.png"
                ></image>
            </template>
            <template #inactive-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/15club.png"
                ></image>
            </template>
        </u-tabbar-item>
        <u-tabbar-item text="我的">
            <template #active-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://carrier-mljr-test.oss-cn-beijing.aliyuncs.com/hado_static/statics/mySel.png"
                ></image>
            </template>
            <template #inactive-icon>
                <image
                    class="u-page__item__slot-icon"
                    src="https://carrier-mljr-test.oss-cn-beijing.aliyuncs.com/hado_static/statics/myUn.png"
                ></image>
            </template>
        </u-tabbar-item>
    </u-tabbar>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/user'

const user = useUserStore()

// 获取是否有俱乐部信息
const getClubInfo = async () => {
    console.log('获取是否有俱乐部信息')
}

const change = function (index) {
    console.log('调用父组件的tab切换', index)
    user.tabIndex = index
    if (index == 0) {
        uni.switchTab({
            url: '/pages/home/index',
        })
    } else if (index == 1) {
        uni.switchTab({
            url: '/pages/car/index',
        })
    } else if (index == 2) {
        uni.switchTab({
            url: '/pages/imgcard/index',
        })
    } else if (index == 3) {
        uni.switchTab({
            url: '/pages/my/index',
        })
    }
}

// 点击中间凸出来的tab
const tabMiddle = function () {
    console.log('点击中间的tab')
}

onMounted(() => {
    console.log('tabbar组件挂载')
    uni.hideTabBar()
})
</script>

<style lang="scss">
.u-page__item__slot-icon {
    width: 44rpx;
    height: 44rpx;
}

.tabars {
    width: 90rpx;
    height: 70rpx;
    display: flex;
    flex-direction: column;
    align-content: center;
    position: relative;
    bottom: 50rpx;
    border-radius: 50%;
    background-color: #fff;
    // border-top: 3rpx solid #dadbde;
    padding: 20rpx;
    // box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.1);

    .item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        .img {
            width: 80%;
            height: 100%;
        }
    }
}
</style>
