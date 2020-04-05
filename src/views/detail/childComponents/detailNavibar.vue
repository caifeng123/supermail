<template>
	<NaviBar>
		<div slot='left' @click="backclick">&lt;</div>
		<div slot="center"><TabControl :titles="['价格','评论','点赞']"></TabControl></div>
	</NaviBar>
</template>

<script>
	import NaviBar from 'components/common/navibar/NaviBar.vue'
	import TabControl from 'components/common/tabcontrol/TabControl.vue'
	
	export default {
		components: {
			NaviBar,
			TabControl
		},
		methods:{
			backclick(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
</style>
