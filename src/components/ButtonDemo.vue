<template>
  <div>
    <h1>Button 按钮</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
  <jump 
    :before="before"
    :beforename="beforename" 
    :nextname="nextname"
    :next="next" />
</template> 

<script lang="ts">
import Button from '../lib/Button.vue'
import Demo from '../components/Demo.vue'
import jump from '../components/jump.vue'
import Button1Demo from '../components/Button1.demo.vue'
import Button2Demo from '../components/Button2.demo.vue'
import Button3Demo from '../components/Button3.demo.vue'
import Button4Demo from '../components/Button4.demo.vue'
import Button5Demo from '../components/Button5.demo.vue'
export default {
  components:{Demo,jump},
  setup() {
        const before = 'switch'
        const next = '/doc/dialog'
        const beforename = 'Switch'
        const nextname = 'Dialog'    
    return {      
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,before,next,beforename,nextname
    }
  }
}
</script>