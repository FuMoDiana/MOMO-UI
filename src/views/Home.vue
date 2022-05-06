<template>
    <div class="topnavColors">
        <Topnav></Topnav>
        <div class="banner">
            <h1>MOMO-UI</h1>
            <h2>一个UI框架</h2>
            <p class="actions">
                <a href="https://github.com/FuMoDiana/MOMO-UI" target="_blank">Github</a>
                <router-link to="/doc" style="color:rgb(79,192,141);">Start</router-link>
            </p>
        </div>
    </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>组件的源代码简单易读</p>
      </li>
    </ul>
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
      border: 1px solid rgb(79,192,141);
      margin:0 8px;
      background: #fff;
      display: inline-block;
      line-height: 28px;
      border-radius: 20px;
      padding: 8px 24px;
    }
  }
}
.topnavColors {
  background: rgb(189,236,201);
  background: radial-gradient(circle, rgba(189,236,201,1) 0%, rgba(117,212,134,0.9447129193474265) 100%);
  clip-path: ellipse(85% 100% at 50% 0%);
}

.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
</style>