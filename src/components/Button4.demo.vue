<demo>
支持level
</demo>
<template>
  <div>
    <div>
      <Button level="main">Main</Button>
      <Button>Normal</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="link" level="main">MainLink</Button>
      <Button theme="link">NormalLink</Button>
      <Button theme="link" level="danger">DangerLink</Button>
    </div>
    <div>
      <Button theme="text" level="main">MainText</Button>
      <Button theme="text">NormalText</Button>
      <Button theme="text" level="danger">DangerText</Button>
    </div>
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
