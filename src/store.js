import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//多组件公用的存储仓库
export default new Vuex.Store({
  //公共数据读取方法：this.$store.state.adminName ...
  state: {  //当前数据状态，类似于组件对象的data属性
    adminName:'',//当前登录的管理员名字
    globalSettings:{ //项目的全局设置信息
      apiUrl:'http://127.0.0.1:8091', //初始的默认值

    }

  },
  //公共数据的修改方法：this.$store.commit('setAdmianName','boss')
  //公共数据的修改方法：this.$store.commit('setGlobalSettings','{....}')
  mutations: { //进化，转化   控制数据的进化（即修改state），类似于组件对象中methods------保证数据的 “响应式”
    setAdmianName(state,value){
      state.adminName=value;
    },
    setGlobalSettings(state,value){
      state.globalSettings=value;
    }
  },
  actions: {

  }
})
