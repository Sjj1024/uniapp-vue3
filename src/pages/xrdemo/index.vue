<template>
    <view class="content">
        <xr-gltf
            :width="renderWidth"
            :height="renderHeight"
            :style="'width:' + width + 'px;height:' + height + 'px;'"
        >
        </xr-gltf>
    </view>
</template>

<script>
export default {
    data() {
        return {
            width: 300,
            height: 300,
            renderWidth: 300,
            renderHeight: 300,
        }
    },
    onLoad() {
        this.width = uni.getWindowInfo().windowWidth
        this.height = uni.getWindowInfo().windowHeight
        const dpi = uni.getWindowInfo().pixelRatio
        this.renderWidth = this.width * dpi
        this.renderHeight = this.height * dpi
    },
    methods: {},
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
