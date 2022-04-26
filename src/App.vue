<template>
  <router-view></router-view>
</template>
<script lang="ts">
import {ref,provide} from 'vue'

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false)
    provide('menuVisible',menuVisible)//标记为xxx，想使用的话用inject(xxx)就可以引用
  }

}
</script>
<style lang="scss" scoped>

</style>