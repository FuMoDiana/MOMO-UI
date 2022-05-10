<demo>
  常规用法
</demo>
<template>
<div>
  <Switch v-model:value="bool" />
</div>
</template>

<script lang="ts">
/**
 * 此处为相对路径，使用时记得更改
 */
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
  components: {Switch},
  setup() {
    const bool = ref(false)
    return {bool}
  }
}
</script>