<template>
    <div class="coments">
       <el-scrollbar style="height:100%">
            <transition name="el-fade-in-linear" mode="out-in">
                <keep-alive>
                     <router-view :key="key" />
                </keep-alive>
            </transition>
      </el-scrollbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
     computed: {
        key() {
        return this.$route.path;
        }
  },
    components:{
    }
}
</script>
<style lang="scss">
.coments{
  width: 100%; 
//   height: calc(100% - 50px);
  overflow: hidden;
}
.el-scrollbar{
    overflow-y: auto;
    overflow-x: hidden;
}
</style>