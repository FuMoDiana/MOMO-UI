<template>
  <div>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template> 

<script lang="ts">
import Button from '../lib/Button.vue'
import Demo from '../components/Demo.vue'
import Button1Demo from '../components/Button1.demo.vue'
import Button2Demo from '../components/Button2.demo.vue'
import Button3Demo from '../components/Button3.demo.vue'
import Button4Demo from '../components/Button4.demo.vue'
import Button5Demo from '../components/Button5.demo.vue'
export default {
  components:{Demo},
  setup() {
    
    return {      
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    }
  }
}
</script>