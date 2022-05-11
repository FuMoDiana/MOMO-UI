<template>
    <div class="jump">
      <div class="before">
        <p>上一节：<router-link :to="before" >{{beforename}}</router-link></p>
      </div>
      <div class="next">
        <p>下一节：<router-link :to="next" >{{nextname}}</router-link></p>
      </div>
    </div>
</template>

<script lang="ts">
export default {
    props:{
        before:String,
        beforename:String,
        nextname:String,
        next:String
    },
    setup(props) {
        
        return{props}
    }
}
</script>

<style lang="scss">
  .jump{
        display: flex;
        justify-content: space-between;
    .before {
        float: left;
    }
    .next {
        float: right;
    }
        a{
            color: rgb(9,155,235);
        }
    }
</style>