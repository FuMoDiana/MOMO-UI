<template>
    <div>
        <h1>Switch 开关</h1>
        <p>开关选择器</p>
        <Switch  v-model:value="bool" />
    </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

export default {
    components:{Switch},
    setup() {
        const bool = ref(false);
        return {bool}
    }
}
</script>
