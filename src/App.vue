<template>
  <router-view></router-view>
</template>
<script lang="ts">
import {ref,provide} from 'vue'
import {router} from './router';
export default {
  name: 'App',
  setup() {
    //判断屏幕宽度，如果为pc端，menuVisible则默认为true
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 1100 ? false : true);
    provide('menuVisible',menuVisible);//标记为xxx，想使用的话用inject(xxx)就可以引用
    //每次切换路由，菜单自动收回
    router.afterEach(() => {
      if (width <= 1100) {
        menuVisible.value = false;
      }
    });
  }

}
</script>
<style lang="scss" scoped>

</style>