<template>
    <div>
        <h1>Switch 开关</h1>
        <Demo :component="Switch1Demo" />
        <Demo :component="Switch2Demo" />
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
