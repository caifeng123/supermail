<template>
	<div id='tabcontrol'>
		<div v-for="(item,index) in titles" :key='item.id' class="title">
			<span :class="{tabcontrolactive:index === currentIndex}" @click="changeclick(index)">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			titles: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			changeclick(index) {
				this.currentIndex = index
				this.$emit('clicktab',index)
			}
		}
	}
</script>

<style>
	#tabcontrol {
		height: 44px;
		display: flex;
		background: #fff;
		z-index: 99;
	}

	#tabcontrol .title {
		text-align: center;
		line-height: 44px;
		flex: 1;
	}

	.tabcontrolactive {
		color: pink;
		border-bottom: 3px solid pink;
		padding: 4px 10px;
	}
</style>
