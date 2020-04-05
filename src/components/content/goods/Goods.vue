<template>
	<div id='goods' @click="itemclick">
		<img :lazy-src="item.avatarUrl" :key='type'>
		<div class="goodstext">
			<div class="goodstext_1">
				点赞数:<span class="totalFanNum">{{item.totalFanNum}}</span>
				<span class="realName fr">{{item.realName}}</span>
			</div>
			<div class="goodstext_2">
				<span class="height">升高:{{item.height?item.height+'cm':'未知'}}</span>
				<span class="weight fr">体重:{{item.weight?item.weight+'kg':'未知'}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
			type: {
				type: String,
				default () {
					return ''
				}
			}
		},
		methods:{
			itemclick(){
				this.$router.push({
					path:'/detail/',
					query:{
						item:this.item
					}
				})
			}
		}
	}
</script>

<style>
	#goods {
		width: 100%;
		padding: 5px;
		box-sizing: border-box;
		display: inline-block;
		border: 3px solid #ccc;
	}

	#goods img {
		width: 100%;
	}

	.goodstext {
		font-size: 12px;
		padding: 3px 15px;
	}

	.goodstext_1 {
		border-bottom: 2px solid #eee;
	}

	.totalFanNum {
		color: red;
	}
</style>
