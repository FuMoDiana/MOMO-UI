<template>
    <div>
        <h1>Switch 开关</h1>
        <Demo :component="Switch1Demo" />
        <Demo :component="Switch2Demo" />
    </div>
    <jump 
    :before="before"
    :beforename="beforename" 
    :nextname="nextname"
    :next="next" />
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from '../components/Demo.vue'
import jump from '../components/jump.vue'


export default {
    components:{Button,Demo,jump},
    setup() {
        const bool = ref(false);
        const before = '/doc/get-started'
        const next = '/doc/button'
        const beforename = '开始'
        const nextname = 'Button'
        return {bool,Switch1Demo,Switch2Demo,before,next,beforename,nextname}
    }
}
</script>
