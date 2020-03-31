<template>
	<div id='home'>
		<NaviBar class='home-nav'>
			<div slot='center'>购物商城</div>
		</NaviBar>
		<HomeSwiper :banner='banner'></HomeSwiper>
		<HomeRecommend :recommend='recommend' />
		<!-- 			<HomeRecommendItem v-for='item in recommend' :key='item.id'>
				<div slot='img'><img :src="item.image" alt=""></div>
				<div slot='title'>{{item.title}}</div>
			</HomeRecommendItem> -->
	</div>
</template>

<script>
	import NaviBar from 'components/common/navibar/NaviBar.vue';
	import HomeSwiper from './childComponents/HomeSwiper.vue'

	import HomeRecommend from './childComponents/HomeRecommend.vue'

	import {
		getbanner
	} from 'network/home-request.js'

	export default {
		data() {
			return {
				banner: {},
				dKeyword: {},
				keywords: {},
				recommend: {}
			}
		},
		components: {
			NaviBar,
			HomeSwiper,
			HomeRecommend
		},
		created() {
			getbanner().then(res => {
				this.banner = res.data.data.banner.list,
					this.dKeyword = res.data.data.dKeyword.list,
					this.keywords = res.data.data.keywords.list,
					this.recommend = res.data.data.recommend.list
			})
		}
	}
</script>

<style>
	.home-nav {
		background: pink;
		color: white;
	}

	.img {
		width: 100%;
		height: 100%;
	}
</style>
