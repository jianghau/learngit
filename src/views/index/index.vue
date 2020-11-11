<template>
 <div>
   <el-row type="flex" class="rowbg" justify="end">
     <el-col >
        <div class="tabbox">
          <div class="tab on"><i class="icon_img icon1"></i>已完成<span>{{succenumber}}</span></div>
          <div class="tab"><i class="icon_img icon2"></i>未完成<span>{{notfinished}}</span></div>
        </div>
     </el-col>
       <el-col :sm="3" :lg="3"><el-button type="primary" @click="openaddtask">添加任务</el-button></el-col>
   </el-row>
    <el-table :data="datalist" ref="multipleTable" tooltip-effect="dark" max-height="620" type="index" style="width: 100%"> 
      <!-- <el-table-column type="selection" width="50"> </el-table-column>  -->
      <el-table-column prop="id" label="ID" min-width="80"> </el-table-column> 
      <el-table-column prop="name" label="名称" min-width="150"> </el-table-column> 
      <el-table-column prop="starttime" label="任务时间" min-width="200"><template slot-scope="scope">{{scope.row.starttime}} - {{scope.row.endtime}}</template> </el-table-column> 
      <el-table-column prop="ling" label="领取人数" min-width="150"> </el-table-column> 
      <el-table-column prop="succ" label="完成人数" min-width="150"> </el-table-column> 
      <el-table-column prop="nickname" label="任务添加人" min-width="150"> </el-table-column> 
      <el-table-column prop="nums" label="任务总数" min-width="120"> </el-table-column> 
      <el-table-column label="操作" min-width="120"> 
            <template slot-scope="scope">
              <span class="a" @click="opendeils(scope.row.id)">查看任务</span>
            </template>
      </el-table-column> 
      <el-table-column prop="created_at" label="添加时间" min-width="120"> </el-table-column> 
       <el-table-column label="删除" min-width="120"> 
            <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-delete" circle  @click="closelist(scope.row)"></el-button>
            </template>
      </el-table-column> 
      <el-table-column label="查看"  fixed="right"  min-width="100"> 
        <template slot-scope="scope">
          <span class="a" @click="openaddtasklist(scope.row.id)">详情</span>
        </template>
     </el-table-column> 
  </el-table>
  <el-pagination background layout="prev, pager, next ,jumper" @current-change="handleCurrentChange" hide-on-single-page   :current-page="pages.page"   :page-size="pages.pagesize" :total="total_"></el-pagination>
 </div>
</template>
<script>
  export default {
    data() {
      return {
          succenumber:"",  //完成的
          notfinished:"",   //未完成
          datalist:[],
          true1:true,
          total_:0,
          pages:{
             page:1,
            //  pagesize:10,
           arckey:'sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y'
          },
      }
    },
  activated:function(){
    this.getData() 
   },
    // vue方法
    methods:{
      // open详情；
      opendeils(id){
        console.log(id)
          this.$router.push({ path: "/list?id="+id });
      },
      // 删除任务大全的单个任务；
      closelist(obj){
        let index_=obj.id;
        let title=obj.name;
       this.$confirm('此操作将永久删除'+title+', 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post("/api/deltask",{
           arckey:'sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y',
           id:index_
        }).then(res =>{
            console.log(res)
            if(res.code==1){
              this.getData() 
                this.$message({ type: 'success', message: '删除成功!' });
            }
           }).catch(error =>{
                this.$message.error('登录失败');
           })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
      },
       openaddtask(){
          this.$router.push({ path: "/addtask" });
      },
      openaddtasklist(id){
         this.$router.push({ path: "/addtask?id="+id });
      },
       getData(){
           var that=this;
           this.$post("/api/getalltask",this.pages).then(res =>{
                  console.log(res)
                 if(res.code==1){
                    this.datalist=res.data;
                    this.succenumber=res.success; //完成的人数
                    this.notfinished=res.notfinished; //未完成
                    if(this.true1){
                      this.total_=parseInt(res.pages) 
                     this.true1=false
                    }
                   
                 }
           }).catch(error =>{
                this.$message.error('登录失败');
           })
      
      },
         // 分页
        // 每页显示的条数
       handleSizeChange(val) {
           this.pages.page=val
       },
         // 显示第几页
       handleCurrentChange(val) {
           // 改变默认的页数
          this.pages.page=val
          console.log( this.pages.page)
          this. getData()
       },
    }
  }

</script>
<style lang="scss">
.rowbg{
.el-button{
   margin: 20px 0 0;
}
}
  .tabbox{
    overflow: hidden;
    padding: 0 0 10px 0;
    .tab{
      width: 180px;
      height: 60px;
      border:3px solid #3e77e9;
      color: #3e77e9;
      line-height: 60px;
      float: left;
      cursor: pointer;
      font-size: 16px;
      padding: 0 10px;
      margin: 0 10px 10px 0;
      span{
        font-size: 32px;
        display: inline-block;
        vertical-align: middle;
        margin: -2px 0 0 5px;

      }
       .icon1{
        width: 16px;
        height: 17px;
        background-position: -14px 0;
      }
          .icon2{
        width: 17px;
        height: 17px;
        background-position: -41px 0;
      }
     
    }
     .on{
        background: #3e77e9;
        color: #fff;
      }
  }
  .el-table{
    margin: 0 0 30px 0;
    text-align: center;
    th,td{
      text-align: center;
      overflow: hidden;
    }
    .a{
      color: #3e77e9;
      cursor: pointer;
    }
  }
  .el-table thead th{
    background: #f4f4f4;
    font-weight: bold;
    color: #000;
  }
</style>