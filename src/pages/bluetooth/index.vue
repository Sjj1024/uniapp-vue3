<template>
    <div>
        <div>蓝牙列表</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 搜索到的蓝牙
const blueList = ref([])

const discover = () => {
    console.log('discover')
    wx.startBluetoothDevicesDiscovery({
        success: () => {
            console.log('blue success')
        },
        fail: () => {
            console.log('blue fail')
        },
    })
}

onMounted(() => {
    discover()
})
</script>

<style scoped lang="scss"></style>
