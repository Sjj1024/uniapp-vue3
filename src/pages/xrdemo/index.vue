<template>
    <xr-ar-tracker
        :width="renderWidth"
        :height="renderHeight"
        :style="'width:' + screenWidth + 'px;height:' + screenHeight + 'px;'"
    >
    </xr-ar-tracker>
</template>

<script setup lang="ts">
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
