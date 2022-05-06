<template>
    <div class="topnav">
            <div class="logo">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Momo"></use>
                <router-link to="/"></router-link>
              </svg>
            </div>
            <ul class="menu">
                <li>
                  <router-link to="/doc">文档</router-link>
                </li>
            </ul>
            <span  class="toggleAside" @click="toggleMenu">
              <svg t="1650937293210" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2037" width="30" height="30"><path d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z" fill="#444444" p-id="2038"></path></svg>
            </span>
        </div>
</template>
<script lang="ts">
import {inject,Ref} from 'vue';

export default {
    setup() {
      let menuVisible = inject<Ref<boolean>>('menuVisible')//get
      const toggleMenu = ()=>{
        menuVisible.value = !menuVisible.value;
      }
      return {toggleMenu};
    }
}
</script>
<style lang="scss" scoped>
  .topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: auto;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
   > .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 1100px) {
    > .menu{display: none;}
    > .logo{margin: 0 auto;}
    > .toggleAside{display: inline-block;}
  }
}
</style>