<template>
	<div id="test">
		<h1>{{$store.state.age}}</h1><!-- 直接使用state数据 -->
		<button @click="add"></button>
		<h1>{{$store.getters.doubleage}}</h1>	<!-- 调用getters中函数 -->
		<button @click="update"></button>
	</div>
</template>

<script>
	export default {
		methods:{
			add(){		//调用mutations中函数
				let payload = 2
				//this.$store.commit('increment',payload)	此方法在后台直接接收payload
				this.$store.commit({	//此方法在后台接收整个obj对象{type,payload}
					type:'increment',
					payload
				})
			},
			update(){
				this.$store.dispatch('updateinfo').then(res=>{ //使用dispatch调用异步操作即actions中的函数
					console.log(res)														//返回的时promise对象对其进行操作
				})
			}
		}
	}
</script>

<style>
</style>
