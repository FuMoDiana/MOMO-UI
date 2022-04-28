<template>
  <h1>示例一</h1>
  <div>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h1>示例二</h1>

  <div>
    <Button size="small">Small</Button>
    <Button>Normal</Button>
    <Button size="big">Big</Button>
  </div>

  <div>
    <Button theme="link" size="small">Small</Button>
    <Button theme="link" >Normal</Button>
    <Button theme="link" size="big">Big</Button>
  </div>

  <div>
    <Button theme="text" size="small">Small</Button>
    <Button theme="text">Normal</Button>
    <Button theme="text" size="big">Big</Button>
  </div>
  <h1>示例三</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h1>示例四</h1>
  <div>
    <div>
      <Button level="main">Main</Button>
      <Button>Normal</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="link" level="main">MainLink</Button>
      <Button theme="link">NormalLink</Button>
      <Button theme="link" level="danger">DangerLink</Button>
    </div>
    <div>
      <Button theme="text" level="main">MainText</Button>
      <Button theme="text">NormalText</Button>
      <Button theme="text" level="danger">DangerText</Button>
    </div>
  </div>
   <h1>示例五</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template> 

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{Button},
  setup() {
    const onClick = ()=>{
    }
    return {onClick}
  }
}
</script>