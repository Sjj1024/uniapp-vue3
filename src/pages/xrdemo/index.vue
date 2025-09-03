<template>
    <xr-start
        disable-scroll
        id="main-frame"
        :width="renderWidth"
        :height="renderHeight"
        :style="{ width: width + 'px', height: height + 'px' }"
    />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const renderWidth = ref(0)
const renderHeight = ref(0)
const width = ref(0)
const height = ref(0)

onMounted(() => {
    renderWidth.value = uni.getSystemInfoSync().windowWidth
    renderHeight.value = uni.getSystemInfoSync().windowHeight
    width.value = uni.getSystemInfoSync().windowWidth
    height.value = uni.getSystemInfoSync().windowHeight
})
</script>

<style scoped lang="scss"></style>
