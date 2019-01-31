import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'
import Category from './views/Category.vue'
import CategroyList from './views/CategroyList.vue'
import CategroyAdd from './views/CategroyAdd.vue'
import CategroyDelete from './views/CategroyDelete.vue'
import CategroyUpate from './views/CategroyUpate.vue'
import DishList from './views/DishList.vue'
import DishAdd from './views/DishAdd.vue'
import DishDelete from './views/DishDelete.vue'
import DishUpate from './views/DishUpate.vue'
import OrderList from './views/OrderList.vue'
import Security from './views/Security.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/login'},
    {path: '/login',component: Login},
    {path:'/main',component:Main,children:[
      {path: '/settings',component: GlobalSettings},
      {path: '/table/list',component: TableList},
      {path: '/table/add',component: TableAdd},
      {path: '/table/delete',component: TableDelete},
      {path: '/category',component: Category},
      {path: '/category/list',component: CategroyList},
      {path: '/category/add',component: CategroyAdd},
      {path: '/category/delete',component:CategroyDelete},
      {path: '/category/update',component: CategroyUpate},
      {path: '/dish/list',component: DishList},
      {path: '/dish/add',component: DishAdd},
      {path: '/dish/delete',component: DishDelete},
      {path: '/dish/update',component: DishUpate},
      {path: '/order/list',component: OrderList},
      {path: '/security',Security},
      
    ]
  },
    {path:'/notfound',component:NotFound},
    
    
  ]
})
