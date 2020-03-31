import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Me = () => import('views/me/Me')
Vue.use(VueRouter);

const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component:Home
	},
	{
		path: '/me',
		component:Me
	},
	{
		path: '/category',
		component:Category
	}

]
const router = new VueRouter({
	routes:routes,
	mode: 'history'
})

export default router
