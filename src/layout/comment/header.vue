<template>
    <div class="header">
       <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <!-- <div class="tools" @click="toggleSideBar">
          <i class="fa el-icon-s-unfold" v-if="toggles"></i>
          <i class="fa el-icon-s-fold" v-else></i>
        </div> -->
        <!-- <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete> -->
        <div class="bt hidden-xs-only">3大妈任务系统</div>
        <div class="userinfo">
          <div class="userinfo-inner">
            <img :src="User.litpic" /> <span> {{User.username }}</span>
            <i class="icon_img"  @click="logout"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>





</template>
<script>
// import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      User: "",
      toggles: this.sendData,
      restaurants: [],
      state: "",
      timeout: null,
      arr:[]
    };
  },
  props: ["sendData"],
  mounted() {
    var user = sessionStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      this.User=user
      console.log(this.User)
    }
    this.restaurants =  this.arrfutiom(this.$router.options.routes)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleSideBar() {
      this.toggles = !this.toggles;
      this.$emit("showCityName", this.toggles);
    },
     arrfutiom(obj){
       var thas=this
       for(var i=0;i<=obj.length-1; i++){
           if(!obj[i].hidden){
             if(obj[i].children){
             this.arr.push(obj[i].children)
             }
           }
       }
       function flatten(arr) { return [].concat( ...arr.map(x => Array.isArray(x) ? flatten(x) : x) ) }
       this.arr=flatten(this.arr)
       return this.arr
     },
    logout() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {});
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
        console.log(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    }
  }
};
</script>
<style scoped lang="scss">

.header{
    line-height: 100px;
// background: #3e77e9;
color: #000;
height: 100px;
padding: 0 20px;
.el_menu{
    float: left;
}
.tools{
    float: left;
    font-size: 25px;
    margin: 0 10px;
    cursor: pointer;

}
.bt{
  float: left;
  font-size: 24px;
  // font-weight: bold;
  color: #6c6c6c;
}
.userinfo {
  text-align :right;
  float :left;
  color: #000;
  padding: 0 20px;
  cursor :pointer;
  span{
    color: #000;
     font-size: 16px;

  }
  i{
    display: inline-block;
    width: 56px;
    height: 23px;
    background-position:-158px 0;
    margin:-2px 10px 0 15px;
  }
  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin: -2px 5px 0 0;
  }
}
}

</style>