<template>
    <div>
      <el-form :model="formdata" ref="formdata" :rules="rules"  label-width="80px" class="formbox"  >
        <div class="tetle"><div class="bt">添加任务</div></div>
        <el-row >
            <el-col :xs="24">
              
              <template v-if="this.$route.query.id">
                 <div class="el-upload-list el-upload-list--picture-card" v-if="showimg">
                   <div class="el-upload-list__item is-ready el-list-enter-to">
                   <img  class="el-upload-list__item-thumbnail"  :src="formdata.litpic" alt="" >
                      <span class="el-upload-list__item-actions">
                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview2()" ><i class="el-icon-zoom-in"></i></span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove2()"><i class="el-icon-delete"></i></span>
                      </span>
                   </div>
                 </div>
              </template>
               <template v-else>
              </template>
                <el-upload
                     action="/api/addtask"
                    list-type="picture-card"
                    :data="formdata"
                    :limit=1
                    ref="upload"
                     :before-upload = "beforeUp"
                    :on-change="handleimg"
                    :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <span class="spantext">添加封面</span>
                        <div slot="file" slot-scope="{file}" >
                         <img  class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <i class="el-icon-zoom-in"></i>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <i class="el-icon-delete"></i>
                        </span>
                      </span>
                    </div>
              </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="formdata.litpic" alt="">
                </el-dialog>
            </el-col>
            <el-col :xs="24" :md="24">
               <el-form-item label="标题" prop="name">
                  <el-input v-model="formdata.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="5">
                <el-form-item label="任务量"  prop="nums">
                    <el-input v-model="formdata.nums" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" class="input"></el-input>
                </el-form-item>
            </el-col>
             <el-col :xs="24" :sm="12" :md="8" :lg="5">
                <el-form-item label="任务单价" prop="taskprice">
                    <el-input v-model="formdata.taskprice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  class="input"></el-input>
                </el-form-item>
            </el-col>
              <el-col :xs="24" :sm="24" :md="5" :lg="4" class="inputck">
                 <el-form-item  prop="type">
                      <el-checkbox :value="formdata.is_pay == 1" v-bind:true-value="formdata.is_pay" v-bind:false-value="formdata.is_pay" @change="checkbox">附加充值任务</el-checkbox>
                  </el-form-item>
            </el-col>
          <el-col :xs="12" :md="3"> </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="5" class="inputlabe">
                  <el-form-item label="充值任务量"  prop="paynums">
                      <el-input  v-model="formdata.paynums" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  class="input"></el-input>
                  </el-form-item>
            </el-col>
             <el-col :xs="24" :sm="12" :md="8" :lg="5"  class="inputlabe">
               <el-form-item label="单个充值金额"  prop="payprice">
                      <el-input v-model="formdata.payprice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  class="input"></el-input>
                  </el-form-item>
            </el-col>
              <el-col :xs="24" :md="24">
                <el-form-item label="下载地址"  prop="downurl">
                    <el-input v-model="formdata.downurl" class="input1"></el-input>
                </el-form-item>
            </el-col>
               <el-col :xs="24" :md="24">
                <el-form-item label="礼包地址" prop="gifturl">
                    <el-input v-model="formdata.gifturl" class="input1"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
           <el-col>
             <el-form-item label="活动时间" required    prop="starttime">
               <template v-if="this.$route.query.id">
                <el-date-picker  v-model="timedata"  :default-value='timedata'  value-format="timestamp" start-placeholder="开始日期" end-placeholder="结束日期"     prop="starttime" @change="changedatetimerange"  type="datetimerange" range-separator="至"   >   </el-date-picker>

               </template>
               <template v-else>
                <el-date-picker  v-model="timedata"    value-format="timestamp" start-placeholder="开始日期" end-placeholder="结束日期"      prop="starttime" @change="changedatetimerange"  type="datetimerange" range-separator="至"   >   </el-date-picker>

               </template>
             </el-form-item>
           </el-col>
        </el-row>
        <div class="tetle pat20"><div class="bt">添加任务说明</div>  <el-button type="primary" @click="addinput">添加</el-button></div>
        <div class="forminput" v-for="(item , index) in formdata.tips" :key="index">
            <el-form-item label="需求说明" >
                <el-input v-model="item.input"  class="input1"></el-input>
            </el-form-item>
        </div>
        <el-form-item class="input11" v-if="this.$route.query.id">
            <el-button type="primary" class="btnsubmit" @click="onSubmit2('formdata')">任务填写完成修改</el-button>
        </el-form-item>
         <el-form-item class="input11" v-else>
            <el-button type="primary" class="btnsubmit" @click="onSubmit('formdata')">任务填写完成发布</el-button>
        </el-form-item>
      </el-form>
       
    </div>
