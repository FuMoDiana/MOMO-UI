<template>
  <div>
  Button 示例
  </div>
  <h1>示例1</h1>
  <div>
    <Button>Hello</Button>
    <Button theme="button">Hello</Button>
    <Button theme="link">Hello</Button>
    <Button theme="text">Hello</Button>
  </div>
</template> 

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{Button},
  setup() {
    const onClick = ()=>{
    }
    return {onClick}
  }
}
</script>