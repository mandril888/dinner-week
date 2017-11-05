import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

Vue.use(Router)
Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-center',
  defaultType: 'info',
  defaultTimeout: 1000
})
// this.$toastr('add',
// { title: 'Heyy',
// msg: '',
// clickClose: true,
// timeout: 1500,
// position: 'toast-bottom-center',
// type: 'error' })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    }
  ]
})
