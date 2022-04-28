<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header></header>
        <main>
            <p>mainmainmain</p>
            <p>mainmainmain</p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components:{Button}
}
</script>

<style lang="scss">
    footer{
        > Button{
            background: white;
           
        }
    }
</style>