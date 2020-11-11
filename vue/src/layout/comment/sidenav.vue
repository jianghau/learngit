<template>
    <div class="navbar clearfix">
    <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">{{ item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
    data(){
        return{
        levelList: []
        }
    },
      watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
   methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      this.levelList = matched;
    }
  }
}
</script>
<style lang="scss">
.el-breadcrumb{
    height:50px;
    line-height :50px;
}
</style>
