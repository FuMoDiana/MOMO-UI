<template>
  <h1>Tabs 导航栏</h1>
  <Demo :component="Tabs1Demo" />
  <jump 
    :before="before"
    :beforename="beforename" 
    :nextname="nextname"
    :next="next" />
</template> 

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import jump from '../components/jump.vue'
export default {
  components:{
    Tabs1Demo,Demo,jump
  },
  setup() {
        const before = '/doc/dialog'
        const next = '/doc/intro'
        const beforename = 'Dialog'
        const nextname = '返回介绍页面'    
    return{Tabs1Demo,before,next,beforename,nextname}
  }
}
</script>