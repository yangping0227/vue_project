<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
  import tab from "./base/tab"

export default {
  name: 'App',
  components:{
      tab

  }
}
</script>

<style>
*{margin:0px;padding:0px;}
  ul,li{list-style:none;}
  a{text-decoration:none;color:#afddee}
  input,button{-webkit-appearance: none;}
.content{padding-top:50px;}
</style>
