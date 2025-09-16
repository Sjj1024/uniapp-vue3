<template>
    <view class="page_box">
        <!-- 行内式直接变量小程序不支持，故需要写成动态的变量 -->
        <view
            class="my_tab_title"
            :style="{
                paddingTop: statusBarHeight,
                backgroundColor: bgColor ? bgColor : 'unset',
                backgroundImage: bgImage ? bgImage : '',
            }"
        >
            <!-- 左侧自定义胶囊插槽 -->
            <slot>
                <view
                    class="menu_btn"
                    :style="{
                        position: 'fixed',
                        top: menuTop,
                        left: menuRight,
                        width: menuWidth,
                        height: menuHeight,
                        borderRadius: menuBorderRadius,
                    }"
                >
                    <u-icon
                        @click="goToBack"
                        class="arrowleft"
                        name="arrow-left"
                        color="#000"
                        size="20"
                    ></u-icon>
                    <text class="text_box"></text>
                    <u-icon
                        @click="goToHome"
                        class="home"
                        name="home"
                        color="#000"
                        size="20"
                    ></u-icon>
                </view>
                <!-- 自定义标题 -->
                <text class="title" :style="{ color: titleColor }">
                    {{ title }}
                </text>
                <!-- 标题栏背景色 -->
                <view
                    class="head-bg"
                    :style="{
                        marginTop: statusBarHeight,
                        height: statusBarHeight,
                        backgroundColor: titleBg,
                    }"
                >
                </view>
            </slot>
        </view>
    </view>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    titleColor: {
        type: String,
        default: 'black',
    },
    titleBg: {
        type: String,
        default: '',
    },
    bgColor: {
        type: String,
        default: '',
    },
    bgImage: {
        type: String,
        default: '',
    },
    backFunc: {
        type: Function,
        default: null,
    },
})

const statusBarHeight = uni.getStorageSync('menuInfo').statusBarHeight
//状态栏的高度（可以设置为顶部导航条的padding-top）
const menuWidth = uni.getStorageSync('menuInfo').menuWidth
const menuHeight = uni.getStorageSync('menuInfo').menuHeight
const menuBorderRadius = uni.getStorageSync('menuInfo').menuBorderRadius
const menuRight = uni.getStorageSync('menuInfo').menuRight
const menuTop = uni.getStorageSync('menuInfo').menuTop

const goToBack = () => {
    console.log('返回按钮url')
    // 如果有url，就跳转到指定url
    if (props.backFunc) {
        props.backFunc()
    } else {
        uni.navigateBack({
            delta: 1,
        })
    }
}

console.log('menuTop', menuTop)

const goToHome = () => {
    console.log('返回主页')
    uni.switchTab({
        url: '/pages/home/index',
    })
}
</script>

<style lang="scss" scope>
.page_box {
    z-index: 999;

    .my_tab_title {
        width: 100%;
        height: 44px; //这个是固定的44px（所有小程序顶部高度都是 = 44px + 手机系统状态栏高度）
        line-height: 44px;
        text-align: center;
        position: fixed;
        top: 0;
        z-index: 999;
        font-family: Monospaced Number, Chinese Quote, -apple-system,
            BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,
            Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif !important;
        font-size: 32rpx;
        color: #000;
        font-weight: 500;

        .menu_btn {
            background-color: #ffffff9d; //这个是小程序默认的标题栏背景色
            overflow: hidden;
            // background-color: #0000001f;
            border: 0.5rpx solid #8a8a8a3e;
            z-index: 999;

            // position: fixed;//行内式写了固定定位--目的是去掉下划页面一起滚动问题
            .arrowleft {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-160%, -50%) !important;
                -webkit-transform: translate(-160%, -50%) !important;
            }

            .text_box {
                width: 1rpx;
                height: 20px;
                background-color: #ffffff54;
                position: absolute;
                top: 50%;
                left: 50%;
                color: #000;

                transform: translate(-50%, -50%) !important;
                -webkit-transform: translate(-50%, -50%) !important;
            }

            .home {
                position: absolute;
                top: 50%;
                left: 50%;
                color: #000;
                transform: translate(60%, -50%) !important;
                -webkit-transform: translate(60%, -50%) !important;
            }
        }

        .title {
            // color: black;
            // font-weight: bold;
            font-size: 32rpx;
        }

        .head-bg {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 100;
            // background-color: #0000001f;
        }
    }
}
</style>
