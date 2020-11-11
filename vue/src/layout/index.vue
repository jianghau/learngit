<template>
    <div>
        <el-container>
            <el-aside> 
                <Nav :sendData="toggernav"/>
                </el-aside>
            <el-container>
                <el-header><Header @showCityName="updateCity" :sendData="toggernav"/></el-header>
                <el-main> 
                     <!-- <Sidenav/> -->
                     <Comment />
                </el-main>
            </el-container>
       </el-container>
    </div>
</template>
<script>
import Sidenav from "./comment/sidenav.vue"
import Nav from "./comment/nav"
import Header from "./comment/header"
    import Comment from "./comment/common"
export default {
         data() {
        return {
            toggernav: false
        }
    },
    components:{
        Nav,
        Header,
        Comment,
        Sidenav
    },
    methods:{
         updateCity(data) {
            this.toggernav = data; //改变了父组件的值
        }
    }
}
</script>
<style lang="scss">
    .el-aside{
        width: auto!important;
        height: 100vh;
        background: #3e77e9;
        .logo{
            max-width: 200px;
            height: 100px;
            box-sizing: border-box;
            padding: 20px 5px;
            line-height: 60px;
            img{
                 max-width: 100%;
                display:inline-block;
                vertical-align:middle;
            }
        }
    }
    .el-header{
        padding: 0!important;
        height: 100px!important;
    }
    .el-container{
        height: 100vh;
        overflow: hidden;
    }
    .el-main{
        // overflow: hidden;
    }
    .nav .el-menu--collapse .el-submenu .el-submenu__title span{
    display :none;
  }
</style>
