<template>
    <div class="tabbarBox">
        <view
            class="tabbarItem"
            v-for="(item, index) in tabbarList"
            :key="index"
            @click="change(index)"
            :class="{ middleItem: index == 2 }"
        >
            <image
                :src="user.tabIndex == index ? item.activeSrc : item.src"
                class="tabbarImg"
                :class="{ middleImg: index == 2 }"
            ></image>
            <text v-if="index != 2" class="tabbarText">{{ item.text }}</text>
        </view>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/user'

const user = useUserStore()

const tabbarList = [
    {
        src: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home1.png',
        activeSrc: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/home2.png',
        text: '首页',
    },
    {
        src: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/hegui1.png',
        activeSrc: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/hegui2.png',
        text: '盒柜',
    },
    {
        src: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/scanner.png',
        text: '',
    },
    {
        src: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/tujian1.png',
        activeSrc: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/tujian2.png',
        text: '图鉴',
    },
    {
        src: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/my1.png',
        activeSrc: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/my2.png',
        text: '我的',
    },
]

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
    } else if (index == 3) {
        uni.switchTab({
            url: '/pages/imgcard/index',
        })
    } else if (index == 4) {
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

.tabbarBox {
    // background-color: red;
    height: 240rpx;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: -2rpx;
    left: 0;
    right: 0;
    z-index: 999;
    background-image: url('https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/barbg.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;

    .tabbarItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 60rpx;

        .tabbarImg {
            width: 80rpx;
            height: 80rpx;
        }
        .tabbarText {
            font-size: 20rpx;
            color: #fff;
        }
        .middleImg {
            width: 160rpx;
            height: 160rpx;
        }
    }

    .middleItem {
        margin-bottom: 60rpx;
    }
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
