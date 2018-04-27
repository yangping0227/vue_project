<template>
    <div class="nav">
      <router-link to="/home"><i class="iconfont icon-shouyedianpujishishangcheng"></i><span>home</span></router-link>
      <router-link to="/list"><i class="iconfont icon-liebiao"></i><span>list</span></router-link>
      <router-link to="/add"><i class="iconfont icon-new"></i><span>add</span></router-link>
      <router-link to="/collect"><i class="iconfont icon-shoucang"></i><span>collect</span></router-link>
    </div>
</template>
<style scoped lang="less">
  .nav{
      position:fixed;
      left:0px;
      bottom:0px;
      display: flex;
      width:100%;
      height:50px;
      background:#fff;
      border-top:1px solid #ccc;
      a{

          display: flex;
          flex-direction:column;
          flex:1;
          justify-content:center;
          align-items:center;

      }
      a.router-link-active{
          color:#0c5460;
      }
  }
</style>
