<template>
    <view class="content">
        <xr-ar-tracker
            :width="renderWidth"
            :height="renderHeight"
            :style="
                'width:' + screenWidth + 'px;height:' + screenHeight + 'px;'
            "
        >
        </xr-ar-tracker>
    </view>
</template>

<script>
import {
    screenWidth,
    screenHeight,
    renderWidth,
    renderHeight,
    windowWidth,
    windowHeight,
} from '@/utils/comm'

export default {
    data() {
        return {
            width: windowWidth,
            height: windowHeight,
            renderWidth: renderWidth,
            renderHeight: renderHeight,
            screenWidth: screenWidth,
            screenHeight: screenHeight,
        }
    },
    onLoad() {
        console.log('windowWidth', windowWidth)
        console.log('windowHeight', windowHeight)
        console.log('renderWidth', renderWidth)
        console.log('renderHeight', renderHeight)
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
