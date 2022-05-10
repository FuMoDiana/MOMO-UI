<demo>
支持size
</demo>
<template>
  <div>
    <Button size="small">Small</Button>
    <Button>Normal</Button>
    <Button size="big">Big</Button>
  </div>
  <div>
    <Button theme="link" size="small">Small</Button>
    <Button theme="link" >Normal</Button>
    <Button theme="link" size="big">Big</Button>
  </div>

  <div>
    <Button theme="text" size="small">Small</Button>
    <Button theme="text">Normal</Button>
    <Button theme="text" size="big">Big</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{
        Button,
    }
}
</script>