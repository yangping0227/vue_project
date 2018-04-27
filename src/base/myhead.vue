<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui1" v-if="back" @click="goback"></i>
    </div>
</template>
<script >
  export default {
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped lang="less">
.header{
  position: fixed;
  left:0px;
  top:0px;
  border-bottom:1px solid #ccc;
  height:50px;
  width:100%;
  line-height:50px;
  background: #fafafa;
  text-align:center;
  i{
    position:absolute;
    left:10px;
  }
}
</style>
