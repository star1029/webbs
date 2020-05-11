<template>
  <div class="login">
    <div class="webbs-login">
      <el-form ref="form" :model="form" label-width="60px">
        <p class="webbs-login-title">欢迎来到哦呦论坛</p>
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <button class="webbs-button webbs-login-submit" @click="submit">登录</button>
      <p class="webbs-login-tips">*若没有帐号，登录直接注册</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      form: {
        name: 'admin',
        password: 'admin'
      }
    }
  },
  methods:{
    submit(){
      if(this.form.name == "admin" && this.form.password == "admin"){
        this.$router.push('/');
      }else{
        this.$message({
          message: '用户名或密码错误',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>
  .login{box-sizing: border-box; height: 100%; padding: 15%; background: url(../../assets/back.jpg) no-repeat center center;}
  .webbs-login{margin: 0 auto; padding: 50px 70px; width: 350px; text-align: center; background-color: rgba(205, 201, 201, .7); border-radius: 10px; box-shadow: 0 0 5px 5px rgba(139, 137, 137, .5);}
  .webbs-login-title{padding-bottom: 35px; font-size: 24px; font-weight: 100; letter-spacing: 1px;}
  .webbs-login-submit{padding: 10px 30px; font-size: 16px; letter-spacing: 2px; border: 1px solid var(--border-color); background-color: var(--background-color-main); border-radius: 5px;}
  .webbs-login-tips{padding-top: 20px; color: #EE4000; font-size: 12px; text-align: left;}
</style>