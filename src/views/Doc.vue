<template>
    <div class="layout">
        <topnav toggleMenuButtonVisible class="nav"></topnav>
        <div class="content">
            <aside v-if="menuVisible">
              <h2>文档</h2>
              <ol>
                <li>
                  <router-link to="/doc/intro">介绍</router-link>
                </li>
                <li>
                  <router-link to="/doc/install">安装</router-link>
                </li>
                <li>
                  <router-link to="/doc/get-started">开始使用</router-link>
                </li>
              </ol>
              <h2>组件列表</h2>
              <ol>
                <li>
                    <router-link to="/doc/switch">Switch 开关</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 按钮</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 弹出框</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 标签</router-link>
                </li>
              </ol>
            </aside>
            <main>
              <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import { inject, Ref } from 'vue';

export default {
    components:{
        Topnav
    },
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible')//get
      return {menuVisible}
    }
}
</script>

<style lang="scss" scoped>

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 1100px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: rgb(230,255,236);
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 1;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      padding: 4px 0;
      > a {
        display: block;
        padding: 4px 16px;
      }
      >a:link{text-decoration:none; }  /* 指正常的未被访问过的链接*/
      > .router-link-active{
        background: #fff;
      }
    }
  }
}
  main {
    overflow: auto;
  }

</style>