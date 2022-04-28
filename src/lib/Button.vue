<template>
        <button class="Momo-button"
            :class="classes" :disabled="disabled">
            <span v-if="loading" class="Momo-loadingIndicator"></span>
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
        },
        level:{
            type:String,
            default:"normal"
        },
        disabled:{
            type:Boolean,
            default:false,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {theme,size,level} = props;
        const classes =  computed(()=>{
            return{
                [`Momo-theme-${theme}`]:theme,
                [`Momo-size-${size}`]:size,
                [`Momo-level-${level}`]:level,
            }
        })
        return {classes}
    }
}
</script>

<style lang="scss">
$h:32px;
$radius:4px;
$blue:rgba(26,153,204,0.9);
$green:rgb(66,184,131);
$red:red;
$grey:grey;
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
  background: $blue;
  transition: background 250ms;
  box-shadow: 4px 4px 4px -1px rgba(0,0,0,0.2);
  & + &{
      margin-left: 8px;
  }
  &:hover,
  &:focus{
      background-color: $green;
      color: $grey;
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
    color: $blue;
    background: none;
    &:hover,&:focus{
      color: lighten( $green, 10%);
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
      &.Momo-theme-button {
    &.Momo-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.Momo-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.Momo-theme-link {
    &.Momo-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.Momo-theme-text {
    &.Momo-level-main {
      color: $green;
      &:hover,
      &:focus {
        color: rgb(18,186,106);
      }
    }
    &.Momo-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.Momo-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.Momo-theme-link, &.Momo-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .Momo-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: white transparent white transparent;
    border-style: solid;
    border-width: 2px;
    animation: Momo-spin 1s infinite linear;
  }
}
@keyframes Momo-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}


</style>