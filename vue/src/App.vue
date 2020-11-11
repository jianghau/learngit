<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
  min-width:1200px;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.el-container{
  height: 100vh;
}
.icon_img{
  background: url("../src/assets/ico_img.png") no-repeat center;
  display: inline-block;
  vertical-align:middle;
  margin: -5px 5px 0 0;

}
.el-button--primary:focus, .el-button--primary:hover{
 background: #6f9bf3  !important;
}
.el-button--primary:focus, .el-button--primary{
  background: #3e77e9 !important;
}
.el-pagination{
  text-align: center;
  
}
.el-scrollbar__wrap{
  margin-bottom:-20px !important;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    // border-radius: 50% !important;
    background-color: #ededed !important;
  }
  .el-pagination{
    // .el-pagination__editor.el-input .el-input__inner
     .el-pagination__editor.el-input .el-input__inner{
     height: 24px;
     line-height: 24px;
  }
  }
 
.el-pagination.is-background .el-pager li:not(.disabled).active{ background: #3e77e9 !important; color: #fff !important;}
.el-pagination.is-background .el-pager li:not(.disabled).active:hover{color: #fff !important;}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
   color:#3e77e9 !important;
}
</style>
