<template>
   <div class="detils" >
          <el-row class="textlist">
            <el-col :xs="24" :md="24" > <div class="tetle"><div class="bt">任务后台详情</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="24"><div class="p_text"><span>用户名：</span><div class="p h1">{{formdata.username}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="24" ><div class="p_text"><span>领取任务时间：</span><div class="p">{{formdata.created_at}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="8"><div class="p_text"><span>任务名称：</span><div class="p h2">{{formdata.taskname}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="16"><div class="p_text"><span>账号手机号码：</span><div class="p">{{formdata.mobile}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="8" ><div class="p_text"><span>注册手机号：</span><div class="p">{{formdata.regmobile}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="16" ><div class="p_text"><span>试玩手机型号：</span><div class="p">{{formdata.machine}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="8" ><div class="p_text"><span>游戏密码：</span><div class="p">{{formdata.password}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="8" ><div class="p_text"><span>游戏昵称：</span><div class="p">{{formdata.nickname}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="8" ><div class="p_text"><span>区服名称：</span><div class="p">{{formdata.server}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="8" ><div class="p_text"><span>收款方式：</span><div class="p">{{formdata.type}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="16" ><div class="p_text"><span>收款账号：</span><div class="p">{{formdata.account}}</div></div></el-col>
            <el-col :xs="24" :md="12" :lg="24" ><div class="p_text"><span>充值金额：</span><div class="p">{{formdata.pay}}</div></div></el-col>
        </el-row>
        <el-row class="imgitem">
            <el-col :xs="24" >
              <div class="imgbox">
            
                  <div class="img"><p>未上传截图</p><img :src="formdata.chargepic" alt="" @click="handlePictureCardPreview(formdata.chargepic)"></div>
                  <div class="img"><p>未上传截图</p><img :src="formdata.paypic" alt="" @click="handlePictureCardPreview(formdata.paypic)"></div>
                </div>
                <div class="bt_tishi">游戏充值截图+付款截图</div>
            </el-col>
             <el-col :xs="24" >
              <div class="imgbox">
                  <div class="img"><p>未上传截图</p><img :src="formdata.receivepic" alt="" @click="handlePictureCardPreview(formdata.receivepic)"></div>
                  <div class="img"><p>未上传截图</p><img :src="formdata.consumepic" alt="" @click="handlePictureCardPreview(formdata.consumepic)"></div>
                </div>
                <div class="bt_tishi">激活码领取和消耗截图</div>
            </el-col>
             <el-col :xs="24" :md="12" :lg="12" >
              <div class="imgbox">
                  <div class="img"><p>未上传截图</p><img :src="formdata.installpic" alt="" @click="handlePictureCardPreview(formdata.installpic)"></div>
                  <div class="img"><p>未上传截图</p><img :src="formdata.installpic2" alt="" @click="handlePictureCardPreview(formdata.installpic2)"></div>
                </div>
                <div class="bt_tishi">安装截图</div>
            </el-col>
             <el-col :xs="24" :md="12" :lg="12" >
              <div class="imgbox">
                  <div class="img"><p>未上传截图</p><img :src="formdata.regpic" alt=""  @click="handlePictureCardPreview(formdata.regpic)"></div>
                  <div class="img"><p>未上传截图</p><img :src="formdata.regpic2" alt=""  @click="handlePictureCardPreview(formdata.regpic2)"></div>
                </div>
                <div class="bt_tishi">注册截图</div>
            </el-col>
             <el-col :xs="24" :md="12" :lg="12" >
              <div class="imgbox">
                  <div class="img"><p>未上传截图</p><img :src="formdata.levelpic" alt=""  @click="handlePictureCardPreview(formdata.levelpic)"></div>
                  <div class="img"><p>未上传截图</p><img :src="formdata.levelpic2" alt=""  @click="handlePictureCardPreview(formdata.levelpic2)"></div>
                </div>
                <div class="bt_tishi">游戏等级截图</div>
            </el-col>
             <el-col :xs="24" :md="12" :lg="12" >
              <div class="imgbox">
                  <div class="img"><p>未上传截图</p><img :src="formdata.rolepic" alt=""  @click="handlePictureCardPreview(formdata.rolepic)"></div>
                  <div class="img"><p>未上传截图</p><img :src="formdata.rolepic2" alt=""  @click="handlePictureCardPreview(formdata.rolepic2)"></div>
                </div>
                <div class="bt_tishi">创建角色截图</div>
            </el-col>

        </el-row>
        <el-row>
          <el-col :xs="24"><div class="line"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end" :gutter="20">
          <el-col :xs="12" :md="3"><el-checkbox :value="formdata.is_pay === 1" v-bind:true-value="formdata.is_pay" v-bind:false-value="formdata.is_pay" @change="changeRememberMe1">已付款</el-checkbox> </el-col>
         <el-col :xs="12" :md="5">
            <el-select v-model="value_"  placeholder="请选择" @change="changeselect(value_)"> <el-option  v-for="item in options":key="item.value" :label="item.label"  :value="item.value"></el-option> </el-select>
          </el-col>
          <!-- <el-col :xs="12" :md="3"><el-checkbox :value="formdata.is_check === 1" v-bind:true-value="formdata.is_check" v-bind:false-value="formdata.is_check" @change="changeRememberMe">通过审核</el-checkbox> </el-col> -->
          <!-- <el-col :xs="12" :md="3"><el-checkbox :value="formdata.is_check === -1" v-bind:true-value="formdata.is_check" v-bind:false-value="formdata.is_check" @change="changeRememberMe2">未通过</el-checkbox> </el-col> -->
          <el-col :xs="12" :md="3"><el-button type="primary" @click="checktask(formdata.info_id)">确定</el-button></el-col>
        </el-row>
         <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="imgurl" alt="">
        </el-dialog>
   </div>
</template>
<script>
export default {
    data(){
      return{
           checked1:false,
           checked2:false,
            dialogVisible: false,
            ischeck:"",
            imgurl:'',
           formdata:'',
           form:{
               info_id:"1",
              arckey:'sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y',
           },
              options: [{
                value: '1',
                label: '通过审核'
              }, {
                value: '0',
                label: '未审核'
              }, {
                value: '-1',
                label: '未通过'
              }],
              value_:'',
      }
    },
      activated:function(e){
         this.form.info_id=this.$route.query.id
        this.detilsdata() 
   },
    methods:{
      // 显示是否付款
      changeRememberMe1(){
            this.formdata.is_pay==1? this.formdata.is_pay=0:this.formdata.is_pay=1;
      },
      // 显示是不是审核
       changeRememberMe(){
            this.formdata.is_check==1? this.formdata.is_check=0:this.formdata.is_check=1;
      },
       // 显示是不是通过
       changeRememberMe2(){
            this.formdata.is_check==-1? this.formdata.is_check=0:this.formdata.is_check=1;
      },
      changeselect(value){
        this.formdata.is_check=value;
      },
        //  放大显示上传的文件
    handlePictureCardPreview(url) {
        this.imgurl= url;
        if(url!=='' && url!="https://my.3dmgame.com"){
        this.dialogVisible = true;
        }
       
      },
      // 点击确定
      checktask(e){
          let data_={
             arckey:"sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y",
             is_pay: this.formdata.is_pay,
             is_check:this.formdata.is_check,
             id: this.$route.query.id
          }
          let that=this;
           this.$post("/api/checktask",data_).then(res =>{
                 if(res.code==1){
                   let eid=this.$route.query.list;
                    this.$router.push({path:"/list?id="+eid});
                 }
           }).catch(error =>{
                this.$message.error('登录失败');
           })
      },
      // 获取目录
       detilsdata(){
             this.$post("/api/gettaskinfo",this.form).then(res =>{
                 if(res.code==1){
                    this.formdata=res;
                    this.ischeck=res.is_check
                     this.ischeck==1? this.value_="通过审核" :this.ischeck==0? this.value_="未审核":this.value_="未通过";
                 }
           }).catch(error =>{
                this.$message.error('获取失败');
           })
       }
    }
}
</script>
<style lang="scss">
.detils{
  padding: 0px 20px 20px 20px;
  .textlist{
    max-width: 1100px;
  }
     .tetle{
       display: block;
       height: 40px;
       line-height: 28px;
       padding-bottom: 10px;
       .bt{
           padding-top: 5px;
           float: left;
           font-size: 14px;
           color: #000;
           border-bottom: 2px solid #6196ff;
       }
       .el-button{
           float: right;
       }
     

   }
   .p_text{
     font-size: 14px;
     height: 60px;
     line-height: 60px;
     overflow: hidden;
     width: 100%;
     white-space: nowrap;
     text-overflow: ellipsis;
     span{
       float: left;
       width: 100px;
       color: #868686;
       text-align: right;

     }
     .p{
       color: #000;
       float: left;
       padding: 0 0 0 10px;
       overflow: hidden;
       max-width: 70%;
        white-space: nowrap;
     text-overflow: ellipsis;
     }
     .h1{
       font-size: 24px;

     }
     .h2{
       font-weight: bold;
     }
   } 
 .line{
   border:1px solid #eee;
   margin: 20px 0 40px 0;
 }

}
.imgitem{
  max-width: 700px;
  .imgbox{
     overflow: hidden;
     .img{
       float: left;
       overflow: hidden;
      width: 140px;
     height: 98px;
     border:1px solid #ccc;
     background: #eee;
     position: relative;
     margin: 8px 16px 8px 0;
     p{
       text-align: center;
       line-height: 100px;
       overflow: hidden;
       color: #868686;
       padding: 0;
       margin: 0;
       font-size: 14px;
     }
     img,.el-image{
       width: 100%;
       height: 100%;
       position: absolute;;
       object-fit: cover;
       top:0px;
       left: 0px;
       right: 0px;
       bottom: 0px;
       margin: auto;
     }
     }

   }
   .bt_tishi{
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      width: 100%;
      overflow: hidden;
      color: #868686;
   }
}
.row-bg{
  max-width: 800px;
  height: 40px;
  line-height: 40px;
  // padding: 20px 0;
}
</style>