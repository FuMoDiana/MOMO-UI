<template>
  <div>Dialog 示例</div>
  <h1>示例一</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
        <strong>提示</strong>
    </template>
    <template v-slot:content>
    <strong>hi</strong>
    <div>此处为自定义内容</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template> 

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref,h} from 'vue'
import {openDialog} from '../lib/openDialog'
export default {
  components:{Dialog,Button},
  setup() {
    const x = ref(false);
    const toggle = ()=>{
      x.value = !x.value;
    }
    const f1= ()=>{
      return false;
    }
    const f2 = ()=>{

    }
    const showDialog = ()=>{
      openDialog({
        title:h('strong',{},"标题"),
        content:'hello',
        ok(){
          console.log("ok")
        },
        cancel(){
          console.log("cancel")
        },
        closeOnClickOverlay:true,
      })
    }
    return {x,toggle,showDialog}
  }
}
</script>