</template>
<script>
export default {
     data() {
      return {
          newAddText:'',
          timedata:[],
          imgReader:'',
          inputlist:[
          ],
          timeDefaultShow:new Date('2022-10-23'),
          showimg:true,
           rules: {
          name: [
            {required: true, message: '请输入标题', trigger: 'blur' }
          ],
          nums: [
            {required: true, message: '请输入请任务量', trigger: 'blur' }
          ],
          taskprice: [
            {  required: true, message: '请输入任务单价', trigger: 'blur' }
          ],
          paynums: [
            {  required: true, message: '请输入充值任务量', trigger: 'blur' }
          ],
          payprice: [
            { required: true, message: '请输入单个充值金额', trigger: 'blur' }
          ],
          starttime: [
            {type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          // endtime: [
          //   {type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }
          // ],
           downurl: [
            { required: true, message: '请输入下载地址', trigger: 'blur' }
          ],
           gifturl: [
            { required: true, message: '请输入礼包地址', trigger: 'blur' }
          ],
        },
          fileLIst: [],
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        check:false,
        formdata:{
          arckey:'sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y',
          litpic:'', //封面
          name: '',  //标题
          nums: "",   //任务量
          taskprice:"", //任务单价
          is_pay:'', //附加充值任务(1是0否)
          paynums:"", //充值任务量,
          payprice:"", //单个充值金额,
          starttime:"", //开始时间,时间戳,
          endtime: "", //结束时间,时间戳,
          downurl: "", //下载地址,
          gifturl: "", //礼包地址,
           tips: [
              {"input":""},
              {"input":""},
              {"input":""},
           ],//任务说明(需求说明都在tips内),
        },
        pages:{
              arckey:'sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y', 
              id:''          
        }
      };
    },
     activated:function(){
       if(this.$route.query.id){
         this.getinput(this.$route.query.id)
       }else{
        this.$refs.formdata.resetFields();
          this.$refs.upload.clearFiles();
          var obj =Object.assign(this.$data.formdata, this.$options.data().formdata)
          this.timedata=[]
       }
   },
    methods: {
      // 点击附加充值任务
      checkbox(){
         this.formdata.is_pay==1? this.formdata.is_pay=0:this.formdata.is_pay=1;
      },
      // 点击时间
       changedatetimerange(){
          if(this.timedata==null){
             this.formdata.starttime=this.timedata
               return false
           }else{
              this.formdata.starttime= this.timedata[0]   //开始时间
               this.formdata.endtime=this.timedata[1]     //结束时间
           }
       },
      //  点击添加
        addinput(){
          this.formdata.tips.push({
              "input":this.newAddText
            })
        },
        // 点击发布
         onSubmit(formName) {
            if(this.formdata.litpic==''){
                this.$message.error('请上传封面');
                return false
              }
             this.$refs[formName].validate((valid) => {
                if (valid) {
                  var that=this;
                //  that.$refs.upload.submit();
                this.$post("/api/addtask",this.formdata).then(res =>{
                    console.log(res)
                    if(res.code==1){
                       this.$router.push({ path: "/" });
                    } if(res.code==0){
                      this.$message.error('发布失败');
                    }
                }).catch(error =>{
                  this.$message.error('发布失败');
                })
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
      },
          // 点击修改后发布
         onSubmit2(formName) {
            if(this.formdata.litpic==''){
                this.$message.error('请上传封面');
                return false
              }
             this.$refs[formName].validate((valid) => {
                if (valid) {
                  var that=this;
                //  that.$refs.upload.submit();
                const returnedTarget = Object.assign(this.formdata, this.pages);
                this.$post("/api/updatetask",this.formdata).then(res =>{
                    console.log(res)
                    if(res.code==1){
                       this.$router.push({ path: "/" });
                    } if(res.code==0){
                      this.$message.error('发布失败');
                    }
                }).catch(error =>{
                  this.$message.error('发布失败');
                })
                } else {
                  return false;
                }
              });
      },
      // 点击上传封面前事件
      beforeUp(file){
        var formData = new FormData();
        formData.append('file',file);
        this.$http.post('/picture',formData)
      },
        // 删除上传的封面
      handleRemove(file) {
        this.$refs.upload.clearFiles();
         this.$set(this.formdata,'litpic','')// 能设置成功
        console.log(file,this.formdata.litpic);
      },
       handleRemove2() {
         this.$set(this.formdata,'litpic','')// 能设置成功
         this.$refs.upload.clearFiles();
        this.showimg=false

      },
        // 赋值上传的封面
      handleimg(file){
        let reader=new FileReader();
        let imgReader='';
        let that=this;
        var formData = new FormData();
        formData.append('file',file.raw);
        console.log(formData)
        reader.readAsDataURL(file.raw);
        reader.onload=function(){
          imgReader=reader.result;
          that.formdata.litpic=imgReader
        }
     },
    //  放大显示上传的文件
    handlePictureCardPreview(file) {
        this.formdata.litpic= file.url;
        this.dialogVisible = true;
      },
       //  放大显示上传的文件
    handlePictureCardPreview2() {
        this.dialogVisible = true;
      },
         // 修改返回的
    getinput(index_){
    var that=this;
    this.pages.id=index_
           this.$post("/api/modifytask",this.pages).then(res =>{
                 if(res.code==1){
                   this.formdata=res.data;
                   that.timedata=[]
                  that.timedata.push(this.formdata.starttime)
                  that.timedata.push(this.formdata.endtime)
                 }
           }).catch(error =>{
           })
    },
    },
 
}
</script>
<style lang="scss">
.pat20{
        padding-top: 20px;
    }
      .el-button--primary{
          background: #6196ff;
          border-color: #6196ff;
          &:hover{
                background: #6196ff;
          border-color: #6196ff;
          }
       }
.formbox{
    max-width: 1040px;
    overflow: hidden;
    padding: 0 20px;
    .el-upload-list--picture-card{
      position: absolute;
      z-index: 1;
    }
    .imgbox_{
      width: 100%;
      height: 100%;
       position: absolute;
      z-index: 111;
      top:0px;
      left: 0;
      background: #fff;
      img{
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    }
    .spantext{
      line-height: 20px;
    display: block;
    height: 20px;
    margin: -60px;
    font-size: 14px;
    color: #8c939d;
    }
    .inputck{
      .el-form-item__content{margin: 0px 20px !important;}
    }
    .inputlabe{
       .el-form-item__label{
             width : 110px !important;
            }
            .el-form-item__content{
              margin-left: 110px !important;
            }
    }
    .input1{
        max-width: 70%;
    }
     .input11{
        max-width: 72%;
    }
    .btnsubmit{
        float: right;
    }
    .line{
        text-align: center;
        font-size: 20px;
    }
    .elform2{
        .el-input{
            width: 130px;

        }
        .el-form-item:nth-child(1){
            .el-form-item__label{
                width: 80px;
            }
        }
    }
    
}
   .tetle{
       display: block;
       width: 72%;
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
   .el-upload--picture-card{
       position: relative;
       margin: 0 0 20px 0;
       .bt{
           display: block;
            height: 20px;
            line-height: 20px;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            top: 40px;
            margin: auto;
            font-size: 14px;
            color: #8c939d;
       }
   }
   .el-upload-list--picture-card .el-upload-list__item{
       img{
           position: absolute;
           max-width: 100%;
           max-height: 100%;
           object-fit: cover;
           width: auto;
           height: auto;
           top:0;
           bottom: 0%;
           right: 0;
           left: 0;
           margin: auto;
       }
   }
</style>