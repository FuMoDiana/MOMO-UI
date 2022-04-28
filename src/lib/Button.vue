<template>
        <button class="Momo-button"
            :class="classes">
            <slot />
        </button>
</template>

<script lang="ts">
import {computed} from 'vue'
export default {
    props:{
        theme:{
            type:String,
            default:'button'
        },
        size:{
            type:String,
            default:"normal",
        }
    },
    setup(props) {
        const {theme,size} = props;
        const classes =  computed(()=>{
            return{
                [`Momo-theme-${theme}`]:theme,
                [`Momo-size-${size}`]:size,
            }
        })
        return {classes}
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
    &.Momo-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: rgba(26,153,204,0.9);
    background: none;
    &:hover,&:focus{
      color: lighten( rgb(66,184,131), 10%);
    }
  }
  &.Momo-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: none;
    &:hover,&:focus{
      background: darken(white, 5%);;
    }
  }
  &.Momo-theme-button{
      &.Momo-size-big{
          font-size: 24px;
          height: 48px;
          padding: 0 16px
      }
      &.Momo-size-small{
          font-size: 12px;
          height: 20px;
          padding: 0 4px;
    }
  }
}

</style>