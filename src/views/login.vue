<template>
  <div id="login">
    <h2>登录页面</h2>
    <el-form ref="form" :model="form" label-width="20%">
      <el-form-item label="用户名:">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" round @click="login" class="btn">登录</el-button>
  </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            login() {
                if (this.form.username === 'aaa' && this.form.password === '123'){
                    this.$router.push({
                        path: '/main',
                        query: {
                            name: this.form.username,
                            password: this.form.password
                        }
                    })
                }else{
                    this.$alert('用户名或密码错误', '登录失败', {
                        confirmButtonText: '确定',
                    });
                    this.form.username = '';
                    this.form.password = '';
                }
            }
        },
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped>
  #login {
    height: 250px;
    width: 350px;
    margin: auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 20%;
    text-align: center;
    display: flex;
    flex-direction: column;/*横向*/
    padding: 30px;
  }
  #login h2 {
    padding-bottom: 30px;
  }
  .btn {
    width: 60%;
    margin: auto;
  }
</style>
