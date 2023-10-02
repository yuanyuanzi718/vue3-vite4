<template>
  <div class="div">
    <el-button type="primary" :icon="Edit" circle>我是 ElButton</el-button>
    <svg-icon name="xxx"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.div {
  border: 1px solid #ccc;
}
</style>
