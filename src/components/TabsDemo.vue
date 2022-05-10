<template>
  <h1>Tabs 导航栏</h1>
  <Demo :component="Tabs1Demo" />
</template> 

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
  components:{
    Tabs1Demo,Demo
  },
  setup() {
    return{Tabs1Demo}
  }
}
</script>