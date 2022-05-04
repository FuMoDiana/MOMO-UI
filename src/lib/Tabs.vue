<template>
    <div>
        <div v-for="(tag,index) in titles" :key="index">{{tag}}</div>
        <component v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
setup(props,context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
        if(tag.type !== Tab){
            throw new Error('Tabs子标签必须是Tab');
        }
    });
    const titles = defaults.map(tag=>{
        return tag.props.title//映射出组件的名字数组
    });

    return {
        defaults,
        titles
    }
  }
}
</script>