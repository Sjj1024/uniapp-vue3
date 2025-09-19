<template>
    <div class="loading">
        <image
            src="https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/load.gif"
            class="gifImg"
        />
        <!-- <video
            src="https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/bird.mp4"
            class="loading-image"
            autoplay
            loop
        /> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped lang="scss">
.loading {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: pink;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    // animation: loading 8s infinite;

    .gifImg {
        width: 200rpx;
        height: 200rpx;
    }
}

// @keyframes loading {
//     0% {
//         transform: translateX(-200px);
//     }
//     100% {
//         transform: translateX(200px);
//     }
// }
</style>
