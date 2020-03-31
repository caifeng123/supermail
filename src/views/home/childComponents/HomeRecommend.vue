<template>
	<div id="recommend">
		<div v-for="item in recommend" :key='item.id' class="everyitem">
			<a :href="item.link">
				<img :src="item.image" alt="" class="image">
				<div class="title">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			recommend: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style>
	#recommend {
		display: flex;
		height: 88px;
		text-align: center;
		font-size: 15px;
		padding: 2px 2px 20px 2px;
		border-bottom: 8px solid #eee;
	}

	.everyitem {
		flex: 1;
	}

	.image {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		margin: 5px auto;
		display: block;
	}
</style>
