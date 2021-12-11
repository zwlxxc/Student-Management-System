<template>
  <div id="main">
    <el-container>
      <el-header>
        <div class="logo" >
          <img src="../assets/img/logo.png">
        </div>
        <div class="user">
          你好，{{username}}
        </div>
      </el-header>
      <el-main>
        <div class="left">
          <row></row>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import row from '../components/Row/Row'
  import list from '../components/list/list'
  export default {
      name: 'Main',
      components: {
          row,list
      },
      data() {
          return{
              username: ''
          }
      },
      created() {
          this.username = this.$route.query.name;
      }
  }
</script>

<style scoped>
  #main {
    width: 100%;
  }
  .el-header, .el-footer {
    background-color: #5e6f4d;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .logo {
    float: left;
    margin: 0 auto;
  }
  .logo img{
    padding-top: 5px;
    height: 50px;
  }
  .user {
    float: right;
    color: #f7fffc;
    font-size: 22px;
    margin-right: 50px;
  }

  .el-main {
    background-color: #f6f6f6;
    color: #333;
    text-align: center;
    padding: 0;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 60px;
    bottom: 60px;
    left: 0;
    right: 0;
  }
  .left {
    width: 210px;
  }
  .right {
    background: antiquewhite;
    flex: 1;
  }
</style>
