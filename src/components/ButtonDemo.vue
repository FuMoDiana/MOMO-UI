<template>
  <div>
  Button 示例
  </div>
  <h1>示例1</h1>
  <div>
    <Button>Hello</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="small">Small</Button>
    <Button>Normal</Button>
    <Button size="big">Big</Button>
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