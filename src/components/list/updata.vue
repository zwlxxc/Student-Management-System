<template>
  <div>
    <!--<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->
    <el-dialog title="修改窗口" :visible.sync="this.$store.state.dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="aaa">取 消</el-button>
        <el-button type="primary" @click="ccc" :disabled="this.$store.state.xiugai">修改</el-button>
        <el-button type="primary" @click="ddd" :disabled="this.$store.state.tianjai">添 加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "updata",
        data() {
            return {
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                formLabelWidth: '120px',
                mes: []
            };
        },
        methods: {
            aaa() {
                this.$store.commit('close');
            },
            bbb(){
                /*return this.$store.commit('updata')*/
                this.mes = this.$store.getters.getmes;
                this.form.name = this.mes.name;
                this.form.date = this.mes.date;
                this.form.address = this.mes.address;
            },
            ccc() {
                this.$store.commit('updata', this.form);
            },
            ddd() {
                this.$store.commit('add', this.form);
            },
            clear() {
                this.form.name = '';
                this.form.date = '';
                this.form.address = '';
            }
        }
    }
</script>

<style scoped>

</style>
