<template>
	<Swiper>
		<SwiperItem v-for='item in banner' :key='item.id'>
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
		</SwiperItem>
	</Swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default{
		props:{
			banner:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
</style>
