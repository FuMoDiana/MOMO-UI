<template>
    <div>
        <h1>Switch 开关</h1>
        <Demo :component="Switch1Demo" />
        <Demo :component="Switch2Demo" />
    </div>
    <div class="jump">
      <div class="before">
        <p>上一节：<router-link to="/doc/get-started" >Button</router-link></p>
      </div>
      <div class="next">
        <p>下一节：<router-link to="/doc/button" >Button</router-link></p>
      </div>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from '../components/Demo.vue'



export default {
    components:{Button,Demo},
    setup() {
        const bool = ref(false);
        return {bool,Switch1Demo,Switch2Demo}
    }
}
</script>

<style lang="scss">
  .jump{
        display: flex;
        justify-content: space-between;
    .before {
        float: left;
    }
    .next {
        float: right;
    }
        a{
            color: rgb(9,155,235);
        }
    }
</style>