<template>
        <button class="Momo-button"
            :class="`Momo-theme-${theme}`">
            <slot />
        </button>
</template>

<script lang="ts">
export default {
    props:{
        theme:{
            type:String,
            default:'button'
        }
    }
}
</script>

<style lang="scss">
$h:32px;
$radius:4px;
.Momo-button {
  box-sizing: border-box;
  height: $h;
  display: inline-flex;
  cursor: pointer;
  padding:0 12px;
  border: none;
  justify-content:center;
  align-items: center;
  white-space: nowrap;
  border-radius: 9px;
  font: normal 16px/normal "Times New Roman", Times, serif;
  color: rgba(255,255,255,0.9);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: rgba(26,153,204,0.9);
  box-shadow: 4px 4px 4px -1px rgba(0,0,0,0.2);
  & + &{
      margin-left: 8px;
  }
  &:hover,
  &:focus{
      background-color: rgb(153,221,153);
      color: gray;
  }
  &:focus{
      outline: none;
  }
  &::-moz-focus-inner{
      border: 0;
  }
}

</style>