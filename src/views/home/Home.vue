<template>
	<div id='home'>
		<NaviBar class='home-nav'>
			<div slot='center'>购物商城</div>
		</NaviBar>
		<HomeSwiper :banner='banner'></HomeSwiper>
		<HomeRecommend :recommend='recommend' />
		<HomePopulation></HomePopulation>
		<TabControl :titles='titles' class="tabcontrol" @clicktab='clicktab'></TabControl>
		<div class="wrapper" ref='wrapper'>
			<div class="content">
				<GoodList ref='GoodList' :dataitem='show' :type='titles[index]' @getcontent='getcontent' />
			</div>
		</div>
		<BackTop @click.native='scrolltop' />
	</div>
</template>

<script>
	import NaviBar from 'components/common/navibar/NaviBar.vue';
	import TabControl from 'components/common/tabcontrol/TabControl.vue'
	import GoodList from 'components/content/goods/GoodList.vue'
	import BackTop from 'components/common/backtop/BackTop.vue'

	import HomeSwiper from './childComponents/HomeSwiper.vue'
	import HomeRecommend from './childComponents/HomeRecommend.vue'
	import HomePopulation from './childComponents/HomePopulation.vue'

	import BScroll from 'better-scroll'

	import {
		// getbanner,
		getcontent
	} from 'network/home-request.js'

	export default {
		data() {
			return {
				index: 0,
				banner: {},
				dKeyword: {},
				keywords: {},
				recommend: {},
				datas: {
					'欧美': {
						page: 0,
						list: []
					},
					'韩版': {
						page: 0,
						list: []
					},
					'日系': {
						page: 0,
						list: []
					},
				},
				titles: ['欧美', '韩版', '日系']
			}
		},
		computed: {
			show() {
				return this.datas[this.titles[this.index]].list
			}
		},
		components: {
			NaviBar,
			HomeSwiper,
			HomeRecommend,
			HomePopulation,
			TabControl,
			GoodList,
			BackTop
		},
		mounted() {
				this.scroll = new Bscroll(this.$refs.wrapper,{
					click:true
				})
		},
		created() {
			this.getcontent('欧美')
			this.getcontent('韩版')
			this.getcontent('日系')
		},
		methods: {
			/**
			 * 网络请求
			 */
			getcontent(type) {
				const page = this.datas[type].page + 1
				getcontent(type, page).then(res => {
					this.datas[type].list.push(...res.data.showapi_res_body.pagebean.contentlist)
					this.datas[type].page++
				})
			},
			/**
			 * 事件处理
			 */
			clicktab(index) {
				this.index = index;
				this.scrolltop()
			},
			scrolltop() {
				this.$refs.GoodList.$el.scrollIntoView()
			}
		}
	}
</script>

<style>
	.home-nav {
		background: pink;
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}

	#home {
		padding: 44px 0 50px 0;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.tabcontrol {
		position: sticky;
		top: 44px;
	}
</style>
