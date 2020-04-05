//1.导入插件
import Vue from 'vue'
import Vuex from 'vuex'

//2.安装插件
Vue.use(Vuex)

//3.创建对象
const store = new Vuex.Store({
	state:{			//共享的数据
		age:18
	},
	mutations:{	//同步方法	类似于methods 可接收传入参数payload=》obj|arr|num
		increment(state,payload){
			state.age++;
		}
	},
	actions:{	//异步方法
		updateinfo(context){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					context.commit('increment')
					resolve()
				},1000)
			})
		}
	},
	getters:{		//将数据处理后返回	类似于computed 
		doubleage(state){
			return function(age){
				return age++;
			}
		}
	},
	modules:{//定义模块
		a:{
			state:{},
			mutations:{},
			actions:{},
			getters:{}
		}
		
	}
})

//3.导出store模块
export default store