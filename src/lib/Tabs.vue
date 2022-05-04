<template>
<div class="Momo-tabs">
  <div class="Momo-tabs-nav">
    <div class="Momo-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)" :class="{selected: t=== selected}" :key="index">{{t}}</div>
  </div>
  <div class="Momo-tabs-content">
    <component class="Momo-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" :class="{selected:c.props.title === selected}"/>
</div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed} from 'vue'
export default {
props:{
    //通过title来切换
    selected:{
        type:String
    }
},
setup(props,context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
        if(tag.type !== Tab){
            throw new Error('Tabs子标签必须是Tab');
        }
    });

    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    const titles = defaults.map(tag=>{
        return tag.props.title//映射出组件的名字数组
    });

    return {
        defaults,
        titles,
        select
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.Momo-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    
    &-item {
        display: none;
        &.selected {
            display: block;
        }
    }
  }
}
    
</style>