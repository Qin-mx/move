<template>
	<!--中间内容-->
	<div class="main">
		<!--电影-->
		<section class="floor clex">
			<header>
				<h3 class="fl">电影专区</h3>
				<a href="javascript:;" class="more fr"></a>
			</header>
			<div class="container">
				<ul class="lits clex">
					<li v-for="item in tvs">
						<router-link :to="{name:'play',params:{id:item.id}}" v-bind:title="item.title">
							<div class="img">
								<img :src="item.cover" alt="" />
							</div>
							<div class="img-dec">
								<p class="title">{{item.title}}</p>
								<span class="vd-pf">更新时间：{{item.updated_at
}}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
<!--加载显示-->
			<p @click="morePag" class="tips">{{tips}}</p>
			<!--加载显示-->
			<div class="loading" v-if='isLoading'>
				<div id="loading">
					<p class="pic">
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'film',
		data() {
			return {
				tips:'下一页',
				tvs: [],
				urls: 'https://www.ifilm.ltd/api/',
				nextPage: 1,
				scroll: 0,
				isEnd: false,
				isLoading:false
			}
		},
		methods: {
			fetch() {
				this.isLoading = true;
				this.axios.get(this.urls + 'tvs?page=' + this.nextPage)
					.then(res => {
						this.isLoading = false;
//						判断是否有数据
						if(res.data.data.length > 0){
							this.tvs = this.tvs.concat(res.data.data);
//							this.nextPage++
						}else{
							this.isEnd = true;
						}
					}).catch(error => {
						alert('加载失败')
					})
			},
			morePag(){
				if(this.isEnd == false){
					this.nextPage++
					this.fetch()
				}else{
					this.isEnd = false;
					this.tips = '全部加载完成'
				}
			}
		},
		mounted() {
//			var that = this
//			addEventListener('scroll', () => {
//				//  	页面的高度+滚动条的高度
//				this.scroll = document.body.scrollTop + document.body.offsetHeight
//			})
			this.fetch()
		},
//		watch: {
//			scroll() {
//				if((this.scroll > (document.body.scrollHeight - 60))) {
//					this.fetch()
//				}
//			}
//		}

	}
</script>
<style scoped>
	p.tips{
		    text-align: center;
    color: #20a0ff;
    cursor: pointer;
	}

	#loading {
		width: 100%;
		height: 84vh;
		position: fixed;
		top: 8vh;
		left: 0;
		background-color: #fff;
		z-index: 99;
	}
	
	#loading p {
		width: 40px;
		height: 40px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background: url(../assets/preloader.gif) no-repeat;
	}
</style>