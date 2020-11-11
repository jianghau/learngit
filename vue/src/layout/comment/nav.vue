<template>
   <div class="nav">
     <div class="logo"><img src="../../assets/logo.png" alt=""></div>
     <div class="navbox">
        <el-row class="tac">
            <el-col>
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#3e77e9"
                text-color="#fff"
                active-text-color="#fff"
                router
                unique-opened
                :collapse="sendData"
            >
            <div v-for="item in routes" :key="item.name" >
                <div v-if="!item.hidden">
                    <el-submenu :index="item.path" v-if="item.children.length > 1">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <el-menu-item-group v-for="val in item.children" :key="val.name">
                        <el-menu-item :index="val.path" v-if="!val.children">{{
                        val.meta.title
                        }}</el-menu-item>
                    </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item :index="item.children[0].path" v-else>
                    <i :class="item.children[0].meta.icon"></i>
                    <span slot="title">{{ item.children[0].meta.title }}</span>
                    </el-menu-item>
                </div>
            </div>
            </el-menu>
            </el-col>
        </el-row>
     </div>
    </div>
</template>
<script>
export default {
    data(){
       return{

       } 
    },
    props:["sendData"],
    computed:{
        routes(){
            return  this.$router.options.routes;
        }
    },
    methods: {
        
   }

}
</script>
<style lang="scss">
.nav{
    height:100vh;
   .el-scrollbar__wrap {
       overflow-x: hidden
   }
   .navbox{
       height: calc(100vh - 100px);
   }
   .el-menu{
     border:none;
   }
   .el-menu-item{
       box-sizing: border-box;
       border-bottom: 1px solid #6196ff;
       border-left: 2px solid transparent;
       position: relative;
     &::after{
         content: '';
         display:block;
         position: absolute;
         background: url("../../assets/ico_img.png") no-repeat center;
         height: 9px;
         width: 5px;
         background-position: 0 0;
         right: 20px;
         top: 25px;
     }
     i{
       color: #fff;
   }
   } 
    .el-menu-vertical-demo{
    // min-height: 100vh;

    }
    .el-menu-item.is-active{
        background: #1951c0!important;
        border-bottom-color:#1951c0 ;
       border-left: 2px solid #f0412a;

    }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>