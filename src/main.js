import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


/*全局插件设置*/
Vue.use(ElementUI)//注册ElementUI插件
Vue.prototype.$axios=axios//把axios设置为所有Vue组建实例的成员属性，以后可以使用this.$axios使用异步请求功能

Vue.config.productionTip = false

/*创建全局过滤器*/
Vue.filter('date',(val)=>{
  //把bigint转换为yyyy-mm-dd
  var date = new Date(val)
  var yy = date.getFullYear()
  var mm = date.getMonth()+1
  mm= mm>9?mm:'0'+mm
  var dd = date.getDate()
  dd = dd>9?dd:'0'+dd
  return yy+'-'+mm+'-'+dd
})
Vue.filter('dateTime',(val)=>{
  //把bigint转换为yyyy-mm-dd hh:mm:ss
  var date = new Date(val)
  var yy = date.getFullYear()
  var mm = date.getMonth()+1
  mm= mm>9?mm:'0'+mm
  var dd = date.getDate()
  dd = dd>9?dd:'0'+dd
  var hh = date.getHours()
  hh = hh>9?hh:'0'+hh
  var mi = date.getMinutes()
  mi = mi>9?mi:'0'+mi
  var ss = date.getSeconds()
  ss = ss>9?ss:'0'+ss
  return yy+'-'+mm+'-'+dd+'-'+hh+'-'+mi+'-'+ss
})
Vue.filter('currency',(val)=>{
  //把int转换为xx.yy 
  return '￥'+val
})
Vue.filter('tableStatus',(val)=>{
  if(val==1) return '空闲';
  else if(val==2) return '预定';
  else if(val==3) return '占用';
  else return '其他';
})

new Vue({
  router,
  store,     //制定当前项目唯一的Vuex存储仓库对象1其中保存着可供所有组件共享的数据
  render: h => h(App) //根据APP组件创建<APP></APP>元素
}).$mount('#app')
