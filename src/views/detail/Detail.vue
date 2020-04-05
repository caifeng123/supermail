<template>
	<div>
		<detailNavibar></detailNavibar>
	</div>
</template>

<script>
	import detailNavibar from './childComponents/detailNavibar.vue'
	export default {
		data() {
			return {
				item: {}
			}
		},
		components: {
			detailNavibar
		},
		created() {
			this.item = this.$route.query
		}
	}
</script>

<style>
</style>
