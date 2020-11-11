<template>
  <el-form  :model="loginForm"  :rules="rules2" ref="loginForm"  label-position="left" label-width="0px"   class="demo-ruleForm login-container" >
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">  <el-input type="text"  v-model="loginForm.username" ref="inputname"    placeholder="账号" ></el-input> </el-form-item>
    <el-form-item prop="password"> <el-input  type="password"  v-model="loginForm.password" placeholder="密码" show-password></el-input></el-form-item>
    <el-checkbox v-model="checked" checked class="remember" >记住密码</el-checkbox>
    <el-form-item style="width:100%;"> <el-button type="primary"  style="width:100%;" :loading="logining" @click.native.prevent="handleSubmit2('loginForm')" >登录</el-button > </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      loginForm:{
          username:"",
          password:"",
          arckey:'sh1lpwiVZco7Cfw5lGa1PhdYiXEEvY1Y',
      },
      codeshow:'',
      login:{
        username:"",
        litpic:""
      },
      logining: false,
      rules2: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      },
      checked: true
    };
  },
  mounted(){
    this.$nextTick(()=>{
      this.$refs.inputname.focus();
    })
  },
  created(){
    let that=this;
    document.onkeypress=function(e){
      var keycode=document.keycode ? event.keycode : e.which;
      if(keycode==13){
        console.log(that.loginForm)
        that.handleSubmit2("loginForm");
        return false
      }
    }
  },
  methods: {
    handleSubmit2(formName) {
        var that = this;
         this.$refs[formName].validate((valid) => {
              if (valid) {
                  this.$post('/api/mylogin', this.loginForm).then(res => {
                            console.log(res)
                    if(res.code==1){
                        this.codeshow=0
                        this.login.username=res.username;
                        this.login.litpic=res.litpic;
                        this.$message({ message: '恭喜你，登录成功',type: 'success'});
                        sessionStorage.setItem("user", JSON.stringify(this.login));
                        this.$router.push({ path: "/" });
                    }
                    if(res.code==2){
                        this.$message('账号信息有误');
                    }
                     if(res.code==6){
                        this.$message('账号输入有误');
                    }
                    if(res.code==8){
                        this.$message('密码错误');
                    }
                    }).catch(error => {
                          this.$message.error('登录失败');
                        });
              }else {
                  console.log('error submit!!');
                  return false;
                }
         });
     
    }
  }
};
</script>
<style>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-container .title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login-container .remember {
  margin: 0px 0px 35px 0px;
}
</style>
