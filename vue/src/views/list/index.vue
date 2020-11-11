<template>
 <div>
    <el-row class="row-btn" :gutter="10" >
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
            <el-select v-model="valuename" placeholder="请选择任务">
            <el-option
            v-for="item in databox.taskarray"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            </el-option>
        </el-select>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="3">
            <el-select v-model="valuepay" placeholder="是否付款">
            <el-option
            v-for="item in is_pay"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="3">
            <el-select v-model="valuefinish" placeholder="是否完成">
            <el-option
              v-for="item in is_finish"
            :key="item.value"
            :label="item.label"
            :value="item.value" >
            </el-option>
        </el-select>
        </el-col>
        <el-col :sm="8">
          <el-button type="primary" @click="shaixuan()">筛选</el-button> 
          <el-button type="primary" @click="chongzhi()">重置</el-button>
          </el-col>
    </el-row>
    <el-table :data="datalist" ref="multipleTable" tooltip-effect="dark" type="index" max-height="620" style="width:100%">
      <!-- <el-table-column type="selection" min-width="30"> </el-table-column> -->
      <el-table-column prop="id" label="ID" min-width="50"></el-table-column>
      <el-table-column  prop="username"  label="3dm昵称"   width="120"> </el-table-column>
       <el-table-column prop="starttime" label="任务时间" min-width="190"><template slot-scope="scope">{{scope.row.starttime}} - {{scope.row.endtime}}</template> </el-table-column> 
      <el-table-column prop="mobile"  label="游戏注册手机号"  min-width="120"> </el-table-column>
      <el-table-column  prop="password" label="游戏密码" width="150"></el-table-column>
      <el-table-column prop="pay" label="充值金额" width="100"> </el-table-column>
      <el-table-column prop="nickname" label="游戏昵称"  width="100"></el-table-column>
      <el-table-column prop="server" label="区服" min-width="80"></el-table-column>
      <el-table-column  prop="gettype" label="收款方式"   width="80"></el-table-column>
      <el-table-column class-name="iconbox" label="是否付款" width="80">
           <template slot-scope="scope"> <span :class="'icon_img ' +[scope.row.is_pay==1?'yes':'no']"></span> </template>
      </el-table-column>
      <el-table-column label="是否审核" class-name="iconbox" width="80">
          <template slot-scope="scope"><span :class="'icon_img ' +[scope.row.is_check==1?'yes':'no']"></span></template>
      </el-table-column>
      <el-table-column  prop="checkname" label="审核人"  min-width="90"></el-table-column>
      <el-table-column prop="checked_at" label="审核时间" min-width="110"></el-table-column>
      <el-table-column fixed="right" label="操作"  width="100">
            <template slot-scope="scope">
              <el-button @click="opendeils(scope.row.id)" type="text" size="small">查看</el-button>
            </template>
    </el-table-column>
    </el-table>
   
    <el-pagination  background  layout="prev, pager, next , jumper" hide-on-single-page  @current-change="handleCurrentChange"   :page-size="pages.pagesize" :total="total_"></el-pagination>
 </div>
</template>
<script>
  export default {
    data() {
      return {
          datalist:[],
          databox:'',
          true1:true,
          total_:0,
          pages:{
             page:1,
             taskid:'',
             is_pay:'',
             is_finish:'',
           arckey:'sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y'
          },
        is_pay: [   //是否付款
               {value: '0', label: '否' },
               {value: '1', label: '是' },
            ],
        is_finish: [ //是否完成
            {value: '0', label: '否' },
            {value: '1', label: '是' },
            ],
        valuepay:"",
        valuename:"",
        valuefinish:""
      }
    },
     activated:function(){
         this.pages.taskid=this.$route.query.id
        this.getData() 
     },
    // vue方法
    methods:{
      // open详情；
      opendeils(e){
        var list=this.$route.query.id;
          this.$router.push({name:"detils",query:{"id":e,"list":list}});
      },
      // 筛选
      shaixuan(){
        this.pages.taskid=this.valuename;
        this.pages.is_pay=this.valuepay;
        this.pages.is_finish=this.valuefinish;
         this.getData() 
      },
      // 重置
       chongzhi(){
         this.valuename=''
         this.valuepay=''
         this.valuefinish=''
        this.pages.taskid='';
        this.pages.is_pay='';
        this.pages.is_finish='';
         this.getData() 
      },
    //   添加任务
       openaddtask(){
          this.$router.push({ path: "/addtask" });
      },
       getData(){
           var that=this;
           this.$post("/api/gettasklist",this.pages).then(res =>{
                  console.log(res)
                 if(res.code==1){
                    this.datalist=res.data
                    this.databox=res
                     this.total_=parseInt(res.pages) 
                 }
           }).catch(error =>{
                this.$message.error('数据获取失败');
           })
      },
         // 分页
        // 每页显示的条数
       handleSizeChange(val) {
           // 改变每页显示的条数 
            this.pages.page=val
         //  this.currentPage=1
       },
         // 显示第几页
       handleCurrentChange(val) {
           // 改变默认的页数
           this.pages.page=val
          this. getData()
       },
    }
  }

</script>
<style lang="scss">
.row-btn{
    // padding: 10px 0;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    .el-col{
 padding: 0px 0 10px 0;
    }
}

  .el-table{
    margin: 0 0 20px 0;
    text-align: center;
    th,td{
      text-align: center;
      overflow: hidden;
    }
    .iconbox{
        .cell{
          overflow: visible;
        }
        .icon_img {
           margin: -2px 0 0 0;
        }
         .yes{
          width: 28px;
          height: 28px;
          background-position: -113px 0;
        }
         .no{
          width: 28px;
          height: 28px;
          background-position: -72px 0;
        }
    }
     .cell{
        span{
          color: #3e77e9;
          cursor: pointer;
        }
        
    }
  }
  .el-table thead th{
    background: #f4f4f4;
    font-weight: bold;
    color: #000;
  }
</style>