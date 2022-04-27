<template>
  <div>
    <Button  @click="toggle" :class="{checked:value}">
      <span></span>  
    </Button>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  props:{
    value:Boolean
  },
  setup(props,context) {
    const toggle = ()=>{
      context.emit('update:value',!props.value);
  }
    return {toggle}
  }
}
</script>'

<style lang="scss" scoped>
  $h:22px;
  $h2:18px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left  0.25s;
  }

  button.checked {
    background: blue;
  }
  button.checked > span {
    left:24px
  }
</style>