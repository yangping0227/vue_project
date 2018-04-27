import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home"
import list from "../components/list"
import detail from "../components/detail"
import collect from "../components/collect"
import add from "../components/add"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:home},
    {path:'/collect',component:collect},
    {path:'/add',component:add},
    {path:'/detail',component:detail},
    {path:'/list',component:list}
  ]
})
