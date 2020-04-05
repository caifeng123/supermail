<template>
	<div>
		<waterfall :col='col' :data='dataitem' @loadmore="loadmore">
			<template>
				<div v-for='item in dataitem' :key='item.id'>
					<Goods :item='item' :type='type'></Goods>
				</div>
			</template>
		</waterfall>
	</div>
</template>

<script>
	import Goods from 'components/content/goods/Goods.vue'
	import Vue from 'vue'
	import waterfall from 'vue-waterfall2'
	Vue.use(waterfall)
	export default {
		props: {
			dataitem: {
				type: Array,
				default () {
					return []
				}
			},
			type: {
				type: String,
				default () {
					return ''
				}
			}
		},
		data() {
			return {
				col: 2
			}
		},
		components: {
			Goods,
		},
		methods: {
			loadmore() {
				this.$emit('getcontent', this.type)
			}
		}
	}
</script>

<style>
</style>
