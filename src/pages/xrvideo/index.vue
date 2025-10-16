<template>
    <xr-2d-video
        :width="renderWidth"
        :height="renderHeight"
        :style="
            'width:' + (screenWidth + 150) + 'px;height:' + screenHeight + 'px;'
        "
    >
    </xr-2d-video>
</template>

<script setup lang="ts">
// screenWidth + 150 是为了让ios全屏的时候，内容没有拉伸
import {
    screenWidth,
    screenHeight,
    renderWidth,
    renderHeight,
} from '@/utils/comm'
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
