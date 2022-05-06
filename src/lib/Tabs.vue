<template>
<div class="Momo-tabs">
  <div class="Momo-tabs-nav" ref="container">
    <div class="Momo-tabs-nav-item" v-for="(t,index) in titles" 
    @click="select(t)" 
    :class="{selected: t=== selected}" 
    :ref="el=>{ if(el) navItems[index] = el}"
    :key="index">{{t}}</div>
    <div class="Momo-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="Momo-tabs-content">
    <component :is="current" :key="current.props.title"/>
</div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed, ref, onMounted, onUpdated} from 'vue'
export default {
props:{
    //通过title来切换
    selected:{
        type:String
    }
},
setup(props,context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null)
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
        if(tag.type !== Tab){
            throw new Error('Tabs子标签必须是Tab');
        }
    });
    //拿到选中的title
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    //挂载时，将选中导航栏的宽度计算出来，赋值给滑动条
    const x = ()=>{
        const divs = navItems.value;
        const result = divs.filter(div=>div.classList.contains('selected'))[0];
        const {width} = result.getBoundingClientRect();//获取元素宽度
        indicator.value.style.width = width + 'px';
        const {left:left1} = container.value.getBoundingClientRect();
        const {left:left2} = result.getBoundingClientRect();
        //滑动后的位置由两个tab之间的left差值决定
        const left3 = left2 - left1;
        indicator.value.style.left = left3 + 'px';   
       }
    //onMounted只在第一次渲染执行，利用生命周期钩子对视图进行反复render
    onMounted(x);
    onUpdated(x);
    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    const titles = defaults.map(tag=>{
        return tag.props.title//映射出组件的名字数组
    });

    return {
        defaults,
        titles,
        select,
        navItems,
        indicator,
        container,
        current
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
    
</style>