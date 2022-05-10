<demo>
常规使用
</demo>
<template>
  <Button @click="toggle">点击弹框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
        <strong>提示</strong>
    </template>
    <template v-slot:content>
    <strong>加粗标题</strong>
    <div>自定义内容</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
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

    return {x,toggle,f1,f2}
  }
}
</script>