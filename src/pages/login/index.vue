<template>
    <div class="loginPage">
        <button
            @getphonenumber="handleLogin"
            class="loginBtn"
            open-type="getPhoneNumber"
        >
            登 陆
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useUserStore from '@/store/user'
import homeApi from '@/apis/home'

const user = useUserStore()

const loginWxapp = async (code: string) => {
    const res: any = await homeApi.loginWxapp({ code })
    console.log('loginWxapp', res)
    user.tabIndex = 0
    if (res.status == 200) {
        uni.switchTab({ url: '/pages/home/index' })
    } else {
        console.log('登录失败')
    }
}

const handleLogin = (info: any) => {
    // uni.switchTab({ url: '/pages/home/index' })
    console.log('handleLogin', info)
    // 如果拒绝就不登录
    if (info.detail.code) {
        uni.login({
            provider: 'weixin',
            success: (res) => {
                console.log('get user phone number', res)
                // loginWxapp(res.code)
                // user.tabIndex = 0
                // uni.switchTab({ url: '/pages/home/index' })
            },
        })
    }
}
</script>

<style scoped lang="scss">
.loginPage {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/login.jpg');
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.loginBtn {
    width: 200rpx;
    height: 80rpx;
    background-color: #ffffffbb;
    color: #000;
    border-radius: 40rpx;
    font-size: 32rpx;
    font-weight: 600;
}

// .loginBtn:hover {
//     background-color: #000;
//     color: #fff;
// }
</style>
