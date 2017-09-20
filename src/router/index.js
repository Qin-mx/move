import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Search from '@/components/Search'
import Tv from '@/components/Tv'
import Film from '@/components/Film'
import Play from '@/components/play/Play'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/login',
      name: 'login',
      component: Login,
    },
     {
      path: '/search',
      name: 'search',
      component: Search
    },
     {
      path: '/tv',
      name: 'tv',
      component: Tv
    },
    {
      path: '/film',
      name: 'film',
      component: Film
    },
    {
    	path: '/play/:id',
    	name:'play',
    	component: Play,
    	alias:'/move'
    }
  ]
})
// router
router.beforeEach((to, from, next)=> {
//	判断进入路由
	console.log(to,from)
	if(to.name === 'login'){
		next();
	}else{
		if(localStorage._chat_user){
			next();
		}else{
			router.push({path: 'login'});
		}
	}
//  if (to.name === 'login' || to.name === 'register') {
//      next();
//  } else {
//      //
//      if (localStorage._chat_user) {
//          next();
//      } else {
//          router.push({path: 'login'});
//      }
//  }
});
export default router;