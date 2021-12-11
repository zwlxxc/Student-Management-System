<template>
  <div>
    <table class="hovertable">
      <tr>
        <th>日期</th><th>姓名</th><th>家庭住址</th><th>操作</th>
      </tr>
      <tr v-for="(item, index) in this.$store.state.tableData">
        <td>{{item.date}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>
          <button class="btn1" @click="handleEdit(index)">编辑</button>
          <button class="btn2" @click="handleDelete(index)">删除</button>
        </td>
      </tr>
      <button class="btn3" @click="handleAdd">添加</button>
    </table>
    <updata ref="updatacom"></updata>
  </div>
</template>

<script>
  import updata from "./updata";
  export default {
      name: "list",
      data() {
        return {
            active: {
                xiugai: true,
                tianjai: true,
                index: '',
            }
        }
      },
      components: {
          updata
      },
      methods: {
          handleEdit(item) {
              this.active.index = item;
              this.active.tianjai = true;
              this.active.xiugai = false;
              this.$store.commit('show', this.active);
              this.$refs.updatacom.bbb()
          },
          handleAdd() {
              this.$refs.updatacom.clear();
              this.active.tianjai = false;
              this.active.xiugai = true;
              return this.$store.commit('show', this.active);
          },
          handleDelete(index) {
              this.$store.state.tableData.splice(index, 1);
              console.log(this.$store.state.tableData);
          }
      },
  }
</script>

<style scoped>
  table.hovertable {
    font-family: verdana,arial,sans-serif;
    font-size:18px;
    color:#333333;
    border-width: 1px;
    border-color: #999999;
    border-collapse: collapse;
    width: 100%;
  }
  table.hovertable th {
    background-color: #f3ffea;
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #cadda0;
  }
  table.hovertable tr {
    background-color: #f7fffc;
  }
  table.hovertable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #a9c6c9;
  }
  .btn1 {
    width: 100px;
    height: 40px;
    border-radius: 25px;
    margin-right: 20px;
    background: #cadda0;
    border: #f7fffc solid 1px;
  }
  .btn2 {
    width: 100px;
    height: 40px;
    border-radius: 25px;
    background: #dc5e66;
    color: #f6f6f6;
    border: #f7fffc solid 1px;
  }
  .btn3 {
    width: 100px;
    height: 40px;
    border-radius: 25px;
    margin: 20px;
    background: #cadda0;
    border: #f7fffc solid 1px;
  }
</style>
