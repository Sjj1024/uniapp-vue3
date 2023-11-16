<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  uni.hideTabBar()
});
onShow(() => {
  console.log("App Show");
  uni.hideTabBar()
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import "uview-plus/index.scss";
</style>
