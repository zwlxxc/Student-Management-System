import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogFormVisible: false,
    tableData: [{
      date: '2016-05-02',
      name: '张三',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '李四',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王五',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '赵六',
      address: '上海市普陀区金沙江路 1516 弄'
    },],
    search: '',
    index: '',
    tianjai: '',
    xiugai: ''
  },
  mutations: {
    show(state, payload) {
      state.dialogFormVisible = !state.dialogFormVisible;
      state.index = payload.index;
      state.tianjai = payload.tianjai;
      state.xiugai = payload.xiugai;
    },
    close(state) {
      state.dialogFormVisible = !state.dialogFormVisible;
      state.index = ''
    },
    updata(state, payload) {
      state.tableData[state.index].date = payload.date;
      state.tableData[state.index].name = payload.name;
      state.tableData[state.index].address = payload.address;
      console.log(state.tableData);
      state.dialogFormVisible = !state.dialogFormVisible;
      state.index = ''
    },
    add(state, payload) {
      state.tableData.push(payload)
      console.log(state.tableData);
      state.dialogFormVisible = !state.dialogFormVisible;
      state.index = ''
    }
  },
  actions: {
  },
  getters: {
    getmes(state) {
      return state.tableData[state.index]
    }
  },
  modules: {
  }
})
