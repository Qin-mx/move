<template>
	<!--中间内容-->
	<div class="main">
		<!--加载显示-->
		<div class="loading" v-if='isLoading'>
			<div id="loading">
				<p class="pic">
				</p>
			</div>
		</div>
		<!--webkit-playsinline : 在ios中，加入此属性，可以关闭自动全屏播放
object-fit:fill : 视频充满video容器的大小-->
		<div class="bd-video">
			<video class="video" controls autoplay>
				<source :src="item.src[currentIndex]" type="video/mp4">
				<source />
				<p>您的浏览器暂时不支持MP4播放</p>
			</video>
			<marquee v-if="item.tag == '1'"  class="title" scrolldelay=3000 scrollamount=100>正在播放：{{item.title}}</marquee>
			<marquee v-if="item.tag == '2'"  class="title" scrolldelay=3000 scrollamount=100>正在播放：{{item.title}} 第{{currentIndex+1}}集</marquee>
		</div>

		<!--列表-->
		<ul class="vdzy clex">
			<li v-for=" (src,index) in item.src" v-if="item.tag == '1'" >
				<button class="btn" @click="changeSrc(index)">链接{{index+1}}</button>
			</li>
			<li v-if="item.tag == '2'" v-for="(src,index) in item.src">
				<button class="btn" @click="changeSrc(index)">第{{index+1}}集</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				currentIndex:0,
				item: {},
				urls: 'https://www.ifilm.ltd/api/',
				isLoading: false,
			}
		},
		methods: {
			changeSrc(index) {
				console.log(index)
				this.currentIndex = index;
			}
		},
		mounted() {
			this.isLoading = true;
			//			console.log(this.$route.params.id)  多加了个r
			this.axios.get(this.urls + 'films/' + this.$route.params.id)
				.then(res => {
					this.item = res.data
					this.isLoading = false;
//					console.log(this.item)
				}).catch(error => {
					alert('加载失败')
				})
		}
	}
</script>
<style scoped>

</style>