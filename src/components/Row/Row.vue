<template>
  <el-row class="tac">
    <el-col :span="12" >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#ffffff"
        text-color="#000000"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1" @click="stulist">学生列表</el-menu-item>
            <el-menu-item index="1-2">暂无数据</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Row",
        methods: {
            stulist() {
                this.$router.push('/main/list')
            }
        }
    }
</script>

<style scoped>
  .el-col-12 {
    width: 100%;
    height: 100%;
  }
</style>
