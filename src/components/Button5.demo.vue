<demo>
显示loading
</demo>
<template>
  <div>
    <Button loading>Loading</Button>
    <Button>Download</Button>
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
