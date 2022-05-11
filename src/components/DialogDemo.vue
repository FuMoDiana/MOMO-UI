<template>
 <h1>Dialog 弹窗</h1>
 <Demo :component="Dialog1Demo" />
 <Demo :component="Dialog2Demo" />
   <jump 
    :before="before"
    :beforename="beforename" 
    :nextname="nextname"
    :next="next" />
</template> 

<script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import jump from '../components/jump.vue'
export default {
  components:{Dialog1Demo,Dialog2Demo,Demo,jump},
  setup() {
        const before = '/doc/button'
        const next = '/doc/tabs'
        const beforename = 'Button'
        const nextname = 'Tabs'    
    return {Dialog1Demo,Dialog2Demo,before,next,beforename,nextname}
  }
}
</script>