<template>
    <div class="topnavColors">
        <Topnav></Topnav>
        <div class="banner">
            <h1>MOMO-UI</h1>
            <h2>一个UI框架</h2>
            <p class="actions">
                <a href="https://github.com/FuMoDiana/MOMO-UI" target="_blank">Github</a>
                <router-link to="/doc">Start</router-link>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components:{
        Topnav
    }
}
</script>
<style lang="scss" scoped>

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
.topnavColors {
  background: rgb(189,236,201);
  background: radial-gradient(circle, rgba(189,236,201,1) 0%, rgba(117,212,134,0.9447129193474265) 100%);
}
</style>